using Api.Data;
using Api.Entities;
using Api.Filters;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly ApplicationDbContext _db;

        public PostRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Post> Browse(PostFilter filter)
        {
            return _db.Posts
                .Include(p => p.Image)
                .OrderByDescending(p => p.Timestamp)
                .Where(MatchesFilter(filter))
                .Skip(filter.PageSize * (filter.PageNumber - 1))
                .Take(filter.PageSize);
        }

        public Post Read(int postId)
        {
            return _db.Posts
                .Include(p => p.Image)
                .FirstOrDefault(p => p.PostId == postId);
        }

        public Post Edit(Post post)
        {
            Post existingPost = _db.Posts.FirstOrDefault(p => p.PostId == post.PostId);
            _db.Entry(existingPost).CurrentValues.SetValues(post);
            _db.SaveChanges();
            return post;
        }

        public Post Add(Post post)
        {
            _db.Posts.Add(post);
            _db.SaveChanges();
            return post;
        }

        public bool Delete(int postId)
        {
            Post post = _db.Posts.FirstOrDefault(p => p.PostId == postId);
            _db.Posts.Remove(post);
            _db.SaveChanges();
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
