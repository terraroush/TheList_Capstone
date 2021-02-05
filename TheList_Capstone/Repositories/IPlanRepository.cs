using System.Collections.Generic;
using TheList_Capstone.Models;
using TheList_Capstone.Models.ViewModels;

namespace TheList_Capstone.Repositories
{
    public interface IPlanRepository
    {
        List<Plan> GetAll();
        List<Plan> GetByUserProfileId(int id);
        Plan GetById(int id);
        void Add(Plan plan);
        void Update(Plan plan);
        void Delete(Plan plan);
    }
}