function RigidShape(center) {
  this.mCenter = center;
  this.mAngle = 0;
  gEngine.Core.mAllObjects.push(this);

  // Here mFix keeps track whether the object is fixed or not
  // If value is 0, it means the object doesn't move
  // This value will be provided by the subclasses
  // This is different than from the book
  this.update = function () {
    if (this.mCenter.y < gEngine.Core.mHeight && this.mFix !== 0)
      this.move(new Vec2(0, 1));
  };
}
