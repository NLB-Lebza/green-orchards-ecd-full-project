namespace EcdApi.DTOs.Auth;
public record AuthResponseDto(int Id, string FullName, string Email, string Role);
public record AuthUserSummaryDto(int Id, string FullName, string Email, string Role, DateTime CreatedAt);
public record UpdateUserDto(string FullName, string Email, string Role, string? Password);