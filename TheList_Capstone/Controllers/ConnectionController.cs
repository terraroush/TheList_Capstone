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

        [HttpGet("getconnectedbyuser/{userProfileId}")]
        public IActionResult GetConnectedById(int userProfileId)
        {
            List<Connection> connections = _connectionRepo.GetConnectedByUserId(userProfileId);
            if (connections != null)
            {
                return Ok(connections);
            }
            else
            {
                return null;
            }
        }

        [HttpGet("getnotconnectedbyuser/{userProfileId}")]
        public IActionResult GetNotConnectedById(int userProfileId)
        {
            //get our connected users, then get all users
            //filter by connections that user doesn't have
            //then if we have them, return them
            List<Connection> connections = _connectionRepo.GetConnectedByUserId(userProfileId);
            List<UserProfile> allUsers = _userRepo.GetAll();

            var relationships = connections.Where(c => c.ConnecterUserProfileId == userProfileId).ToList();
            // this isn't excluding the current user -- why???
            var excludedCurrentUser = allUsers.Where(up => up.Id != userProfileId).ToList();

            List<UserProfile> availableConnections = new List<UserProfile>();

            foreach(var user in excludedCurrentUser)
            {
                // we need to do a find by providerUserProfileId on relationships; if we find something, don't add that user; if it's null, (not connected yet) add them to the list of available connections
                var foundConnection = relationships.FirstOrDefault(u => u.ProviderUserProfileId == user.Id);
                if (foundConnection == null)
                {
                    availableConnections.Add(user);
                }

                if (relationships.Count == 0)
                {
                    availableConnections.Add(user);
                }
            }
            if (connections != null)
            {
                return Ok(availableConnections);
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
           
            //var currentUser = GetCurrentUserProfile();

            //if (currentUser.Id != connection.ConnecterUserProfileId)
            //{
            //    return NotFound();
            //}

            _connectionRepo.Add(connection);
            return Ok(connection);
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
