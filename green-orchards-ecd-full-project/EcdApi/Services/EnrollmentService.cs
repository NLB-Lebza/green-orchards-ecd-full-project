using EcdApi.Data; using EcdApi.DTOs.Enrollment; using EcdApi.Models; using EcdApi.Services.Interfaces; using Microsoft.EntityFrameworkCore;
namespace EcdApi.Services;
public class EnrollmentService : IEnrollmentService {
 private readonly AppDbContext db; public EnrollmentService(AppDbContext db)=>this.db=db;
 public async Task<EnrollmentInquiryDto> CreateAsync(CreateEnrollmentInquiryDto d){var x=new EnrollmentInquiry{ParentName=d.ParentName.Trim(),ChildName=d.ChildName.Trim(),ChildAge=d.ChildAge,Email=d.Email.Trim(),Phone=d.Phone.Trim(),Message=string.IsNullOrWhiteSpace(d.Message)?null:d.Message.Trim(),SubmittedAt=DateTime.UtcNow};db.EnrollmentInquiries.Add(x);await db.SaveChangesAsync();return ToDto(x);}
 public async Task<List<EnrollmentInquiryDto>> GetAllAsync()=>await db.EnrollmentInquiries.OrderByDescending(x=>x.SubmittedAt).Select(x=>new EnrollmentInquiryDto(x.Id,x.ParentName,x.ChildName,x.ChildAge,x.Email,x.Phone,x.Message,x.SubmittedAt)).ToListAsync();
 static EnrollmentInquiryDto ToDto(EnrollmentInquiry x)=>new(x.Id,x.ParentName,x.ChildName,x.ChildAge,x.Email,x.Phone,x.Message,x.SubmittedAt);
}