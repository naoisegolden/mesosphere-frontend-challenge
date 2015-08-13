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
      if(server.addApp(app)) {
        return true;
      }
    });

    return false;
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
