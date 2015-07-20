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
