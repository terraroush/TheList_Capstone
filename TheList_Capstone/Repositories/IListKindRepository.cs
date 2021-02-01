using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IListKindRepository
    {
        List<ListKind> GetAll();
        ListKind GetById(int id);
    }
}