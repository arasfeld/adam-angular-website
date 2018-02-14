using Api.Entities;
using System.Collections.Generic;

namespace Api.Repositories
{
    public interface IPhotoRepository
    {
        IEnumerable<Photo> Browse();

        Photo Read(int photoId);

        Photo Edit(Photo photo);

        Photo Add(Photo photo);

        bool Delete(int photoId);
    }
}
