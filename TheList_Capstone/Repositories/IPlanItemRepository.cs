using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IPlanItemRepository
    {
        void Add(PlanItem planItem);
        void Delete(int id);
        List<PlanItem> GetAll();
        PlanItem GetById(int id);
        void Update(PlanItem planItem);
    }
}