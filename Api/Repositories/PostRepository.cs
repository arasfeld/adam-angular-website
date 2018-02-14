using System;
using System.Collections.Generic;
using System.Linq;
using Api.Data;
using Api.Entities;

namespace Api.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly ApplicationDbContext _db;

        public PostRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Post> Browse()
        {
            return _db.Posts;
        }

        public Post Read(int postId)
        {
            return _db.Posts.FirstOrDefault(p => p.PostId == postId);
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
    }
}
