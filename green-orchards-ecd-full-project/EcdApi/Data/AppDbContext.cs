using EcdApi.Models;
using Microsoft.EntityFrameworkCore;
namespace EcdApi.Data;
public class AppDbContext : DbContext {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
    public DbSet<User> Users => Set<User>();
    public DbSet<EcdProgram> Programs => Set<EcdProgram>();
    public DbSet<EnrollmentInquiry> EnrollmentInquiries => Set<EnrollmentInquiry>();
    public DbSet<GalleryImage> GalleryImages => Set<GalleryImage>();
    protected override void OnModelCreating(ModelBuilder m) {
        m.Entity<User>().HasIndex(x => x.Email).IsUnique();
        m.Entity<User>().Property(x => x.Email).HasMaxLength(150);
        m.Entity<EcdProgram>().Property(x => x.Name).HasMaxLength(150);
        m.Entity<EnrollmentInquiry>().Property(x => x.ParentName).HasMaxLength(150);
        m.Entity<EnrollmentInquiry>().Property(x => x.ChildName).HasMaxLength(150);
        m.Entity<GalleryImage>().Property(x => x.Title).HasMaxLength(150);
    }
}