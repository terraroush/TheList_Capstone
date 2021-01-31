using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Back_end_Capstone_ServerSide.Data;

namespace TheList_Back_end_Capstone_ServerSide.Repositories
{
    public class UserListRepository
    {
        private ApplicationDbContext _context;

        public UserListRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserListSummary> Get()
        {
            return _context.UserList
                .Include(l => l.ListKindId)
                .Where(l => l.Public)
                .Where(l => l.Deadline <= DateTime.Now)
                .OrderByDescending(l => l.DateCreated)
                .Select(l => new UserListSummary()
                {
                    Id = l.Id,
                    Title = l.Title,
                    AbbreviatedList = l.ListItems.GetRange(0, 3),
                    AuthorId = l.UserProfileId,
                    AuthorName = l.UserProfile.UserName,
                    DateCreated = l.DateCreated,
                    ListType = l.ListKind.Name
                })
                .ToList();
        }

        public List<UserListSummary> GetByUserId(int userId)
        {
            return _context.UserList
                .Where(l => l.UserProfileId == userId)
                .Select(l => new UserListSummary()
                {
                    Id = l.Id,
                    Title = l.Title,
                    AbbreviatedList = l.ListItems.GetRange(0, 3),
                    AuthorId = l.UserProfileId,
                    AuthorName = l.UserProfile.UserName,
                    DateCreated = l.DateCreated,
                    ListType = l.ListKind.Name
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

        public void Add(UserList userList)
        {
            userList.DateCreated = DateTime.Now;

            // If user did not enter a good URL, give them the default image
            if (!Uri.IsWellFormedUriString(userList.ImageLocation, UriKind.Absolute))
            {
                userList.ImageLocation = "http://lorempixel.com/920/360/";
            }
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
