using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IConnectionRepository
    {
        public void Add(Connection connection);

        public List<Connection> GetByUserId(int userId);

        public List<Plan> GetPlansFromConnectedUsers(int userId);

        public void Delete(int id);

        public Connection GetByConnectionId(int id);
    }
}