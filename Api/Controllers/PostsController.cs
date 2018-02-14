using Api.Entities;
using Api.Repositories;
using Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private readonly PostService postService;

        public PostsController(IFileRepository fileRepository, IImageRepository imageRepository, IPostRepository postRepository)
        {
            postService = new PostService(fileRepository, imageRepository, postRepository);
        }

        // GET api/posts
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return postService.Browse();
        }

        // GET api/posts/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public Post Get(int id)
        {
            return postService.Read(id);
        }

        // POST api/posts
        [HttpPost]
        public Post Post([FromBody]Post post)
        {
            return postService.Add(post);
        }

        // PUT api/posts
        [HttpPut]
        public Post Put([FromBody]Post post)
        {
            return postService.Edit(post);
        }

        // DELETE api/posts/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return postService.Delete(id);
        }
    }
}
