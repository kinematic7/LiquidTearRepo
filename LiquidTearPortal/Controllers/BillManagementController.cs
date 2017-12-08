using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LiquidTearPortal.Controllers
{
    public class BillManagementController : Controller
    {
        // GET: BillManagement
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetBillingData()
        {
            List<BillingData> retVal = new List<BillingData>()
            {
                 new BillingData() { Id = 1, Name = "XX", Description = "YY", LoginId = "ZZ", Password = "ABCD" }
            };

            return Json(retVal);
        }
    }

    public class BillingData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string LoginId { get; set; }
        public string Password { get; set; }
    }

}