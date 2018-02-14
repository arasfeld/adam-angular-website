using Api.Entities;
using Api.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public class PostService
    {
        private readonly IFileRepository _fileRepository;
        private readonly IImageRepository _imageRepository;
        private readonly IPostRepository _postRepository;

        public PostService(IFileRepository fileRepository, IImageRepository imageRepository, IPostRepository postRepository)
        {
            _fileRepository = fileRepository;
            _imageRepository = imageRepository;
            _postRepository = postRepository;
        }

        public IEnumerable<Post> Browse()
        {
            return _postRepository.Browse();
        }

        public Post Read(int postId)
        {
            return _postRepository.Read(postId);
        }

        public Post Edit(Post post)
        {
            return _postRepository.Edit(post);
        }

        public Post Add(Post post)
        {
            post.Timestamp = DateTime.UtcNow;
            return _postRepository.Add(post);
        }

        public bool Delete(int postId)
        {
            return _postRepository.Delete(postId);
        }
    }
}
