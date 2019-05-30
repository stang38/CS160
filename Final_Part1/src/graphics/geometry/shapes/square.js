class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Square created
   */
  constructor(shader,x,y,size) {
      super(shader);
      this.vertices = this.generateSquareVertices(x,y,size);
      this.faces = {0: this.vertices};
      this.x = x;
      this.y = y;

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }
  // combine two triangles to form a square
  generateSquareVertices(center_x,center_y,size) {
      var vertices = [];
      var vertex1 = new Vertex(center_x-size/100, center_y+size/100, 0.0);
      var vertex2 = new Vertex( center_x-size/100, center_y-size/100, 0.0);
      var vertex3 = new Vertex( center_x+size/100, center_y-size/100, 0.0);   
      var vertex4 = new Vertex(center_x+size/100, center_y-size/100, 0.0);
      var vertex5 = new Vertex( center_x+size/100, center_y+size/100, 0.0);
      var vertex6 = new Vertex( center_x-size/100, center_y+size/100, 0.0);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
      return vertices;
  }

  render(){
    //  this.scalingMatrix = new Matrix4();
        this.translationMatrix = new Matrix4();
    //    this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(0.05,0.05, 0);
        this.modelMatrix = this.translationMatrix.multiply(this.modelMatrix);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements); 
  }
}
