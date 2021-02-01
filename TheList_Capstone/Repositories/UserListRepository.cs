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
        private ApplicationDbContext _context;

        public UserListRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserListSummary> Get()
        {
            return _context.UserList
                .Where(ul => ul.Public)
                .Where(ul => ul.DateCreated <= DateTime.Now)
                .OrderByDescending(ul => ul.DateCreated)
                .Take(4)
                .Select(ul => new UserListSummary()
                {
                    Id = ul.Id,
                    Title = ul.Title,
                    //AbbreviatedList = ul.ListItems.GetRange(0, 3),
                    AuthorId = ul.UserProfileId,
                    AuthorName = ul.UserProfile.UserName,
                    DateCreated = ul.DateCreated,
                    //ListKind = ul.ListKind.Name
                })
                .ToList();
        }

        public List<UserListSummary> GetByUserId(int userId)
        {
            return _context.UserList
                .Where(l => l.UserProfileId == userId)
                .Where(l => l.Public)
                .OrderByDescending(p => p.DateCreated)
                .Select(l => new UserListSummary()
                {
                    Id = l.Id,
                    Title = l.Title,
                    //AbbreviatedList = l.ListItems.GetRange(0, 3),
                    AuthorId = l.UserProfileId,
                    AuthorName = l.UserProfile.UserName,
                    DateCreated = l.DateCreated,
                    //ListKind = l.ListKind.Name
                })
                .ToList();
        }

        public UserList GetById(int id)
        {
            return _context.UserList
                .Include(l => l.UserProfile)
                .Include(l => l.ListKind)
                .Where(l => l.Id == id)
                .FirstOrDefault();
        }

        public List<UserList> GetAll()
        {
            return _context.UserList
                .OrderByDescending(ul => ul.DateCreated)
                .ToList();
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
