using Api.Entities;
using System.Collections.Generic;

namespace Api.Repositories
{
    public interface IPhotoRepository
    {
        IEnumerable<Photo> Browse();

        Post Read(int postId);

        Post Edit(Post post);

        Post Add(Post post);

        bool Delete(int postId);
    }
}
