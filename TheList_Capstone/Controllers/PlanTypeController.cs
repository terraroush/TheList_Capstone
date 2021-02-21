using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Models;
using TheList_Capstone.Repositories;

namespace TheList_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PlanTypeController : ControllerBase
    {
        private IPlanTypeRepository _planTypeRepository;
        private IUserProfileRepository _userProfileRepository;

        public PlanTypeController(IPlanTypeRepository planTypeRepository, IUserProfileRepository userProfileRepository)
        {
            _planTypeRepository = planTypeRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var planTypes = _planTypeRepository.GetAll();
            return Ok(planTypes);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var planType = _planTypeRepository.GetById(id);
            if (planType == null)
            {
                return NotFound();
            }

            return Ok(planType);
        }

       
    }
}
