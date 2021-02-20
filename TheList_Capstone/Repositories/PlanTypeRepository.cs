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

    }
}
