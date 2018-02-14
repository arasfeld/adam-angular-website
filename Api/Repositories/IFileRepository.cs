using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public interface IFileRepository
    {
        IFormFile Get(string fileName);

        bool Add(IFormFile file);

        bool Delete(string fileName);
    }
}
