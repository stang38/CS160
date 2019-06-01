var _inputHandler = null;
var shape = 2;
var mousedown = false;
var r=Math.random();
var g=Math.random();
var b=Math.random();
var animation;
var time;


/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene,ctx,hud) {
      this.canvas = canvas;
      this.scene = scene;
      this.ctx = ctx;
      this.hud = hud;
      _inputHandler = this;
      // // Mouse Events


      // this.canvas.onmousedown = function(ev) {
      //   _inputHandler.click(ev);
      //   mousedown = true;
      // };
      // this.canvas.onmouseup = function(ev){
      //   mousedown = false;
      // };
      this.hud.requestPointerLock = this.hud.requestPointerLock ||
                            this.hud.mozRequestPointerLock;

      document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock;

    this.hud.onclick = function() {
      hud.requestPointerLock();
    };
    // Hook pointer lock state change events for different browsers
    document.addEventListener('pointerlockchange', _inputHandler.lockChangeAlert, false);
    document.addEventListener('mozpointerlockchange', _inputHandler.lockChangeAlert, false);

      // this.canvas.onmousemove = function(ev){
      //   if (mousedown){
      //     _inputHandler.click(ev);
      //   }
      // };


    }
    /**
     * Function called upon mouse click.
     */
    // click(ev) {
    //     var x = ev.clientX;
    //     var y = ev.clientY;
    //     var rect = ev.target.getBoundingClientRect();
    //     var x_in_canvas = x - rect.left, y_in_canvas = rect.bottom - y;

    //     var x2 = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
    //     var y2 = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

    //     let pixels = new Uint8Array(4);
    //     gl.readPixels(x_in_canvas,y_in_canvas,1,1, gl.RGBA,gl.UNSIGNED_BYTE,pixels);

    //     console.log(pixels);

    //     let rVal = pixels[0];
    //     let gVal = pixels[1];
    //     let bVal = pixels[2];
    //     let alpha = pixels[3];
    //     if (alpha!=255){
    //       this.scene.clearGeometries();
    //       this.ctx.font = '20px "Times New Roman"';
    //       this.ctx.fillStyle = 'rgba(255, 0, 128, 1)';

    //       //this.ctx.clearRect(0, 0, 800, 80);
    //       time = Math.floor(currentAngle);
    //       this.ctx.fillText("time: ", 340, 60);
    //       this.ctx.fillText(time, 400, 60);

    //       for (var i =0; i<=50; i++) {
    //         for (var j=0; j<=4;j++){
    //         var shape = new Circle1(shader,x2,y2,1,2,3,20,10);
    //         this.scene.addGeometry(shape);
    //         var shape2 = new Circle2(shader,x2,y2,1,2,3,1,10);
    //         this.scene.addGeometry(shape2);
    //         //m = m + 0.05 ;
    //         }
    //     }
    //       console.log("time: ",time);
    //     }
    // }

    lockChangeAlert() {
        if (document.pointerLockElement === hud ||
            document.mozPointerLockElement === hud) {
          console.log('The pointer lock status is now locked');
          document.addEventListener("mousemove", _inputHandler.updatePosition, false);
        } else {
          console.log('The pointer lock status is now unlocked');
          document.removeEventListener("mousemove", _inputHandler.updatePosition, false);
        }
    }
    updatePosition(ev) {
        x += ev.movementX;
        y += ev.movementY;
        var rect = ev.target.getBoundingClientRect();
        var x_in_canvas = x - rect.left, y_in_canvas = rect.bottom - y;
        var x2 = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
        var y2 = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

        let pixels = new Uint8Array(4);
        gl.readPixels(x_in_canvas,y_in_canvas,1,1, gl.RGBA,gl.UNSIGNED_BYTE,pixels);
        console.log("pixels: ",pixels);

        let alpha = pixels[3];
        if(alpha != 255){

          _inputHandler.scene.clearGeometries();
         _inputHandler.ctx.font = '20px "Times New Roman"';
          _inputHandler.ctx.fillStyle = 'rgba(255, 0, 128, 1)';
          _inputHandler.ctx.fillText('NMSL!', 340, 60);

          //_inputHandler._inputHandler.clearRect(0, 0, 800, 80);
          time = Math.floor(currentAngle);
          _inputHandler.ctx.fillText("time: ", 340, 60);
          _inputHandler.ctx.fillText(time, 400, 60);

          for (var i =0; i<=50; i++) {
            for (var j=0; j<=4;j++){
            var shape = new Circle1(shader,x2,y2,1,2,3,20,10);
            _inputHandler.scene.addGeometry(shape);
            var shape2 = new Circle2(shader,x2,y2,1,2,3,1,10);
            _inputHandler.scene.addGeometry(shape2);
            //m = m + 0.05 ;
            } 
        }
          console.log("time: ",time);

        }
        
        if (x > hud.width + 20) {
          x = -20;
        }
        if (y > hud.height + 20) {
          y = -20;
        }
        if (x < -20) {
          x = hud.width + 20;
        }
        if (y < -20) {
          y = hud.height + 20;
        }
      //  tracker.textContent = "X position: " + x + ", Y position: " + y;

        if (!animation) {
          animation = requestAnimationFrame(function() {
              animation = null;
              canvasDraw();
          });
        }
         console.log(x,y);
    }

}
