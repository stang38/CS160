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
      this.ctx = ctx;
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
        var x = ev.clientX;
        var y = ev.clientY;
        var rect = ev.target.getBoundingClientRect();
        var x_in_canvas = x - rect.left, y_in_canvas = rect.bottom - y;
        
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
   
}
