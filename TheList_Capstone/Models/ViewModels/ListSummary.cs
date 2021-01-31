using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheList_Back_end_Capstone_ServerSide.Models.ViewModels
{
    public class ListSummary
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string AbbreviatedList { get; set; }
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public DateTime DateCreated { get; set; }
        public int ListTypeId { get; set; }
        public ListType ListType { get; set; }
        public string PreviewText => AbbreviatedList + "...";
    }
}
