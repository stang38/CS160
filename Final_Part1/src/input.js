var _inputHandler = null;
var shape = 2;
var mousedown = false; 
var r=0;
var g=1;
var b=0;
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

      this.canvas.onmousemove = function(ev){
        if (mousedown){
          _inputHandler.click(ev);
        }
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

        var x2 = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
        var y2 = (canvas.height/2 - (y - rect.top))/(canvas.height/2);
        
        // for (var i =0; i<=100; i++) {
        //     for (var j=0; j<=4;j++){
        //     var shape = new Circle1(shader,x,y,1,2,3,1,10);
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
          
          //this.ctx.clearRect(0, 0, 800, 80);
          time = Math.floor(currentAngle);
          this.ctx.fillText("time: ", 340, 60);
          this.ctx.fillText(time, 400, 60);

          for (var i =0; i<=50; i++) {
            for (var j=0; j<=4;j++){
            var shape = new Circle1(shader,x2,y2,1,2,3,20,10);
            this.scene.addGeometry(shape);
            var shape2 = new Circle2(shader,x2,y2,1,2,3,1,10);
            this.scene.addGeometry(shape2);
            //m = m + 0.05 ;
            } 
        }
          console.log("time: ",time);
        }
    }
   
}
