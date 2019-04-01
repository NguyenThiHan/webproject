using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebProject.Models;

namespace WebProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        List<Shoes> shoes = new List<Shoes>();

        public ProductController()
        {
            shoes = ShoesDB.shoes;
        }

        //Get: api/Product/GetAllShoes

        [HttpGet]
        [Route("GetAllShoes")]

        public async Task<List<Shoes>> GetAllShoes()
        {
            return await Task.FromResult(shoes);
        }

        //GET: api/Product/GetShoes/?codeType=
        //Get: api/Product/GetShoes/?codeType= & sizeList=
        [HttpGet]
        [Route("GetShoes")]

        public async Task<List<Shoes>> GetShoes(long codeType)
        {
            var result = shoes.Where(p => p.CodeType == codeType).ToList();
            return await Task.FromResult(result);
        }
      
        //Get: api/Product/GetItem/?Id=125511
        [HttpGet]
        [Route("GetItem")]

        public async Task<Shoes> GetItem(long id)
        {
            var result = shoes.Where(p => p.Id == id).FirstOrDefault();
            return await Task.FromResult(result);
        }

        //Get: api/Product/FindItem/?sizeList= &codeType=

        [HttpGet]
        [Route("FindItem")]
        public async Task<List<Shoes>> FindItem(string sizeList,long codeType)
        {
            var result = shoes.Where(p => p.CodeType == codeType).ToList();

                //String searchString = Convert.ToString(sizeList);
                if (!String.IsNullOrEmpty(sizeList))
                {
                    result = result.Where(p => p.SizeList.Contains(sizeList)).ToList();
                }
           // result = shoes.Where(p => p.CodeType == codeType).ToList();
            return await Task.FromResult(result);
        }

        //Find Item Shoes
        //GET: api/Product/FindItemShoes/?sizeList
        [HttpGet]
        [Route("FindItemShoes")]
        public async Task<List<Shoes>> FindItemShoes(float sizeList)
        {
            String searchString = Convert.ToString(sizeList);

            if (!String.IsNullOrEmpty(searchString))
            {
                var result = shoes.Where(p => p.SizeList.Contains(searchString)).ToList();
                return await Task.FromResult(result);
            }
            return null;
        }
    }
}