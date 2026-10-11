using EcdApi.DTOs.Enrollment;
namespace EcdApi.Services.Interfaces;
public interface IEnrollmentService { Task<EnrollmentInquiryDto> CreateAsync(CreateEnrollmentInquiryDto dto); Task<List<EnrollmentInquiryDto>> GetAllAsync(); }