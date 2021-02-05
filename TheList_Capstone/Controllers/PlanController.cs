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
    public class PlanController : ControllerBase
    {
        private readonly IPlanRepository _planRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        public PlanController(IPlanRepository planRepository, IUserProfileRepository userProfileRepository)
        {
            _planRepository = planRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
           
                var userLists = _planRepository.GetAll();
                return Ok(plans);
           
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var plan = _planRepository.GetById(id);
            if (plan == null)
            {
                return NotFound();
            }
       
            return Ok(plan);
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

            var plan = _planRepository.GetByUserProfileId(id);
            if (plan == null)
            {
                return NotFound();
            }

            try
            {
                return Ok(plan);
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Add(Plan plan)
        {
            _planRepository.Add(plan);
            return Ok(plan);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Plan plan)
        {
            var listAuthor = plan.UserProfileId;

            if (id != listAuthor)
            {
                return BadRequest();
            }

            // Get plan by Id to ensure it's in database
            var planToEdit = _planRepository.GetById(id);

            if (planToEdit == null)
            {
                return NotFound();
            }

            _planRepository.Update(planToEdit);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var planToDelete = _planRepository.GetById(id);

            if (planToDelete == null)
            {
                return NotFound();
            }
            
            _planRepository.Delete(planToDelete);
            return NoContent();
        }
    }
}
