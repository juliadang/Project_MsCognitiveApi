using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_MsCognitiveApi.Models
{
    public class PictureInfo
    {
        public string[] Tags { get; set; }
        public string Captions { get; set; }
        public Face Face { get; set; }
        public Category Category { get; set; }
 

    }
    public class Face
    {
        public int Age { get; set; }
        public string Gender { get; set; }
       
    }
    public class Category
    {
        public string[] Categories { get; set; }

    }
}
