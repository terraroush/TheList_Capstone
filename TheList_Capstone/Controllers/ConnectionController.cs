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
    public class ConnectionController : ControllerBase
    {
        private IConnectionRepository _connectionRepo;
        private IUserProfileRepository _userRepo;

        public ConnectionController(IConnectionRepository connectionRepo, IUserProfileRepository userRepo)
        {
            _connectionRepo = connectionRepo;
            _userRepo = userRepo;
        }

        [HttpGet("getbyuser/{userProfileId}")]
        public IActionResult GetById(int userProfileId)
        {
            //if (GetCurrentUserProfile().Id != userProfileId)
            //{
            //    return null;
            //}

            List<Connection> connections = _connectionRepo.GetByUserId(userProfileId);
            if (connections != null)
            {
                return Ok(connections);
            }
            else
            {
                return null;
            }
        }

        [HttpGet("getplansfromconnections/{userProfileId}")]
        public IActionResult GetPlansFromConnections(int userProfileId)
        {
            List<Plan> connections = _connectionRepo.GetPlansFromConnectedUsers(userProfileId);
            if (connections != null)
            {
                return Ok(connections);
            }
            else
            {
                return null;
            }
        }

        [HttpPost]
        public IActionResult Post(Connection connection)
        {
           
            var currentUser = GetCurrentUserProfile();

            if (currentUser.Id != connection.ConnecterUserProfileId)
            {
                return NotFound();
            }

            _connectionRepo.Add(connection);
            return CreatedAtAction("Get", new { id = connection.Id }, connection);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepo.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = GetCurrentUserProfile();
            var connectionToDelete = _connectionRepo.GetByConnectionId(id);

            if (connectionToDelete.ConnecterUserProfileId != user.Id)
            {
                return Unauthorized();
            }

            _connectionRepo.Delete(id);
            return NoContent();

        }
    }
}
