using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;
using TheList_Capstone.Repositories;

namespace TheList_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _repo;

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _repo.GetByFirebaseUserId(firebaseUserId);
        }
        public UserProfileController(IUserProfileRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            return Ok(_repo.GetByFirebaseUserId(firebaseUserId));
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            _repo.Add(userProfile);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { firebaseUserId = userProfile.FirebaseUserId },
                userProfile);
        }

        //[HttpPut]
        //public IActionResult AddUserImage(Image image)
        //{

        //    var user = GetCurrentUserProfile();
        //    _repo.AddImageProfile(image, user.Id);
        //    return Ok();
        //}
    }
}
