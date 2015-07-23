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
      server;

  beforeEach(function() {
    app   = new App("Hadoop");
    server = new Server();
  });

  it("can have an App added", function() {
    server.addApp(app);

    expect(server.apps.length).toEqual(1);
  });

  it("can have an App removed", function() {
    server.addApp(app);
    server.removeApp();
    server.removeApp();

    expect(server.apps.length).toEqual(0);
  });

  it("can have a maximum of two Apps", function() {
    var app2 = new App("Chronos");
    var app3 = new App("Chronos");

    server.addApp(app);
    server.addApp(app2);
    server.addApp(app3);

    expect(server.apps.length).toEqual(2);
  });

  it("can have a minimum of zero Apps", function() {
    server.addApp(app);
    server.removeApp();
    server.removeApp();
    expect(server.apps.length).toEqual(0);
  });
});

describe("A Server Canvas", function() {
  var serverCanvas,
      server;

  beforeEach(function() {
    serverCanvas = new ServerCanvas();
    server       = new Server();
  });

  it("can add a Server", function() {
    serverCanvas.addServer(server);

    expect(serverCanvas.servers.length).toEqual(1);
  });

  it("can remove a Server", function() {
    serverCanvas.addServer(server);
    serverCanvas.removeServer();

    expect(serverCanvas.servers.length).toEqual(0);
  });
});

describe("The Mesos App", function() {
  var mesosApp;

  beforeEach(function() {
    mesosApp = new MesosApp();
  });

  it("has a Server Canvas", function() {
    expect(mesosApp.serverCanvas).toBeDefined();
  });

  it("has a list of Available Apps", function() {
    expect(mesosApp.availableApps).toBeDefined();
  });

  it("can Add a Server into the Server Canvas", function() {
    mesosApp.addServer(new Server())

    expect(mesosApp.serverCanvas.servers.length).toEqual(1);
  });

  it("can Destroy a Server from the Server Canvas", function() {
    mesosApp.addServer(new Server())
    mesosApp.removeServer()

    expect(mesosApp.serverCanvas.servers.length).toEqual(1);
  });

  it("can add an App on an available Server", function() {
    expect(mesosApp.addApp).toBeDefined();
  });

  it("can remove the newest instance of an App", function() {
    expect(mesos.removeApp).toBeDefined();
  });

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
