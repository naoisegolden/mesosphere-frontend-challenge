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

    this.removeApp = function(app) {
      return this.apps.pop();
    };
  }
})();
