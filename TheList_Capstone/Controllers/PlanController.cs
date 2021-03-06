﻿using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    public class PlanController : ControllerBase
    {
        private readonly IPlanRepository _planRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly IConnectionRepository _connectionRepository;

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        public PlanController(IPlanRepository planRepository, IUserProfileRepository userProfileRepository, IConnectionRepository connectionRepository
            )
        {
            _planRepository = planRepository;
            _userProfileRepository = userProfileRepository;
            _connectionRepository = connectionRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var plans = _planRepository.GetAll();
            return Ok(plans);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var currentUser = GetCurrentUserProfile();
            var plan = _planRepository.GetById(id);

            if (plan == null)
            {
                return NotFound();
            }

            return Ok(plan);
        }
        [HttpGet("getbyrecent/{id}")]
        public IActionResult GetRecentPlans(int id)
        {
            var currentUser = GetCurrentUserProfile();
            var validUser = _userProfileRepository.GetById(id);
            if (validUser == null)
            {
                return NotFound();
            }
            if (validUser.Id != currentUser.Id)
            {
                return NotFound();
            }

            var plans = _planRepository.GetMostRecent(id);
            if (plans == null)
            {
                return NotFound();
            }

            try
            {
                return Ok(plans);
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }

        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            var currentUser = GetCurrentUserProfile();
            var validUser = _userProfileRepository.GetById(id);
            if (validUser == null)
            {
                return NotFound();
            }
            if (validUser.Id != currentUser.Id)
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
        [HttpGet("getpublicbyuser/{id}")]
        public IActionResult GetPublicByUser(int id)
        {
            var currentUser = GetCurrentUserProfile();
            var validUser = _userProfileRepository.GetById(id);
            if (validUser == null)
            {
                return NotFound();
            }

            // this is causing a bug that says plans.map is not a function

            //if (validUser.Id != currentUser.Id)
            //{
            //    return NotFound();
            //}


            var plan = _planRepository.GetPublicByUserProfileId(id);
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
            var currentUser = GetCurrentUserProfile();
            var planAuthor = plan.UserProfileId;
            //if (currentUser.Id != planAuthor)
            //{
            //    return NotFound();
            //}

            if (id != plan.Id)
            {
                return BadRequest();
            }
            var planToEdit = _planRepository.GetById(id);
            if (planToEdit == null)
            {
                return NotFound();
            }

            planToEdit.Title = plan.Title;
            planToEdit.Deadline = plan.Deadline;
            planToEdit.PlanTypeId = plan.PlanTypeId;
            planToEdit.Public = plan.Public;

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
            
            _planRepository.Delete(id);
            return NoContent();
        }
    }
}
