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
                .Include(ul => ul.PlanItems)
                .Include(ul => ul.UserProfile)
                .Include(ul => ul.PlanType)
                .OrderByDescending(ul => ul.DateCreated)
                .ToList();
        }
        public List<Plan> GetByUserProfileId(int id)
        {
            return _context.Plan
                .Include(ul => ul.PlanItems)
                .Include(ul => ul.UserProfile)
                .Where(ul => ul.UserProfileId == id)
                .OrderByDescending(ul => ul.DateCreated)
                .ToList();
        }

        public Plan GetById(int id)
        {
            return _context.Plan
                .Include(ul => ul.PlanItems)
                .Include(ul => ul.UserProfile)
                .Include(ul => ul.PlanType)
                .Where(ul => ul.Id == id)
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

        public void Delete(Plan plan)
        {
            _context.Plan.Remove(plan);
            _context.SaveChanges();
        }
    }
}
