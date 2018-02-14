using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data;
using Api.Entities;

namespace Api.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly ApplicationDbContext _db;

        public ImageRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Image> Browse()
        {
            return _db.Images;
        }

        public Image Read(int imageId)
        {
            return _db.Images.FirstOrDefault(p => p.ImageId == imageId);
        }

        public Image Edit(Image image)
        {
            Image existingImage = _db.Images.FirstOrDefault(p => p.ImageId == image.ImageId);
            _db.Entry(existingImage).CurrentValues.SetValues(image);
            _db.SaveChanges();
            return image;
        }

        public Image Add(Image image)
        {
            _db.Images.Add(image);
            _db.SaveChanges();
            return image;
        }

        public bool Delete(int imageId)
        {
            Image image = _db.Images.FirstOrDefault(p => p.ImageId == imageId);
            _db.Images.Remove(image);
            _db.SaveChanges();
            return true;
        }
    }
}
