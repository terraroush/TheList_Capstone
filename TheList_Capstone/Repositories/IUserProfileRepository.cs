using TheList_Back_end_Capstone_ServerSide.Models;

namespace TheList_Back_end_Capstone_ServerSide.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetByUserProfileId(int id);
    }
}