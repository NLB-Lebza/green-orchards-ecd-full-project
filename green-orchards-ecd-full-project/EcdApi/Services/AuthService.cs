using EcdApi.Data;
using EcdApi.DTOs.Auth;
using EcdApi.Models;
using EcdApi.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EcdApi.Services;
public class AuthService : IAuthService {
    private readonly AppDbContext db;

    public AuthService(AppDbContext db) => this.db = db;

    public async Task<AuthResponseDto?> RegisterAsync(RegisterDto d) {
        var email = d.Email.Trim().ToLowerInvariant();
        if (await db.Users.AnyAsync(x => x.Email == email)) return null;

        var u = new User {
            FullName = d.FullName.Trim(),
            Email = email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(d.Password),
            Role = "Admin",
            CreatedAt = DateTime.UtcNow
        };

        db.Users.Add(u);
        await db.SaveChangesAsync();

        return new(u.Id, u.FullName, u.Email, u.Role);
    }

    public async Task<AuthResponseDto?> LoginAsync(LoginDto d) {
        var u = await db.Users.FirstOrDefaultAsync(x => x.Email == d.Email.Trim().ToLowerInvariant());
        if (u is null || !BCrypt.Net.BCrypt.Verify(d.Password, u.PasswordHash)) return null;

        return new(u.Id, u.FullName, u.Email, u.Role);
    }

    public async Task<List<AuthUserSummaryDto>> GetAllUsersAsync() {
        return await db.Users
            .OrderByDescending(x => x.CreatedAt)
            .Select(x => new AuthUserSummaryDto(x.Id, x.FullName, x.Email, x.Role, x.CreatedAt))
            .ToListAsync();
    }

    public async Task<AuthResponseDto?> UpdateUserAsync(int userId, UpdateUserDto dto) {
        var user = await db.Users.FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return null;

        var normalizedEmail = dto.Email.Trim();
        var emailExists = await db.Users.AnyAsync(x => x.Id != userId && x.Email == normalizedEmail);
        if (emailExists) return null;

        user.FullName = dto.FullName.Trim();
        user.Email = normalizedEmail.ToLowerInvariant();
        user.Role = dto.Role.Trim();

        if (!string.IsNullOrWhiteSpace(dto.Password)) {
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        }

        await db.SaveChangesAsync();
        return new AuthResponseDto(user.Id, user.FullName, user.Email, user.Role);
    }

    public async Task<bool> DeleteUserAsync(int userId) {
        var user = await db.Users.FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null) return false;

        db.Users.Remove(user);
        await db.SaveChangesAsync();
        return true;
    }
}