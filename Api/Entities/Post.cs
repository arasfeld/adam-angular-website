using System;

namespace Api.Entities
{
    public class Post
    {
        public int PostId { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public string ImagePath { get; set; }

        public bool IsActive { get; set; }

        public DateTime Timestamp { get; set; }
    }
}
