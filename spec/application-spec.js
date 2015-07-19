describe("An App", function() {
  xit("has an id", function() {});
  xit("has a name", function() {});
});

describe("A Server", function() {
  xit("can have an App added", function() {});
  xit("can have an App removed", function() {});
  xit("can have a maximum of two Apps", function() {});
  xit("can have a minimum of zero Apps", function() {});
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
