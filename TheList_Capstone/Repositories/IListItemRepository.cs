using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IListItemRepository
    {
        void Add(ListItem listItem);
        void Delete(ListItem listItem);
        List<ListItem> GetAll();
        ListItem GetById(int id);
        void Update(ListItem listItem);
    }
}