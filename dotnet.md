# How to make a .NET REST API
[install .NET](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) (6.0 was used by Prime Syllabus for Jade Cohort)



Init project

ProjectNameAPI will create a folder with the project name
```
dotnet new webapi -n ProjectNameAPI --no-https
```

```
dotnet new gitignore
```

## What is Model? Controller? Services?

Model - The file where the Class for "Glasses" is defined

Controller - Home of CRUD operations HttpGet, HttpPost, HttpPut, HttpDelete

Services - Perform the CRUD actions, this holds the methods(functions) that the Controller calls.

# Lets Copy and paste!

Replace the variables with the appropriate name for your project.

Glasses - ClassName (similar to JS Object) as defined in Model

glasses - variable used in the methods, could be anything

AllGlasses - array, normally the plural of the ClassName



## Note on "namespace":

To initalize a namespace use `namespace ProjectName.Topic;`, in other files that need to access that file or 'namespace' you can 'import' it with `using ProjectName.Topic;`

## Model

```c#
// Glasses.cs (Rootdir/Models)
namespace SeeSharpGlasses.Models;

public class Glasses
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Color { get; set; }
    public string? Shape { get; set; }
}
```

## Services

```c#
// GlassesServices.cs (Rootdir/Services)

using SeeSharpGlasses.Models;

namespace SeeSharpGlasses.Services;

public static class GlassesService
{
    static List<Glasses> AllGlasses { get; }
    static int nextId = 4;
    static GlassesService()
    {
        AllGlasses = new List<Glasses>
        {
            new Glasses { Id = 1, Name = "Ray-Ban Clubmaster", Color = " Brown / Gold", Shape = "browline" },
            new Glasses { Id = 2, Name = "Ottoto Bellona", Color = "Pink / Gold", Shape = "Oval" },
            new Glasses { Id = 3, Name = "Oakley Socket 5.5", Color = "Gunmetal", Shape = "Rectangle"}
        };
    }

    public static List<Glasses> GetAll() => AllGlasses;

    public static Glasses? Get(int id) => AllGlasses.FirstOrDefault(p => p.Id == id);

    public static void Add(Glasses glasses)
    {
        glasses.Id = nextId++;
        AllGlasses.Add(glasses);
    }

    public static void Delete(int id)
    {
        var glasses = Get(id);
        if (glasses is null)
            return;

        AllGlasses.Remove(glasses);
    }

    public static void Update(Glasses glasses)
    {
        var index = AllGlasses.FindIndex(p => p.Id == glasses.Id);
        if (index == -1)
            return;

        AllGlasses[index] = glasses;
    }
}
```


## Controller

```c#
// GlassesController.cs (Rootdir/Controllers)

using SeeSharpGlasses.Models;
using SeeSharpGlasses.Services;
using Microsoft.AspNetCore.Mvc;

namespace SeeSharpGlasses.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GlassesController : ControllerBase
{
  public GlassesController()
  {
  }

  // GET all action
  [HttpGet]
  public ActionResult<List<Glasses>> GetAll() =>
      GlassesService.GetAll();

  // GET by Id action
  [HttpGet("{id}")]
  public ActionResult<Glasses> Get(int id)
  {
    var glasses = GlassesService.Get(id);

    if (glasses == null)
      return NotFound();

    return glasses;
  }

  // POST action
  [HttpPost]
  public IActionResult Create(Glasses glasses)
  {
    // This code will save the pizza and return a result
    GlassesService.Add(glasses);
    return CreatedAtAction(nameof(Get), new { id = glasses.Id }, glasses);

  }

  // PUT action
  [HttpPut("{id}")]
  public IActionResult Update(int id, Glasses glasses)
  {
    if (id != glasses.Id)
      return BadRequest();

    var existingGlasses = GlassesService.Get(id);
    if (existingGlasses is null)
      return NotFound();

    GlassesService.Update(glasses);

    return NoContent();
  }

  // DELETE action
  [HttpDelete("{id}")]
  public IActionResult Delete(int id)
  {
    var glasses = GlassesService.Get(id);

    if (glasses is null)
      return NotFound();

    GlassesService.Delete(id);

    return NoContent();
  }
}

```

