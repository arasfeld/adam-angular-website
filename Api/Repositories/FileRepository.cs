using Api.Config;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.IO;

namespace Api.Repositories
{
    public class FileRepository : IFileRepository
    {
        private readonly IOptions<FileSettings> _fileSettings;

        public FileRepository(IOptions<FileSettings> fileSettings)
        {
            _fileSettings = fileSettings;
        }

        public IFormFile Get(string fileName)
        {
            string filePath = _fileSettings.Value.Path + "\\" + fileName;
            Byte[] bytes = File.ReadAllBytes(filePath);
            return null;
        }

        public bool Add(IFormFile file)
        {
            throw new NotImplementedException();
        }

        public bool Delete(string fileName)
        {
            throw new NotImplementedException();
        }
    }
}
