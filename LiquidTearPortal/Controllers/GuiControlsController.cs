using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LiquidTearPortal.Controllers
{
    public class GuiControlsController : Controller
    {
        public PartialViewResult DynamicTable()
        {
            return PartialView();
        }
    }
}