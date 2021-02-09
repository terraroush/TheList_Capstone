using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public class PlanItemRepository : IPlanItemRepository
    {
        private ApplicationDbContext _context;

        public PlanItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public PlanItem GetById(int id)
        {
            return _context.PlanItem
                .Where(l => l.Id == id)
                .FirstOrDefault();
        }

        public List<PlanItem> GetAll()
        {
            return _context.PlanItem
                .OrderByDescending(ul => ul.Name)
                .ToList();
        }


        public void Add(PlanItem planItem)
        {
            _context.Add(planItem);
            _context.SaveChanges();
        }

        public void Update(PlanItem planItem)
        {
            _context.Entry(planItem).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var planItem = GetById(id);
            _context.PlanItem.Remove(planItem);
            _context.SaveChanges();
        }
    }
}
