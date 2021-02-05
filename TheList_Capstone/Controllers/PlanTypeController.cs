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

        // Again, as far as I can tell, I won't be needing the remainder of crud

        //[HttpPost]
        //public IActionResult Add(PlanType planType)
        //{
        //    _planTypeRepository.Add(planType);
        //    return Ok(planType);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, PlanType planType)
        //{
        //    // PlanType's Id coming from URL must match the PlanType object's
        //    if (id != planType.Id)
        //    {
        //        return BadRequest();
        //    }

        //    try
        //    {
        //        _planTypeRepository.Update(planType);
        //        return NoContent();
        //    }
        //    catch (Exception ex)
        //    {
        //        return NotFound();
        //    }
        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    var planType = _planTypeRepository.GetById(id);

        //    if (planType == null)
        //    {
        //        return NotFound();
        //    }

        //    _planTypeRepository.Delete(planType);
        //    return NoContent();
        //}
    }
}
