namespace EcdApi.DTOs.Enrollment;
public record EnrollmentInquiryDto(int Id,string ParentName,string ChildName,int ChildAge,string Email,string Phone,string? Message,DateTime SubmittedAt);