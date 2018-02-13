using System;

namespace Api.Entities
{
    public class Image
    {
        public int ImageId { get; set; }

        public string FileName { get; set; }

        public string Extension { get; set; }

        public DateTime Timestamp { get; set; }

        // Navigation properties

        public Post Post { get; set; }

        public Photo Photo { get; set; }
    }
}
