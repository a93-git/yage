var gObjectNum = 0; // Index of the object in focus

function userControl(event) {
  var keycode;

  // Handle keyboard inputs based on browser 
  if (window.event) { // IE
    keycode = event.keyCode;
  } else if (event.which) { // Rest of them
    keycode = event.which;
  }

  var width = gEngine.Core.mWidth;
  var height = gEngine.Core.mHeight;
  var context = gEngine.Core.mContext;

  if (keycode === 70) {
    // when 'f' is pressed, create a new rectangle at random position
    // context.strokeRect(
    //   // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect
    //   Math.random() * width * 0.8, // x
    //   Math.random() * height * 0.8, // y
    //   Math.random() * 30 + 10,  // width
    //   Math.random() * 30 + 10); // height
    var r1 = new Rectangle(
      new Vec2(
        gEngine.Core.mAllObjects[gObjectNum].mCenter.x, 
        gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
      Math.random() * 30 + 10,
      Math.random() * 30 + 10);
  }
  if (keycode === 71) {
    // when 'g' key is pressed, create a circle at random position
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
    // context.beginPath();
    // context.arc(
    //   // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    //   Math.random() * width * 0.8, // center x
    //   Math.random() * height * 0.8, // center y
    //   Math.random() * 30 + 10, // radius
    //   0, Math.PI * 2, // start angle, end angle
    //   true); // counterclockwise?
    // // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath
    // context.closePath();
    // // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke
    // context.stroke();
    
    var r1 = new Circle(
      new Vec2(
        gEngine.Core.mAllObjects[gObjectNum].mCenter.x, 
        gEngine.Core.mAllObjects[gObjectNum].mCenter.y),
      Math.random() * 10 + 20);
  }

  // Cycle through the objects using up or down or 0-9
  if (keycode >= 48 && keycode <= 57) { // 0-9
    if (keycode - 48 < gEngine.Core.mAllObjects.length)
      gObjectNum = keycode - 48;
  }
  if (keycode === 38) { // up
    if (gObjectNum > 0)
      gObjectNum--;
  }
  if (keycode === 40) { // down
    if (gObjectNum < gEngine.Core.mAllObjects.length - 1)
      gObjectNum++;
  }

  // Move with WASD
  if (keycode === 87) { // W 
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, -10));
  }
  if (keycode === 83) { // S 
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(0, +10));
  }
  if (keycode === 65) { // A 
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(-10, 0));
  }
  if (keycode === 68) { // D 
    gEngine.Core.mAllObjects[gObjectNum].move(new Vec2(10, 0));
  }

  // Rotate with QE keys
  if (keycode === 81) { // Q 
    gEngine.Core.mAllObjects[gObjectNum].rotate(-0.1);
  }
  if (keycode === 69) { // E 
    gEngine.Core.mAllObjects[gObjectNum].rotate(0.1);
  }

  // Toggle gravity with the H key
  if (keycode === 72) {
    if (gEngine.Core.mAllObjects[gObjectNum].mFix === 0)
      gEngine.Core.mAllObjects[gObjectNum].mFix = 1;
    else gEngine.Core.mAllObjects[gObjectNum].mFix = 0;
  }

  // Reset the scene
  if (keycode === 82) {
    gEngine.Core.mAllObjects.splice(5, gEngine.Core.mAllObjects.length);
    gObjectNum = 0;
  }
}



















































