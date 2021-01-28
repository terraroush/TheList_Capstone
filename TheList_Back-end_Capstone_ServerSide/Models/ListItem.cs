using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Back_end_Capstone_ServerSide.Models
{
    public class ListItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int ListId { get; set; }

        public List List { get; set; }
    }
}
