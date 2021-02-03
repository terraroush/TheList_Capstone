using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TheList_Capstone.Models;
using TheList_Capstone.Repositories;

namespace TheList_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class UserListController : ControllerBase
    {
        private readonly IUserListRepository _userListRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        public UserListController(IUserListRepository userListRepository, IUserProfileRepository userProfileRepository)
        {
            _userListRepository = userListRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
           
                var userLists = _userListRepository.GetAll();
                return Ok(userLists);
           
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userList = _userListRepository.GetById(id);
            if (userList == null)
            {
                return NotFound();
            }
       
            return Ok(userList);
        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            // need to check if the id exisits
            var validUser = _userProfileRepository.GetById(id);
            if (validUser == null)
            {
                return NotFound();
            }

            var userList = _userListRepository.GetByUserProfileId(id);
            if (userList == null)
            {
                return NotFound();
            }

            try
            {
                return Ok(userList);
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Add(UserList userList)
        {
            _userListRepository.Add(userList);
            return Ok(userList);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserList userList)
        {
            var listAuthor = userList.UserProfileId;

            if (id != listAuthor)
            {
                return BadRequest();
            }

            // Get userList by Id to ensure it's in database
            var userListToEdit = _userListRepository.GetById(id);

            if (userListToEdit == null)
            {
                return NotFound();
            }

            _userListRepository.Update(userListToEdit);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var userListToDelete = _userListRepository.GetById(id);

            if (userListToDelete == null)
            {
                return NotFound();
            }
            
            _userListRepository.Delete(userListToDelete);
            return NoContent();
        }
    }
}
