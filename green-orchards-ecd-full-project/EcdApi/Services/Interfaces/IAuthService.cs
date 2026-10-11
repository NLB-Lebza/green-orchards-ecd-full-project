using EcdApi.DTOs.Auth;
namespace EcdApi.Services.Interfaces;
public interface IAuthService {
    Task<AuthResponseDto?> RegisterAsync(RegisterDto dto);
    Task<AuthResponseDto?> LoginAsync(LoginDto dto);
    Task<List<AuthUserSummaryDto>> GetAllUsersAsync();
    Task<AuthResponseDto?> UpdateUserAsync(int userId, UpdateUserDto dto);
    Task<bool> DeleteUserAsync(int userId);
}