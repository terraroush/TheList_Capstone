using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetByUserProfileId(int id);
    }
}