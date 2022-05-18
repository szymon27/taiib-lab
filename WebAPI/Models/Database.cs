using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Database : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<BasketItem> BasketItems { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlite(@"Data Source=C:\Users\szymo\Desktop\taiib-lab\WebAPI\database.db");
    }
}
