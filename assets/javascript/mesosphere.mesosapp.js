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
