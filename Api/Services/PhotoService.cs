using Api.Entities;
using Api.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Services
{
    public class PhotoService
    {
        private readonly IFileRepository _fileRepository;
        private readonly IImageRepository _imageRepository;
        private readonly IPhotoRepository _photoRepository;

        public PhotoService(IFileRepository fileRepository, IImageRepository imageRepository, IPhotoRepository photoRepository)
        {
            _fileRepository = fileRepository;
            _imageRepository = imageRepository;
            _photoRepository = photoRepository;
        }

        public IEnumerable<Photo> Browse()
        {
            return _photoRepository.Browse();
        }

        public Photo Read(int photoId)
        {
            return _photoRepository.Read(photoId);
        }

        public Photo Edit(Photo photo)
        {
            return _photoRepository.Edit(photo);
        }

        public Photo Add(Photo photo)
        {
            photo.Timestamp = DateTime.UtcNow;
            return _photoRepository.Add(photo);
        }

        public bool Delete(int photoId)
        {
            return _photoRepository.Delete(photoId);
        }
    }
}
