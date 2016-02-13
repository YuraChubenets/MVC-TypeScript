using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAppTS.Models;

namespace WebAppTS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult GetUsers()
        {
            List<User> userlist = new List<User>() {

                new User { Id=1, Name="Stef", Age=22 },
                new User { Id=2, Name="dffsd", Age=33 },
                new User {Id=4, Name="Gort", Age=44 }

            };
            return Json(userlist, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}