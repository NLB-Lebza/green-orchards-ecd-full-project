using EcdApi.DTOs.Programs;
namespace EcdApi.Services.Interfaces;
public interface IProgramService { Task<ProgramDto> CreateAsync(CreateProgramDto dto); Task<List<ProgramDto>> GetAllAsync(); }