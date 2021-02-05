using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Capstone.Models
{
    public class PlanType
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public bool IsGrocery { get; set; }
    }
}
