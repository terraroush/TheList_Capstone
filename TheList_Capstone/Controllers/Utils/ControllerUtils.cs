using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TheList_Capstone.Models;
using TheList_Capstone.Repositories;

namespace TheList_Capstone.Controllers.Utils
{
    // this utility method returns an authenticated current user object
    public class ControllerUtils
    {
        public static UserProfile GetCurrentUserProfile(IUserProfileRepository _userProfileRepository, ClaimsPrincipal user)
        {
            var currentUserId = user?.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(currentUserId);
        }
    }
}
