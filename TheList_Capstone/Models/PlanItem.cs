using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Capstone.Models
{
    public class PlanItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int PlanId { get; set; }

        public Plan Plan { get; set; }
    }
}
