using Api.Entities;
using Api.Filters;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Api.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly string _connectionString;

        public PostRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public IEnumerable<Post> Browse(PostFilter filter)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                return connection.Query<Post, Image, Post>($@"
                    SELECT * FROM [Posts] P
                        LEFT JOIN [Images] I ON P.[ImageId] = I.[ImageId]",
                    (post, image) =>
                    {
                        post.Image = image;
                        return post;
                    },
                    splitOn: "ImageId");
            }
        }

        public Post Read(int postId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                IEnumerable<Post> posts = connection.Query<Post, Image, Post>($@"
                    SELECT * FROM [Posts] P
                        LEFT JOIN [Images] I ON P.[ImageId] = I.[ImageId]",
                    (post, image) =>
                    {
                        post.Image = image;
                        return post;
                    },
                    splitOn: "ImageId");
                return posts.FirstOrDefault();
            }
        }

        public Post Edit(Post post)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                connection.Execute($@"
                    UPDATE [Posts] 
                    SET [ImageId] = @{nameof(Post.ImageId)},
                        [Title] = @{nameof(Post.Title)},
                        [Body] = @{nameof(Post.Body)},
                        [Timestamp] = GETUTCDATE()
                    WHERE [ImageId] = @{nameof(Image.ImageId)}", post);
            }

            return post;
        }

        public Post Add(Post post)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                post.PostId = connection.QuerySingle<int>($@"
                    INSERT INTO [Posts] ([ImageId], [Title], [Body], [Timestamp])
                    VALUES (@{nameof(Post.ImageId)}, @{nameof(Post.Title)}, @{nameof(Post.Body)}, GETUTCDATE());
                    SELECT CAST(SCOPE_IDENTITY() as int)", post);
            }

            return post;
        }

        public bool Delete(int postId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                connection.Execute($@"
                    DELETE FROM [Posts] 
                    WHERE [PostId] = @{nameof(postId)}",
                    new { postId });
            }

            return true;
        }

        private Func<Post, bool> MatchesFilter(PostFilter filter)
        {
            if (filter == null) return p => true;

            return p => 
                (!filter.PostId.HasValue || filter.PostId.Value == p.PostId) &&
                (!filter.StartTime.HasValue || filter.StartTime.Value <= p.Timestamp) &&
                (!filter.EndTime.HasValue || filter.EndTime.Value >= p.Timestamp);
        }
    }
}
