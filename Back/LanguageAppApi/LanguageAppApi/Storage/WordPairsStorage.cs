using System.Data.SqlClient;
using Dapper;

namespace LanguageAppApi.Storage;

public class WordPairsStorage
{
    const string connectionString = "Data Source=localhost; Initial Catalog=testBase; User Id=sa; Password=qwerty;";
    public WordPair[] GetWordPairs()
    {
        var connection = new SqlConnection(connectionString);
        var sql = "select * from WordPairs";
        return connection.Query<WordPair>(sql).ToArray();
    }

    public void AddClaimedSquare(WordPair wordPair)
    {
        var connection = new SqlConnection(connectionString);
        var sql = "insert into WordPairs values (@russian, @norwegian, @category)";
        
        var rowsAffected = connection.Execute(sql, wordPair);
    }
}