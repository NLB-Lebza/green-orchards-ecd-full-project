namespace EcdApi.DTOs.Programs;
public record CreateProgramDto(string Name,string Description,int MinimumAge,int MaximumAge,string ImageUrl);