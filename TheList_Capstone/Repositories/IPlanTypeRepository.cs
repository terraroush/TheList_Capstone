using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IPlanTypeRepository
    {
        List<PlanType> GetAll();
        PlanType GetById(int id);
    }
}