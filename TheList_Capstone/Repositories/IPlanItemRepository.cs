using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IPlanItemRepository
    {
        void Add(PlanItem planItem);
        void Delete(PlanItem planItem);
        List<PlanItem> GetAll();
        PlanItem GetById(int id);
        void Update(PlanItem planItem);
    }
}