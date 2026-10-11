namespace EcdApi.DTOs.Enrollment;
public record CreateEnrollmentInquiryDto(string ParentName,string ChildName,int ChildAge,string Email,string Phone,string? Message);