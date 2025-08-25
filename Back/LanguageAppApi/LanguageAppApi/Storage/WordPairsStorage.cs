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

    public void AddWordPair(WordPair wordPair)
    {
        var connection = new SqlConnection(connectionString);
        var sql = "insert into WordPairs values (@russian, @norwegian, @category)";
        
        var rowsAffected = connection.Execute(sql, wordPair);
    }

    public void DeleteWordPairs(List<int>? ids)
    {
        var connection = new SqlConnection(connectionString);
        var sql = "delete from WordPairs where id in @Ids ";
        
        var rowsAffected = connection.Execute(sql, new { Ids = ids });
    }

    public void UppdateWordPair(int id, WordPair wordPair)
    {
        var connection = new SqlConnection(connectionString);
        var sql ="update WordPairs set russian = @Russian, norwegian = @Norwegian, category = @Category where id = @Id";
        var rowsAffected = connection.Execute(sql, new { Id = id, Russian = wordPair.russian, Norwegian = wordPair.norwegian, Category = wordPair.category});
    }
}