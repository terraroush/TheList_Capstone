using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Capstone.Models
{
    public class Connection
    {
        public int Id { get; set; }

        [Required]
        public int ConnecterUserProfileId { get; set; }

        public UserProfile ConnecterUserProfile { get; set; }
        [Required]
        public int ProviderUserProfileId { get; set; }

        public UserProfile ProviderUserProfile { get; set; }

    }
}
