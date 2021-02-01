using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public class ListKindRepository : IListKindRepository
    {
        private ApplicationDbContext _context;

        public ListKindRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // This data entity need only provide a set number of predefined listKinds

        public ListKind GetById(int id)
        {
            return _context.ListKind
                .Where(l => l.Id == id)
                .FirstOrDefault();
        }

        public List<ListKind> GetAll()
        {
            return _context.ListKind
                .OrderByDescending(ul => ul.Name)
                .ToList();
        }

        //As far as I can tell, I won't need to add, update or delete listKinds

        //public void Add(ListKind listItem)
        //{
        //    _context.Add(listItem);
        //    _context.SaveChanges();
        //}

        //public void Update(ListKind listItem)
        //{
        //    _context.Entry(listItem).State = EntityState.Modified;
        //    _context.SaveChanges();
        //}

        //public void Delete(ListKind listItem)
        //{
        //    _context.ListKind.Remove(listItem);
        //    _context.SaveChanges();
        //}
    }
}
