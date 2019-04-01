using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebProject.Models
{
    public static class ShoesDB
    {
        public static List<Shoes> shoes = new List<Shoes>();

        static  ShoesDB()
        {
            InitData();
        }
        static void InitData()
        {
            shoes.Add(new Shoes { Id = 125511, SizeList = "8/8.5/9.5/10/11", BrandName = "Adidas Shoes", Price = 53, CodeType = 1, Picture = "/assets/css/images/image1.jpg"});
            shoes.Add(new Shoes { Id = 125512, SizeList = "8/8.5/9.5/10/16", BrandName = "Adidas Shoes", Price = 100, CodeType = 1, Picture= "/assets/css/images/image2.jpg" });
            shoes.Add(new Shoes { Id = 125514, SizeList = "8/8.5/9.5/10/15", BrandName = "Adidas Shoes", Price = 54, CodeType = 1 , Picture= "/assets/css/images/image1.jpg" });
            shoes.Add(new Shoes { Id = 125515, SizeList = "8/8.5/9.5/10/11", BrandName = "Adidas Shoes", Price = 33, CodeType = 1,Picture= "/assets/css/images/image3.jpg" });
            shoes.Add(new Shoes { Id = 125516, SizeList = "8/8.5/9.5/10/14", BrandName = "Adidas Shoes", Price = 150, CodeType = 1,Picture= "/assets/css/images/image1.jpg" });
            shoes.Add(new Shoes { Id = 125517, SizeList = "8/8.5/9.5/10/14", BrandName = "Adidas Shoes", Price = 53, CodeType = 1 ,Picture= "/assets/css/images/image1.jpg" });
            shoes.Add(new Shoes { Id = 125518, SizeList = "8/8.5/9.5/10/15", BrandName = "Adidas Shoes", Price = 53, CodeType = 1,Picture= "/assets/css/images/image2.jpg" });

            shoes.Add(new Shoes { Id = 125521, SizeList = "8/8.5/9.5/10/11", BrandName = "Adidas Shoes", Price = 53, CodeType = 2,Picture= "/assets/css/images/image1.jpg"});
            shoes.Add(new Shoes { Id = 125522, SizeList = "8/8.5/9.5/10/12", BrandName = "Adidas Shoes", Price = 53, CodeType = 2 , Picture= "/assets/css/images/image4.jpg"});
            shoes.Add(new Shoes { Id = 125523, SizeList = "8/8.5/9.5/10/11", BrandName = "Adidas Shoes", Price = 53, CodeType = 2 , Picture= "/assets/css/images/image2.jpg"});
            shoes.Add(new Shoes { Id = 125524, SizeList = "8/8.5/9.5/10/13", BrandName = "Adidas Shoes", Price = 53, CodeType = 2 ,Picture= "/assets/css/images/image3.jpg" });
            shoes.Add(new Shoes { Id = 125525, SizeList = "8/8.5/9.5/10/17", BrandName = "Adidas Shoes", Price = 53, CodeType = 2 , Picture= "/assets/css/images/image1.jpg"});

            shoes.Add(new Shoes { Id = 125531, SizeList = "8/8.5/9.5/10/11", BrandName = "Adidas Shoes", Price = 53, CodeType = 3, Picture = "/assets/css/images/image1.jpg" });
            shoes.Add(new Shoes { Id = 125532, SizeList = "8/8.5/9.5/10/20", BrandName = "Adidas Shoes", Price = 53, CodeType = 3, Picture = "/assets/css/images/image2.jpg" });
            shoes.Add(new Shoes { Id = 125533, SizeList = "8/8.5/9.5/10/11", BrandName = "Adidas Shoes", Price = 53, CodeType = 3, Picture = "/assets/css/images/image4.jpg" });
            shoes.Add(new Shoes { Id = 125534, SizeList = "8/8.5/9.5/10/22", BrandName = "Adidas Shoes", Price = 53, CodeType = 3, Picture = "/assets/css/images/image3.jpg" });
            shoes.Add(new Shoes { Id = 125535, SizeList = "8/8.5/9.5/10/12", BrandName = "Adidas Shoes", Price = 53, CodeType = 3, Picture = "/assets/css/images/image4.jpg" });
        }
    }
}
