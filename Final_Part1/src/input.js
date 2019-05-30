var _inputHandler = null;
var shape = 2;
var mousedown = false; 
var r=0;
var g=1;
var b=0;
var animation;


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
      this.canvas.onmousedown = function(ev) { 
        _inputHandler.click(ev);
        mousedown = true; 
      };
      this.canvas.onmouseup = function(ev){
        mousedown = false;
      };
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

    }
    /**
     * Function called upon mouse click.
     */
    click(ev) {
        var x = ev.clientX;
        var y = ev.clientY;
        var rect = ev.target.getBoundingClientRect();
        var x_in_canvas = x - rect.left
        var y_in_canvas = rect.bottom - y;
        
        // for (var i =0; i<=300; i++) {
        //     for (var j=0; j<=4;j++){
        //     var shape = new Circle1(shader,x,y,1,2,3,5,10);
        //     this.scene.addGeometry(shape);
        //     var shape2 = new Circle2(shader,x,y,1,2,3,1,10);
        //     this.scene.addGeometry(shape2);
        //     //m = m + 0.05 ;
        //     } 
        // }
        let pixels = new Uint8Array(4);
        gl.readPixels(x_in_canvas,y_in_canvas,1,1, gl.RGBA,gl.UNSIGNED_BYTE,pixels);
        
        console.log(pixels);

        let rVal = pixels[0];
        let gVal = pixels[1];
        let bVal = pixels[2];
        let alpha = pixels[3];
        if (alpha!=255){
          this.scene.clearGeometries();
          this.ctx.font = '20px "Times New Roman"';
          this.ctx.fillStyle = 'rgba(255, 0, 128, 1)';
          this.ctx.fillText('You win!', 340, 60);
        }
    }

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


