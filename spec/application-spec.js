describe("An App", function() {
  var app;

  beforeEach(function() {
    app = new App("Hadoop");
  });

  it("has an id", function() {
    expect(app.id).toBeDefined();
  });

  it("has a name", function() {
    expect(app.name).toEqual("Hadoop");
  });
});

describe("A Server", function() {
  var app,
      scene;

  beforeEach(function() {
    app   = new App("Hadoop");
    scene = new Scene();
  });

  it("can have an App added", function() {
    scene.addApp(app);

    expect(scene.apps.length).toEqual(1);
  });

  it("can have an App removed", function() {
    scene.addApp(app);
    scene.removeApp();
    scene.removeApp();

    expect(scene.apps.length).toEqual(0);
  });

  it("can have a maximum of two Apps", function() {
    var app2 = new App("Chronos");
    var app3 = new App("Chronos");

    scene.addApp(app);
    scene.addApp(app2);
    scene.addApp(app3);

    expect(scene.apps.length).toEqual(2);
  });

  it("can have a minimum of zero Apps", function() {
    scene.addApp(app);
    scene.removeApp();
    scene.removeApp();
    expect(scene.apps.length).toEqual(0);
  });
});

describe("A Server Canvas", function() {
  xit("can add a Server", function() {});
  xit("can remove a Server", function() {});
});

describe("The Mesos App", function() {
  xit("has a Server Canvas", function() {});
  xit("has a list of Available Apps", function() {});
  xit("can Add a Server into the Server Canvas", function() {});
  xit("can Destroy a Server from the Server Canvas", function() {});
  xit("can add an App on an available Server", function() {});
  xit("can remove the newest instance of an App", function() {});

  describe("when you Add an App", function() {
    xit("runs on the first Server running 0 Apps", function() {});
    xit("runs on the first Server running only 1 App if all Servers are running Apps", function() {});
    xit("doesn't run anywhere if all Servers are full", function() {});
  });

  describe("when a Server is Destroyed", function() {
    xit("the apps should be Added to another Server", function() {});
    xit("the apps should be Destroyed if al Servers are full", function() {});
  });
});
