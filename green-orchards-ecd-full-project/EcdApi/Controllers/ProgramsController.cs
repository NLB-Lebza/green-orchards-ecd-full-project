using EcdApi.DTOs.Programs; using EcdApi.Services.Interfaces; using EcdApi.Validation.Programs; using Microsoft.AspNetCore.Mvc;
namespace EcdApi.Controllers;
[ApiController][Route("api/[controller]")] public class ProgramsController:ControllerBase{
 readonly ProgramValidator v; readonly IProgramService s; public ProgramsController(ProgramValidator v,IProgramService s){this.v=v;this.s=s;}
 [HttpGet] public async Task<IActionResult> GetAll()=>Ok(await s.GetAllAsync());
 [HttpPost] public async Task<IActionResult> Create(CreateProgramDto d){var e=v.Validate(d);if(e.Count>0)return BadRequest(new{Message="Validation failed.",Errors=e});return Ok(await s.CreateAsync(d));}
}