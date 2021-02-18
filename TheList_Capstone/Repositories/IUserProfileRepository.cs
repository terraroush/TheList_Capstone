using TheList_Capstone.Models;
using System.Collections.Generic;

namespace TheList_Capstone.Repositories
{
    public interface IUserProfileRepository
    {
        public void Add(UserProfile userProfile);
        public UserProfile GetByFirebaseUserId(string firebaseUserId);
        public UserProfile GetByUserProfileId(int id);
        public List<UserProfile> GetAll();
        public UserProfile GetById(int id);
    }
}