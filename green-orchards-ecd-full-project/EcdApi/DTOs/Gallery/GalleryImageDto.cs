namespace EcdApi.DTOs.Gallery;
public record GalleryImageDto(int Id,string Title,string ImageUrl,string? Description,DateTime CreatedAt);