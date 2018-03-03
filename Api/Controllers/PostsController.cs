using Api.Entities;
using Api.Filters;
using Api.Repositories;
using Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        public IEnumerable<Post> Get([FromQuery]PostFilter filter)
        {
            return postService.Browse(filter);
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
        public Post Post()
        {
            Post post = new Post
            {
                Title = Request.Form["title"],
                Body = Request.Form["body"]
            };
            IFormFile file = Request.Form.Files["file"];
            return postService.Add(post, file);
        }

        // PUT api/posts
        [HttpPut]
        public Post Put()
        {
            Post post = new Post
            {
                Title = Request.Form["title"],
                Body = Request.Form["body"]
            };
            IFormFile file = Request.Form.Files["file"];
            return postService.Edit(post, file);
        }

        // DELETE api/posts/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return postService.Delete(id);
        }
    }
}
