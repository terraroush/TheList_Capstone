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

        public List<ListItem> GetAll()
        {
            return _context.ListItem
                .OrderByDescending(ul => ul.Name)
                .ToList();
        }

        public void Add(ListItem listItem)
        {
            _context.Add(listItem);
            _context.SaveChanges();
        }

        public void Update(ListItem listItem)
        {
            _context.Entry(listItem).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(ListItem listItem)
        {
            _context.ListItem.Remove(listItem);
            _context.SaveChanges();
        }
    }
}
