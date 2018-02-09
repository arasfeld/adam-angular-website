using Microsoft.AspNetCore.Identity;

namespace Api.Entities
{
    public class User : IdentityUser
    {
        // Extended Properties
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PictureUrl { get; set; }
    }
}
