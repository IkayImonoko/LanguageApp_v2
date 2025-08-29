using System.Data.SqlClient;
using Dapper;
using Microsoft.AspNetCore.Identity;

namespace LanguageAppApi.Storage;

public class UsersStorage
{
    const string connectionString = "Data Source=localhost; Initial Catalog=testBase; User Id=sa; Password=qwerty;";
    
    public void AddNewUser(User user)
    {
        var hasher = new PasswordHasher<string>();
        user.password = hasher.HashPassword(null, user.password);
        var connection = new SqlConnection(connectionString);
        var sql = "insert into Users values (@name, @email, @password)";
        
        var rowsAffected = connection.Execute(sql, user);
    }
}