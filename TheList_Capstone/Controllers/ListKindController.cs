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
    public class ListKindController : ControllerBase
    {
        private IListKindRepository _listKindRepository;
        private IUserProfileRepository _userProfileRepository;

        public ListKindController(IListKindRepository listKindRepository, IUserProfileRepository userProfileRepository)
        {
            _listKindRepository = listKindRepository;
            _userProfileRepository = userProfileRepository;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var listKinds = _listKindRepository.GetAll();
            return Ok(listKinds);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var listKind = _listKindRepository.GetById(id);
            if (listKind == null)
            {
                return NotFound();
            }

            return Ok(listKind);
        }

        // Again, as far as I can tell, I won't be needing the remainder of crud

        //[HttpPost]
        //public IActionResult Add(ListKind listKind)
        //{
        //    _listKindRepository.Add(listKind);
        //    return Ok(listKind);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, ListKind listKind)
        //{
        //    // ListKind's Id coming from URL must match the ListKind object's
        //    if (id != listKind.Id)
        //    {
        //        return BadRequest();
        //    }

        //    try
        //    {
        //        _listKindRepository.Update(listKind);
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
        //    var listKind = _listKindRepository.GetById(id);

        //    if (listKind == null)
        //    {
        //        return NotFound();
        //    }

        //    _listKindRepository.Delete(listKind);
        //    return NoContent();
        //}
    }
}
