namespace EcdApi.Models;
public class EnrollmentInquiry {
    public int Id { get; set; }
    public string ParentName { get; set; } = string.Empty;
    public string ChildName { get; set; } = string.Empty;
    public int ChildAge { get; set; }
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string? Message { get; set; }
    public DateTime SubmittedAt { get; set; }
}