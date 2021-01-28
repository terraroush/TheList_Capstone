using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Back_end_Capstone_ServerSide.Data;
using TheList_Back_end_Capstone_ServerSide.Models;

namespace TheList_Back_end_Capstone_ServerSide.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public UserProfile GetByUserProfileId(int id)
        {
            UserProfile user = _context.UserProfile
                .FirstOrDefault(uid => uid.Id == id);
            return user;
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        //public void AddImageProfile(Image image, int id)
        //{
        //    var user = GetByUserProfileId(id);
        //    user.ImageLocation = image.ImageName;
        //    _context.SaveChanges();
        //}
    }

}
