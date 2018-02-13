﻿using System;

namespace Api.Entities
{
    public class Post
    {
        public int PostId { get; set; }

        public int? ImageId { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime Timestamp { get; set; }

        // Navigation properties

        public Image Image { get; set; }
    }
}