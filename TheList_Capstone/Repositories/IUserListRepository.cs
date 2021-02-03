using System.Collections.Generic;
using TheList_Capstone.Models;
using TheList_Capstone.Models.ViewModels;

namespace TheList_Capstone.Repositories
{
    public interface IUserListRepository
    {
        List<UserList> GetAll();
        List<UserList> GetByUserProfileId(int id);
        UserList GetById(int id);
        void Add(UserList userList);
        void Update(UserList userList);
        void Delete(UserList userList);
    }
}