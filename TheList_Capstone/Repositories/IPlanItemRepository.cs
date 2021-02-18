using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IPlanItemRepository
    {
        public void Add(PlanItem planItem);
        public void Delete(int id);
        public List<PlanItem> GetAll();
        public PlanItem GetById(int id);
        public void Update(PlanItem planItem);
    }
}