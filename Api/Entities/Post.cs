using Api.Validation;
using FluentValidation.Attributes;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Entities
{
    [Validator(typeof(PostValidator))]
    public class Post
    {
        [Key]
        public int PostId { get; set; }

        public int? ImageId { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime Timestamp { get; set; }

        // Navigation properties

        [ForeignKey("ImageId")]
        public Image Image { get; set; }
    }
}
