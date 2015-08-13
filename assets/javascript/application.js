var App = function(name) {
  this.id = Date.now();
  this.name = name;
};

var Server = (function() {
  var MAX_APPS = 2;

  return function() {
    this.apps = [];

    /* Adds an App to the Server
     * @param {App} app An app instance
     * @returns {Boolean} True if app was added, false otherwise
     */
    this.addApp = function(app) {
      if (this.apps.length < MAX_APPS) {
        this.apps.push(app);
        return true;
      } else {
        return false;
      }
    };

    this.removeApp = function() {
      return this.apps.pop();
    };

    this.latestAddedApp = function() {
      if (this.apps.length === 0) return false;

      return this.apps[this.apps.length - 1];
    }
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

  /* Adds an App to Mesos App's ServerCanvas
   * @param {App} app An app instance
   * @returns {Boolean} True if app was added, false otherwise
   */
  var _addApp = function(app) {
    _serverCanvas.servers.forEach(function (server) {
      if (server.addApp(app)) {
        _availableApps.push(app);
        return true;
      }
    });

    return false;
  }

  var _removeApp = function() {
    if (_availableApps.length === 0) return false;

    var removedApp = false,
        latestAddedApp = _availableApps[_availableApps.length - 1];

    _serverCanvas.servers.forEach(function (server) {
      if (latestAddedApp === server.latestAddedApp()) {
        server.removeApp();
        removedApp = _availableApps.pop();
      }
    });

    return removedApp;
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
