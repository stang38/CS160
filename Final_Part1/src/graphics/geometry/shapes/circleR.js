/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Circle1 extends Geometry {
 /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader,x,y,red,green,blue,size,segments) {
      super(shader,x,y);

      this.vertices = this.generateTriangleVertices(x,y,red,green,blue,size,segments);
      this.faces = {0: [0, 1, 2]};
      this.rot = 0;

      var check = Math.random() * 0.05;

      this.translationMatrix_1 = new Matrix4();
      this.translationMatrix_1.setTranslate(0,3*check,0);

      this.translationMatrix_2 = new Matrix4();
      this.translationMatrix_2.setTranslate(0,-0.4*check,0);

      this.translationMatrix_3 = new Matrix4();
      this.translationMatrix_3.setTranslate(+3*check,+3*check,0);

      this.translationMatrix_4 = new Matrix4();
      this.translationMatrix_4.setTranslate(-3*check,+3*check,0);

      this.scalingMatrix = new Matrix4();
      this.scalingMatrix.setScale(1.25,1.25,1.25);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(x_p,y_p,red_p,green_p,blue_p,size_p,seg_p) {
      var vertices = []
      
      
      var number = seg_p;
      var radius = size_p/120;
      
      for(var i=0;i<number;i++){
        var vertex1 = new Vertex (x_p,y_p,0.0);
        var vertex2 = new Vertex (x_p +radius*Math.cos(i*2*Math.PI/number),y_p +radius*Math.sin(i*2*Math.PI/number),0.0);
        var vertex3 = new Vertex (x_p +radius*Math.cos((i+1)*2*Math.PI/number),y_p +radius*Math.sin((i+1)*2*Math.PI/number),0.0);
        vertex1.color = [255/255, 88/255, 34/255, 0.8];
        vertex2.color = [255/255, 88/255, 34/255, 0.8];
        vertex3.color = [255/255, 88/255, 34/255, 0.8];
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
      }
      return vertices;
   }

   render() {
    /*
    this.timer += 0.1;
    if(this.timer >= 0.1) {
      this.isIncreasing = !this.isIncreasing;
      this.timer = 0;
    }
    */

    // Translate to the origin
    //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_1);

    /*
    if(this.isIncreasing) {
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_1);
      //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_3);
    }
    else {
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_2);
      //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_4);
    }

    // Translate it bach to position
    //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_2);

    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements); 
    */

    
      for(var i=0;i<1;i++){
         var boolean = Math.random();
         if(boolean >= 0.5 && boolean <=0.75){
            this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_1);
         }
         else if (boolean >=0.75){
            //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_2);
         }
         else if (boolean >=0.25 && boolean <=0.5){
            this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_3);
         }
         else{
            this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_4);
         }  
         this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
      }
    
      //this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix_2);
       // this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);

      
   }
}