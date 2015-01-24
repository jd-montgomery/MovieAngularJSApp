using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;

namespace MovieAngularJSApp
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // register MVC with the built-in Dependency Injection framework included in ASP.NET 5
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
            
            // register MVC with OWIN
            app.UseMvc();
        }
    }
}
