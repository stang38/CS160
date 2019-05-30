var _inputHandler = null;
var shape = 2;
var mousedown = false; 
var r=0;
var g=1;
var b=0;


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
    constructor(canvas, scene,ctx) {
      this.canvas = canvas;
      this.scene = scene;
      this.nmbs = ctx;
      _inputHandler = this;
      // // Mouse Events
      this.canvas.onmousedown = function(ev) { 
        _inputHandler.click(ev);
        mousedown = true; 
      };
      this.canvas.onmouseup = function(ev){
        mousedown = false;
      };

    }
    /**
     * Function called upon mouse click.
     */
    click(ev) {
        var x_o = ev.clientX;
        var y_o = ev.clientY;
        var rect = ev.target.getBoundingClientRect();
        var x = ((x_o - rect.left) - canvas.width/2) / (canvas.width/2);
        var y = (canvas.height/2 - (y_o - rect.top)) / (canvas.height/2);
        let pixels = new Uint8Array(4);
        gl.readPixels(x_o+20,y_o-20,1,1, gl.RGBA,gl.UNSIGNED_BYTE,pixels);
        console.log(pixels);
        let rVal = pixels[0];
        let gVal = pixels[1];
        let bVal = pixels[2];
        let alpha = pixels[3];
        if (alpha!=255){
          this.scene.clearGeometries();
        }
    }
   
}
