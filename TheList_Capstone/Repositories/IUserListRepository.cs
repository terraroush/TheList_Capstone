using System.Collections.Generic;
using TheList_Capstone.Models;
using TheList_Capstone.Models.ViewModels;

namespace TheList_Capstone.Repositories
{
    public interface IUserListRepository
    {
        List<UserListSummary> Get();
        List<UserListSummary> GetByUserId(int userId);
        void Add(UserList userList);
        UserList GetById(int id);
        void Update(UserList userList);
        void Delete(UserList userList);
    }
}