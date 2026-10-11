using EcdApi.DTOs.Gallery;
namespace EcdApi.Validation.Gallery;
public class GalleryValidator {
 public List<string> Validate(CreateGalleryImageDto d) {
  var e=new List<string>();
  if(string.IsNullOrWhiteSpace(d.Title)) e.Add("Image title is required.");
  if(string.IsNullOrWhiteSpace(d.ImageUrl)) e.Add("Image URL is required.");
  return e;
 }
}