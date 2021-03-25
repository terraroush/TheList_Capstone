using System.Collections.Generic;
using TheList_Capstone.Models;
using TheList_Capstone.Models.ViewModels;

namespace TheList_Capstone.Repositories
{
    public interface IPlanRepository
    {
        public List<Plan> GetAll();
        public List<Plan> GetByUserProfileId(int id);
        public List<Plan> GetPublicByUserProfileId(int id);
        public List<Plan> GetMostRecent(int id);
        public Plan GetById(int id);
        public void Add(Plan plan);
        public void Update(Plan plan);
        public void Delete(int id);
    }
}