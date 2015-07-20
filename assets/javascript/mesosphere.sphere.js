var Scene = (function() {
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
