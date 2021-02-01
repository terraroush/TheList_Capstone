using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Capstone.Models
{
    public class ListItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int UserListId { get; set; }

        public UserList List { get; set; }
    }
}
