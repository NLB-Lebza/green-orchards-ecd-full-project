using EcdApi.Data; using EcdApi.DTOs.Programs; using EcdApi.Models; using EcdApi.Services.Interfaces; using Microsoft.EntityFrameworkCore;
namespace EcdApi.Services;
public class ProgramService : IProgramService {
 private readonly AppDbContext db; public ProgramService(AppDbContext db)=>this.db=db;
 public async Task<ProgramDto> CreateAsync(CreateProgramDto d){var x=new EcdProgram{Name=d.Name.Trim(),Description=d.Description.Trim(),MinimumAge=d.MinimumAge,MaximumAge=d.MaximumAge,ImageUrl=d.ImageUrl?.Trim()??"",CreatedAt=DateTime.UtcNow};db.Programs.Add(x);await db.SaveChangesAsync();return ToDto(x);}
 public async Task<List<ProgramDto>> GetAllAsync()=>await db.Programs.OrderBy(x=>x.MinimumAge).Select(x=>new ProgramDto(x.Id,x.Name,x.Description,x.MinimumAge,x.MaximumAge,x.ImageUrl,x.CreatedAt)).ToListAsync();
 static ProgramDto ToDto(EcdProgram x)=>new(x.Id,x.Name,x.Description,x.MinimumAge,x.MaximumAge,x.ImageUrl,x.CreatedAt);
}