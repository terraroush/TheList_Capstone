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
    public class PlanRepository : IPlanRepository
    {
        private readonly ApplicationDbContext _context;

        public PlanRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Will need to update to filter only public plan eventually. Keeping as is for testing purposes rn
        public List<Plan> GetAll()
        {
            return _context.Plan
                .Include(p => p.PlanItems)
                .Include(p => p.UserProfile)
                .Include(p => p.PlanType)
                .OrderByDescending(p => p.DateCreated)
                .ToList();
        }
        public List<Plan> GetByUserProfileId(int id)
        {
            return _context.Plan
                .Include(p => p.PlanItems)
                .Include(p => p.UserProfile)
                .Where(p => p.UserProfileId == id)
                .OrderByDescending(p => p.DateCreated)
                .ToList();
        }

        public List<Plan> GetMostRecent(int id)
        {
            return _context.Plan
                .Include(p => p.PlanItems)
                .Include(p => p.UserProfile)
                .Include(p => p.PlanType)
                .Where(p => p.UserProfileId == id)
                .OrderByDescending(p => p.DateCreated)
                .Take(1)
                .ToList();
        }

        public Plan GetById(int id)
        {
            return _context.Plan
                .Include(p => p.PlanItems)
                .Include(p => p.UserProfile)
                .Include(p => p.PlanType)
                .Where(p => p.Id == id)
                .FirstOrDefault();
        }

        public void Add(Plan plan)
        {
            plan.DateCreated = DateTime.Now;

            _context.Add(plan);
            _context.SaveChanges();
        }

        public void Update(Plan plan)
        {
            _context.Entry(plan).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var plan = GetById(id);
            var planItems = _context.PlanItem.Where(pi => pi.PlanId == plan.Id).ToList();

            _context.PlanItem.RemoveRange(planItems);
            _context.Plan.Remove(plan);
            _context.SaveChanges();
        }
    }
}
