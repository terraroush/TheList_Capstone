using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Back_end_Capstone_ServerSide.Models
{
    public class List
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string Title { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        public DateTime DateUpdated { get; set; }

        public DateTime Deadline { get; set; }

        [Required]
        public bool Active { get; set; }

        [Required]
        public bool Public { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }

        [Required]
        public int ListTypeId { get; set; }

        public ListType ListType { get; set; }

        public List<ListItem> ListItems { get; set; }

    }
}
