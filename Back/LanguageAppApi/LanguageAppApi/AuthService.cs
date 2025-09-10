using System.Data.SqlClient;
using Dapper;
using Microsoft.AspNetCore.Identity;

namespace LanguageAppApi;

public class AuthService
{
    private readonly string _connectionString;
    private readonly PasswordHasher<string> _hasher;

    public AuthService(string connectionString)
    {
        _connectionString = connectionString;
        _hasher = new PasswordHasher<string>();
    }

    public bool CheckLogin(string username, string password)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            string sql = "SELECT Password FROM Users WHERE Name = @username";
            string storedHash = connection.QueryFirstOrDefault<string>(sql, new { username });

            if (storedHash == null)
                return false;
            
            var result = _hasher.VerifyHashedPassword(null, storedHash, password);

            return result == PasswordVerificationResult.Success;
        }
    }
}