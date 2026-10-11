using EcdApi.DTOs.Gallery;
namespace EcdApi.Services.Interfaces;
public interface IGalleryService { Task<GalleryImageDto> CreateAsync(CreateGalleryImageDto dto); Task<List<GalleryImageDto>> GetAllAsync(); }