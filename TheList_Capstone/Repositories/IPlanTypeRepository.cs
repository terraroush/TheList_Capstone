using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IPlanTypeRepository
    {
        public List<PlanType> GetAll();
        public PlanType GetById(int id);
    }
}