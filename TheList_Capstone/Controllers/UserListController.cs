using Microsoft.AspNetCore.Authorization;
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
    //[Authorize]
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
           
                var userLists = _userListRepository.GetAll();
                return Ok(userLists);
           
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var firebaseUser = ControllerUtils.GetCurrentUserProfile(_userProfileRepository, User);
            var userList = _userListRepository.GetById(firebaseUser.Id);
            if (userList == null)
            {
                return NotFound();
            }
       
            return Ok(userList);
        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            try
            {
                var userList = _userListRepository.GetById(id);
                return Ok(userList);
            }
            catch(Exception ex)
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
