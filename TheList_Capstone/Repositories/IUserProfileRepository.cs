using TheList_Capstone.Models;
using System.Collections.Generic;

namespace TheList_Capstone.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetByUserProfileId(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
    }
}