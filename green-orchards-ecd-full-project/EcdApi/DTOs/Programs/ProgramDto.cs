namespace EcdApi.DTOs.Programs;
public record ProgramDto(int Id,string Name,string Description,int MinimumAge,int MaximumAge,string ImageUrl,DateTime CreatedAt);