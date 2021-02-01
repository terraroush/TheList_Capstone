using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Controllers.Utils;
using TheList_Capstone.Models;
using TheList_Capstone.Repositories;

namespace TheList_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserListController : ControllerBase
    {
        private IUserListRepository _userListRepository;
        private IUserProfileRepository _userProfileRepository;

        public UserListController(IUserListRepository userListRepository, IUserProfileRepository userProfileRepository)
        {
            _userListRepository = userListRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var userLists = _userListRepository.Get();
            return Ok(userLists);
        }

        [HttpGet("getbyuserid")]
        public IActionResult GetByUserId()
        {
            var firebaseUser = ControllerUtils.GetCurrentUserProfile(_userProfileRepository, User);
            var userLists = _userListRepository.GetByUserId(firebaseUser.Id);
            return Ok(userLists);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var firebaseUser = ControllerUtils.GetCurrentUserProfile(_userProfileRepository, User);
            var userList = _userListRepository.GetById(id);
            if (userList == null)
            {
                return NotFound();
            }

            return Ok(userList);
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
            // Get current user
            var firebaseUser = ControllerUtils.GetCurrentUserProfile(_userProfileRepository, User);

            // Get author of the userList
            var listAuthor = userList.UserProfileId;

            // Check if incoming user is NOT a list's author,
            if (firebaseUser.Id != listAuthor)
            {
                return NotFound();
            }

            // UserList's Id coming from URL must match the UserList object's
            if (id != userList.Id)
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
            // Get current user
            var firebaseUser = ControllerUtils.GetCurrentUserProfile(_userProfileRepository, User);
            // Get userList by Id
            var userListToDelete = _userListRepository.GetById(id);

            // Ensure we have a userList
            if (userListToDelete == null)
            {
                return NotFound();
            }

            // Get userList's author
            var userListAuthor = userListToDelete.UserProfileId;
            // Check if incoming user is NOT an admin OR post's author,
            if (firebaseUser.Id != userListAuthor)
            {
                return NotFound();
            }
            _userListRepository.Delete(userListToDelete);
            return NoContent();
        }
    }
}
