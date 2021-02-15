using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Models;

namespace TheList_Capstone.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Connection> Connection { get; set; }
        public DbSet<PlanType> PlanType { get; set; }
        public DbSet<Plan> Plan { get; set; }
        public DbSet<Comment> Comment { get; set; }
        public DbSet<PlanItem> PlanItem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Connection>()
                .HasOne(c => c.ConnecterUserProfile)
                .WithMany(up => up.Connections)
                .HasForeignKey(c => c.ConnecterUserProfileId);
        }

    }
}
