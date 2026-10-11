using EcdApi.DTOs.Enrollment; using EcdApi.Services.Interfaces; using EcdApi.Validation.Enrollment; using Microsoft.AspNetCore.Mvc;
namespace EcdApi.Controllers;
[ApiController][Route("api/[controller]")] public class EnrollmentController:ControllerBase{
 readonly EnrollmentValidator v; readonly IEnrollmentService s; public EnrollmentController(EnrollmentValidator v,IEnrollmentService s){this.v=v;this.s=s;}
 [HttpGet] public async Task<IActionResult> GetAll()=>Ok(await s.GetAllAsync());
 [HttpPost] public async Task<IActionResult> Create(CreateEnrollmentInquiryDto d){var e=v.Validate(d);if(e.Count>0)return BadRequest(new{Message="Validation failed.",Errors=e});return Ok(await s.CreateAsync(d));}
}