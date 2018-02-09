using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        // GET api/posts
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/posts/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/posts
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/posts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/posts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
