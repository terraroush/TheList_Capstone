using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public class ListItemRepository
    {
        private ApplicationDbContext _context;

        public ListItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public ListItem GetById(int id)
        {
            return _context.ListItem
                .Include(l => l.Name)
                .Include(l => l.UserList)
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
