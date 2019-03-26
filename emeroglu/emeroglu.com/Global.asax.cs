using emeroglu.com.Repository;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Routing;

namespace emeroglu.com
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();            
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            DateTime now = DateTime.Now;            

            Cache.Start = now;
            Cache.Last_Alive = now;
            Cache.Last_Refresh = now;

            Cache.Style = "";
            Cache.Script = "";
            Cache.Images = new Dictionary<string, FileContentResult>();

            Cache.Modules = new Dictionary<string, string>();
        }
    }
}
