class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Circle} Circle created
   */
  constructor(shader,x,y,size,segment) {
      super(shader);
      this.vertices = this.generateCircleVertices(x,y,size,segment);
      this.faces = {0: this.vertices};
      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.time = 0;
      this.interleaveVertices();
  }
  // combine two triangles to form a circle
  generateCircleVertices(center_x,center_y,size,segment) {
      var vertices = [];
       var vertex1 = new Vertex (center_x, center_y, 0.0);
      for (var i = 0; i < segment; i++){
          var vertex2 = new Vertex (center_x +size/100*Math.cos(i*2*Math.PI/segment),center_y +size/100*Math.sin(i*2*Math.PI/segment),0.0);
          var vertex3 = new Vertex (center_x +size/100*Math.cos((i+1)*2*Math.PI/segment),center_y +size/100*Math.sin((i+1)*2*Math.PI/segment),0.0);
          vertices.push(vertex1);
          vertices.push(vertex2);
          vertices.push(vertex3);
      }
      return vertices;
  }
  render(){
    
        this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(-Math.random()*0.04,-0.03, 0);
        this.modelMatrix = this.translationMatrix.multiply(this.modelMatrix);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);

  }
}
        

