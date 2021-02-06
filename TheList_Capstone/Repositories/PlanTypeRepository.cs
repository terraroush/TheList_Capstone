using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public class PlanTypeRepository : IPlanTypeRepository
    {
        private ApplicationDbContext _context;

        public PlanTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // This data entity need only provide a set number of predefined planType

        public PlanType GetById(int id)
        {
            return _context.PlanType
                .Where(l => l.Id == id)
                .FirstOrDefault();
        }

        public List<PlanType> GetAll()
        {
            return _context.PlanType
                .ToList();
        }

        //As far as I can tell, I won't need to add, update or delete listKinds

        //public void Add(PlanType planType)
        //{
        //    _context.Add(planType);
        //    _context.SaveChanges();
        //}

        //public void Update(PlanType planType)
        //{
        //    _context.Entry(planType).State = EntityState.Modified;
        //    _context.SaveChanges();
        //}

        //public void Delete(PlanType planType)
        //{
        //    _context.PlanType.Remove(planType);
        //    _context.SaveChanges();
        //}
    }
}
