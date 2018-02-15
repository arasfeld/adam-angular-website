using Api.Data;
using Api.Entities;
using Api.Filters;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Api.Repositories
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly ApplicationDbContext _db;

        public PhotoRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Photo> Browse(PhotoFilter filter)
        {
            return _db.Photos
                .Include(p => p.Image)
                .OrderByDescending(p => p.Timestamp)
                .Where(MatchesFilter(filter))
                .Skip(filter.PageSize * (filter.PageNumber - 1))
                .Take(filter.PageSize);
        }

        public Photo Read(int photoId)
        {
            return _db.Photos
                .Include(p => p.Image)
                .FirstOrDefault(p => p.PhotoId == photoId);
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

        private Func<Photo, bool> MatchesFilter(PhotoFilter filter)
        {
            if (filter == null) return p => true;

            return p =>
                (!filter.PhotoId.HasValue || filter.PhotoId.Value == p.PhotoId) &&
                (!filter.StartTime.HasValue || filter.StartTime.Value <= p.Timestamp) &&
                (!filter.EndTime.HasValue || filter.EndTime.Value >= p.Timestamp);
        }
    }
}
