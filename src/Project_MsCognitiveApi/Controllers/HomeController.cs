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
        public IActionResult Emotion()
        {
            return View();
        }
        public IActionResult Vision()
        {
            return View();
        }
        public IActionResult FaceRecognition()
        {
            return View();
        }


    }
}