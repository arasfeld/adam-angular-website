using Api.Entities;
using Api.Repositories;
using Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    public class PhotosController : Controller
    {
        private readonly PhotoService photoService;

        public PhotosController(IFileRepository fileRepository, IImageRepository imageRepository, IPhotoRepository photoRepository)
        {
            photoService = new PhotoService(fileRepository, imageRepository, photoRepository);
        }

        // GET api/photos
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Photo> Get()
        {
            return photoService.Browse();
        }

        // GET api/photos/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public Photo Get(int id)
        {
            return photoService.Read(id);
        }

        // POST api/photos
        [HttpPost]
        public async Task Post(IFormFile file)
        {
            if (file == null) throw new Exception("File is null");
            if (file.Length == 0) throw new Exception("File is empty");

            string filePath = Path.GetTempFileName();

            using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
        }

        // PUT api/photos
        [HttpPut]
        public Photo Put([FromBody]Photo photo)
        {
            return photoService.Edit(photo);
        }

        // DELETE api/photos/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return photoService.Delete(id);
        }
    }
}
