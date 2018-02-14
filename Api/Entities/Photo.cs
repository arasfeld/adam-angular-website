using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Entities
{
    public class Photo
    {
        [Key]
        public int PhotoId { get; set; }

        public int ImageId { get; set; }

        public string Title { get; set; }

        public string Caption { get; set; }

        public DateTime Timestamp { get; set; }

        // Navigation properties

        [ForeignKey("ImageId")]
        public Image Image { get; set; }
    }
}
