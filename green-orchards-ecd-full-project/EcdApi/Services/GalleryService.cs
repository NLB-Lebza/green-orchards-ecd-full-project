using EcdApi.Data; using EcdApi.DTOs.Gallery; using EcdApi.Models; using EcdApi.Services.Interfaces; using Microsoft.EntityFrameworkCore;
namespace EcdApi.Services;
public class GalleryService : IGalleryService {
 private readonly AppDbContext db; public GalleryService(AppDbContext db)=>this.db=db;
 public async Task<GalleryImageDto> CreateAsync(CreateGalleryImageDto d){var x=new GalleryImage{Title=d.Title.Trim(),ImageUrl=d.ImageUrl.Trim(),Description=string.IsNullOrWhiteSpace(d.Description)?null:d.Description.Trim(),CreatedAt=DateTime.UtcNow};db.GalleryImages.Add(x);await db.SaveChangesAsync();return ToDto(x);}
 public async Task<List<GalleryImageDto>> GetAllAsync()=>await db.GalleryImages.OrderByDescending(x=>x.CreatedAt).Select(x=>new GalleryImageDto(x.Id,x.Title,x.ImageUrl,x.Description,x.CreatedAt)).ToListAsync();
 static GalleryImageDto ToDto(GalleryImage x)=>new(x.Id,x.Title,x.ImageUrl,x.Description,x.CreatedAt);
}