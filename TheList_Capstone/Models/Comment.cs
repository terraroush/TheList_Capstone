using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Capstone.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Message { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }

        [Required]
        public int PlanId { get; set; }

        public Plan Plan { get; set; }
    }
}
