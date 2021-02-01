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
    public class ListItemController : ControllerBase
    {
        private IListItemRepository _listItemRepository;
        private IUserProfileRepository _userProfileRepository;

        public ListItemController(IListItemRepository listItemRepository, IUserProfileRepository userProfileRepository)
        {
            _listItemRepository = listItemRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var listItems = _listItemRepository.GetAll();
            return Ok(listItems);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var listItem = _listItemRepository.GetById(id);
            if (listItem == null)
            {
                return NotFound();
            }

            return Ok(listItem);
        }

        [HttpPost]
        public IActionResult Add(ListItem listItem)
        {
            _listItemRepository.Add(listItem);
            return Ok(listItem);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, ListItem listItem)
        {
            // ListItem's Id coming from URL must match the ListItem object's
            if (id != listItem.Id)
            {
                return BadRequest();
            }

            try
            {
                _listItemRepository.Update(listItem);
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
            var listItem = _listItemRepository.GetById(id);

            if (listItem == null)
            {
                return NotFound();
            }

            _listItemRepository.Delete(listItem);
            return NoContent();
        }
    }
}
