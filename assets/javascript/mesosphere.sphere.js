var Scene = function() {
  this.MAX_APPS = 2;
  this.apps = [];
}

Scene.prototype.addApp = function(app) {
  if (this.apps.length < this.MAX_APPS) {
    this.apps.push(app);
  }
};

Scene.prototype.removeApp = function(app) {
  return this.apps.pop();
};
