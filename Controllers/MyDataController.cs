using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Project2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MyDataController : ControllerBase
    {

        public IEnumerable<Person> Get() => new List<Person>(new[]
        {
            new Person { Name = "Vovan", Email = "vovansuper@mail.ru" },
            new Person { Name = "Alex", Email = "alex@mail.ru" }
        });
    }
}


public class Person
{
    public string Name { get; set; }
    public string Email { get; set; }
}