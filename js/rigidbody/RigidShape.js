function RigidShape(center) {
  this.mCenter = center;
  this.mAngle = 0;
  this.mBoundRadius = 0;
  gEngine.Core.mAllObjects.push(this);

  // Here mFix keeps track whether the object is fixed or not
  // If value is 0, it means the object doesn't move
  // This value will be provided by the subclasses
  // This is different than from the book
  this.update = function () {
    // if (this.mCenter.y < gEngine.Core.mHeight && this.mFix !== 0)
    //   this.move(new Vec2(0, 1));
  };

  // Check if the bounding circles collide by checking if the distance between 
  // their centers is less than the sum of their radii
  this.boundTest = function (otherShape) {
    var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
    var rSum = this.mBoundRadius + otherShape.mBoundRadius;
    var dist = vFrom1to2.length();
    if (dist > rSum) {
      document.getElementById("test").innerHTML = "<p><b>Not Colliding</b></p>";
      return false; // Not overlapping
    }

    document.getElementById("test").innerHTML = "<p><b>Colliding</b></p>";

    return true;
  };
}

