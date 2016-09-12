using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Project_MsCognitiveApi.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Project_MsCognitiveApi.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Webcam()
        {
            return View();
        }

    }
}
        //public async Task<ActionResult> GetComputerVisison(PictureInfo pictureInfo)
        //{

        //    string webapiurl = "";// här vill vi ha länken till api/
        //    var client = new HttpClient();
        //    var json = await client.GetStringAsync(webapiurl);
            
            
        //}