using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Enteties;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        public StoreContext _context { get; }
        
        public ProductsController(StoreContext context)
        {
            _context = context;
            
        }        

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() 
        {
            return await _context.MyPropertys.ToListAsync();
            
        }

        [HttpGet("{id}")] //api/products/3
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.MyPropertys.FindAsync(id);
        }
    }
} 