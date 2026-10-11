using EcdApi.DTOs.Auth;
using EcdApi.Services.Interfaces;
using EcdApi.Validation.Auth;
using Microsoft.AspNetCore.Mvc;

namespace EcdApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase {
    readonly LoginValidator loginValidator;
    readonly RegisterValidator registerValidator;
    readonly IAuthService service;

    public AuthController(LoginValidator l, RegisterValidator r, IAuthService s) {
        loginValidator = l;
        registerValidator = r;
        service = s;
    }

    [HttpGet("users")]
    public async Task<IActionResult> GetUsers() => Ok(await service.GetAllUsersAsync());

    [HttpPut("users/{userId:int}")]
    public async Task<IActionResult> UpdateUser(int userId, [FromBody] UpdateUserDto dto) {
        var user = await service.UpdateUserAsync(userId, dto);
        return user is null ? Conflict(new { Message = "An account with this email already exists." }) : Ok(user);
    }

    [HttpDelete("users/{userId:int}")]
    public async Task<IActionResult> DeleteUser(int userId) {
        var deleted = await service.DeleteUserAsync(userId);
        return deleted ? Ok(new { Message = "Account deleted." }) : NotFound(new { Message = "Account not found." });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto d) {
        var e = registerValidator.Validate(d);
        if (e.Count > 0) return BadRequest(new { Message = "Validation failed.", Errors = e });

        var r = await service.RegisterAsync(d);
        return r is null ? Conflict(new { Message = "An account with this email already exists." }) : Ok(r);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto d) {
        var e = loginValidator.Validate(d);
        if (e.Count > 0) return BadRequest(new { Message = "Validation failed.", Errors = e });

        var r = await service.LoginAsync(d);
        return r is null ? Unauthorized(new { Message = "Invalid email or password." }) : Ok(r);
    }
}