using EcdApi.DTOs.Enrollment;
namespace EcdApi.Validation.Enrollment;
public class EnrollmentValidator {
 public List<string> Validate(CreateEnrollmentInquiryDto d) {
  var e=new List<string>();
  if(string.IsNullOrWhiteSpace(d.ParentName)) e.Add("Parent name is required."); else if(d.ParentName.Length>150) e.Add("Parent name cannot exceed 150 characters.");
  if(string.IsNullOrWhiteSpace(d.ChildName)) e.Add("Child name is required."); else if(d.ChildName.Length>150) e.Add("Child name cannot exceed 150 characters.");
  if(d.ChildAge<0||d.ChildAge>12) e.Add("Child age must be between 0 and 12.");
  if(string.IsNullOrWhiteSpace(d.Email)) e.Add("Email is required."); else if(!d.Email.Contains("@")) e.Add("Please provide a valid email address.");
  if(string.IsNullOrWhiteSpace(d.Phone)) e.Add("Phone number is required.");
  if(!string.IsNullOrWhiteSpace(d.Message)&&d.Message.Length>1000) e.Add("Message cannot exceed 1000 characters.");
  return e;
 }
}