using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data;
using Api.Entities;

namespace Api.Repositories
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly ApplicationDbContext _db;

        public PhotoRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Photo> Browse()
        {
            return _db.Photos;
        }

        public Photo Read(int photoId)
        {
            return _db.Photos.FirstOrDefault(p => p.PhotoId == photoId);
        }

        public Photo Edit(Photo photo)
        {
            Photo existingPhoto = _db.Photos.FirstOrDefault(p => p.PhotoId == photo.PhotoId);
            _db.Entry(existingPhoto).CurrentValues.SetValues(photo);
            _db.SaveChanges();
            return photo;
        }

        public Photo Add(Photo photo)
        {
            _db.Photos.Add(photo);
            _db.SaveChanges();
            return photo;
        }

        public bool Delete(int photoId)
        {
            Photo photo = _db.Photos.FirstOrDefault(p => p.PhotoId == photoId);
            _db.Photos.Remove(photo);
            _db.SaveChanges();
            return true;
        }
    }
}
