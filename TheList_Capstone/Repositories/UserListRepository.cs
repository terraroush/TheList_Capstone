using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;
using TheList_Capstone.Models.ViewModels;


namespace TheList_Capstone.Repositories
{
    public class UserListRepository : IUserListRepository
    {
        private readonly ApplicationDbContext _context;

        public UserListRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Will need to update to filter only public list eventually. Keeping as is for testing purposes rn
        public List<UserList> GetAll()
        {
            return _context.UserList
                .Include(ul => ul.ListItems)
                .Include(ul => ul.UserProfile)
                .Include(ul => ul.ListKind)
                .OrderByDescending(ul => ul.DateCreated)
                .ToList();
        }
        public List<UserList> GetByUserProfileId(int id)
        {
            return _context.UserList
                .Include(ul => ul.ListItems)
                .Include(ul => ul.UserProfile)
                .Where(ul => ul.UserProfileId == id)
                .OrderByDescending(ul => ul.DateCreated)
                .ToList();
        }

        public UserList GetById(int id)
        {
            return _context.UserList
                .Include(ul => ul.ListItems)
                .Include(ul => ul.UserProfile)
                .Include(ul => ul.ListKind)
                .Where(ul => ul.Id == id)
                .FirstOrDefault();
        }

        public void Add(UserList userList)
        {
            userList.DateCreated = DateTime.Now;

            _context.Add(userList);
            _context.SaveChanges();
        }

        public void Update(UserList userList)
        {
            _context.Entry(userList).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(UserList userList)
        {
            _context.UserList.Remove(userList);
            _context.SaveChanges();
        }
    }
}
