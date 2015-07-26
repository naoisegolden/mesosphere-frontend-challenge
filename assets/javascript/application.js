var App = function(name) {
  this.id = Date.now();
  this.name = name;
};

var Server = (function() {
  var MAX_APPS = 2;

  return function() {
    this.apps = [];

    this.addApp = function(app) {
      if (this.apps.length < MAX_APPS) {
        this.apps.push(app);
      }
    };

    this.removeApp = function(app) {
      return this.apps.pop();
    };
  }
})();

var ServerCanvas = (function() {
  return function() {
    this.servers = [];

    this.addServer = function(app) {
      this.servers.push(app);
    };

    this.removeServer = function(app) {
      return this.servers.pop();
    };
  }
})();

var MesosApp = (function() {
  var _serverCanvas = new ServerCanvas(),
      _availableApps = [];

  var _addServer = function(server) {
    _serverCanvas.addServer(server);
  }

  var _removeServer = function() {
    _serverCanvas.removeServer();
  }

  var _addApp = function() {
    // TODO must add app to first available server
  }

  var _removeApp = function() {
    // TODO must remove last added app
  }

  return function() {
    this.serverCanvas  = _serverCanvas;
    this.availableApps = _availableApps;
    this.addServer     = _addServer;
    this.removeServer  = _removeServer;
    this.addApp        = _addApp;
    this.removeApp     = _removeApp;
  }
})();
