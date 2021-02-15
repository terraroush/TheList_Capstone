using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheList_Capstone.Data;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public class ConnectionRepository : IConnectionRepository
    {
        private ApplicationDbContext _context;
        public ConnectionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Plan> GetPlansFromConnectedAuthors(int userId)
        {
            return _context.Connection
                .Where(c => c.ConnecterUserProfileId == userId)
                .Include(c => c.ProviderUserProfile)
                    .ThenInclude(up => up.Plans)
                .SelectMany(c => c.ProviderUserProfile.Plans)
                .ToList();
        }

        public Connection GetConnection(int userId, int authorId)
        {
            return _context.Connection
                .Where(c => c.ConnecterUserProfileId == userId)
                .Where(c => c.ProviderUserProfileId == authorId)
                .FirstOrDefault();
        }

        public List<Connection> GetByUserId(int userId)
        {
            return _context.Connection
                .Where(c => c.ConnecterUserProfileId == userId).ToList();
        }
        public void Add(Connection connection)
        {
            _context.Add(connection);
            _context.SaveChanges();
        }
        public void Update(Connection connection)
        {
            _context.Entry(connection).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public List<Connection> GetConnectedPlans(int userId)
        {
            return _context.Connection.Where(c => c.ConnecterUserProfileId == userId)
                .Include(c => c.ProviderUserProfile)
                .Include(c => c.ProviderUserProfile.Plans)
                .ToList();
        }
    }
}
