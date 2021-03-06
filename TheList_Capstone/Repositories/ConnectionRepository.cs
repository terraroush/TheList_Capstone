﻿using Microsoft.EntityFrameworkCore;
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

        public List<Plan> GetPlansFromConnectedUsers(int userId)
        {
            return _context.Connection
                .Where(c => c.ConnecterUserProfileId == userId)
                .Include(c => c.ConnecterUserProfile)
                .Include(c => c.ProviderUserProfile)
                    .ThenInclude(up => up.Plans)
                    .ThenInclude(up => up.PlanItems)
                .SelectMany(c => c.ProviderUserProfile.Plans)
                .Where(c => c.Public)
                .Include(c => c.PlanType)
                .Include(c => c.UserProfile)
                .OrderByDescending(up => up.DateCreated)
                .ToList();
        }

        public Connection GetByConnectionId(int id)
        {
            return _context.Connection.Where(c => c.Id == id).FirstOrDefault();
        }

        public List<Connection> GetConnectedByUserId(int userId)
        {
            return _context.Connection
                .Include(c => c.ProviderUserProfile)
                .Include(c => c.ConnecterUserProfile)
                    .ThenInclude(up => up.Plans)
                .Where(c => c.ConnecterUserProfileId == userId)
                .ToList();

        }

        public void Add(Connection connection)
        {
            _context.Add(connection);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var connection = _context.Connection.FirstOrDefault(c => c.Id == id);
            _context.Connection.Remove(connection);
            _context.SaveChanges();
        }
    }
}
