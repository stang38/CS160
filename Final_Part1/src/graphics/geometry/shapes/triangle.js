
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader,x,y,size) {
      super(shader);

   //   this.vertices = this.generateTriangleVertices();
   //  this.faces = {0: [0, 1, 2]};
      this.rot = 0;
      this.time = 0;
      this.scalingMatrix = new Matrix4();
      this.translationMatrix = new Matrix4();
      this.x = x;
      this.y = y;
     // this.translationMatrix = new Matrix4();
     // this.translationMatrix.setTranslate(0,0.05,0);

         
      this.vertices = this.generateTriangleVertices(x,y,size);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(center_x,center_y,size) {
      var vertices = []
      var vertex1 = new Vertex(center_x, center_y+size/100, 0.0);
      var vertex2 = new Vertex( center_x-size/100, center_y-size/100, 0.0);
      var vertex3 = new Vertex( center_x+size/100, center_y-size/100, 0.0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      return vertices;
   }

   render() {
        
        this.scalingMatrix = new Matrix4();
        this.translationMatrix = new Matrix4();
        this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(0.02,0.03, 0);
        this.modelMatrix = this.translationMatrix.multiply(this.modelMatrix);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
       
   }
}

