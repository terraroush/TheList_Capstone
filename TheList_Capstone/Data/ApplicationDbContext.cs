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
        public DbSet<ListKind> ListKind { get; set; }
        public DbSet<UserList> UserList { get; set; }
        public DbSet<Comment> Comment { get; set; }
        public DbSet<ListItem> ListItem { get; set; }

    }
}
