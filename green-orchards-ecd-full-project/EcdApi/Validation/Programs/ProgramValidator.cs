using EcdApi.DTOs.Programs;
namespace EcdApi.Validation.Programs;
public class ProgramValidator {
 public List<string> Validate(CreateProgramDto d) {
  var e=new List<string>();
  if(string.IsNullOrWhiteSpace(d.Name)) e.Add("Program name is required.");
  if(string.IsNullOrWhiteSpace(d.Description)) e.Add("Description is required.");
  if(d.MinimumAge<0||d.MinimumAge>12) e.Add("Minimum age must be between 0 and 12.");
  if(d.MaximumAge<0||d.MaximumAge>12) e.Add("Maximum age must be between 0 and 12.");
  if(d.MaximumAge<d.MinimumAge) e.Add("Maximum age cannot be lower than minimum age.");
  return e;
 }
}