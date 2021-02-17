using System.Collections.Generic;
using TheList_Capstone.Models;

namespace TheList_Capstone.Repositories
{
    public interface IConnectionRepository
    {
        void Add(Connection connection);

        List<Connection> GetByUserId(int userId);

        void Update(Connection connection);

        List<Plan> GetPlansFromConnectedUsers(int userId);
    }
}