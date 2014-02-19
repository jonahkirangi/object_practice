exports.Tree = function(height,color) {

  var constructor = function() {};
  constructor.prototype.getHeight = function () {
    return height;
  };

  constructor.prototype.getColor = function() {
    return color;
  };

  return new constructor();
}
