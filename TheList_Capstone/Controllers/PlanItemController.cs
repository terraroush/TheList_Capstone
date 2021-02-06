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
    public class PlanItemController : ControllerBase
    {
        private IPlanItemRepository _planItemRepository;
        private IUserProfileRepository _userProfileRepository;

        public PlanItemController(IPlanItemRepository planItemRepository, IUserProfileRepository userProfileRepository)
        {
            _planItemRepository = planItemRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var planItems = _planItemRepository.GetAll();
            return Ok(planItems);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var planItem = _planItemRepository.GetById(id);
            if (planItem == null)
            {
                return NotFound();
            }

            return Ok(planItem);
        }

        [HttpPost]
        public IActionResult Add(PlanItem planItem)
        {
            _planItemRepository.Add(planItem);
            return Ok(planItem);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, PlanItem planItem)
        {
            // PlanItem's Id coming from URL must match the PlanItem object's
            if (id != planItem.Id)
            {
                return BadRequest();
            }

            try
            {
                _planItemRepository.Update(planItem);
                return NoContent();
            }
            catch(Exception ex)
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var planItem = _planItemRepository.GetById(id);

            if (planItem == null)
            {
                return NotFound();
            }

            _planItemRepository.Delete(planItem);
            return NoContent();
        }
    }
}
