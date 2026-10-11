using EcdApi.DTOs.Auth;
namespace EcdApi.Validation.Auth;
public class LoginValidator {
 public List<string> Validate(LoginDto dto) {
  var e=new List<string>();
  if(string.IsNullOrWhiteSpace(dto.Email)) e.Add("Email is required."); else if(!dto.Email.Contains("@")) e.Add("Please provide a valid email address.");
  if(string.IsNullOrWhiteSpace(dto.Password)) e.Add("Password is required."); else if(dto.Password.Length<6) e.Add("Password must contain at least 6 characters.");
  return e;
 }
}