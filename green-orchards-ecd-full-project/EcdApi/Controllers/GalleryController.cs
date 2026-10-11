using EcdApi.DTOs.Gallery; using EcdApi.Services.Interfaces; using EcdApi.Validation.Gallery; using Microsoft.AspNetCore.Mvc;
namespace EcdApi.Controllers;
[ApiController][Route("api/[controller]")] public class GalleryController:ControllerBase{
 readonly GalleryValidator v; readonly IGalleryService s; public GalleryController(GalleryValidator v,IGalleryService s){this.v=v;this.s=s;}
 [HttpGet] public async Task<IActionResult> GetAll()=>Ok(await s.GetAllAsync());
 [HttpPost] public async Task<IActionResult> Create(CreateGalleryImageDto d){var e=v.Validate(d);if(e.Count>0)return BadRequest(new{Message="Validation failed.",Errors=e});return Ok(await s.CreateAsync(d));}
}