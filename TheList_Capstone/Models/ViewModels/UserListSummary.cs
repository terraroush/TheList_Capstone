using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace TheList_Capstone.Models.ViewModels
{
    public class UserListSummary
    {
        public int Id { get; set; }
        public string Title { get; set; }

        /*need to turn this string into a list?*/
        [JsonIgnore]
        //public List<AbbreviatedList> AbbreviatedList { get; set; }
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public DateTime DateCreated { get; set; }
        public ListKind ListKind { get; set; }
        //public string PreviewText => AbbreviatedList + "...";
    }
}
