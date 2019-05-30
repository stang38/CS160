class Cube extends Geometry{
	constructor(shader,x,y,size,image){
		super(shader);
		this.vertices = this.generateCubeVertices(x,y,size);
		this.faces = {0: this.vertices};
      	this.x = x;
      	this.y = y;
        this.image = null;
        if(image != null){
              this.image = image;
        }    
      	this.interleaveVertices();
	}
	
    generateCubeVertices(x,y,size) {
        var vertices = [];
     
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*size)));

        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*(-size))));

        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*(-size))));

        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*(-size))));

        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x-(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x-(1/100*size), y+(1/100*size), (1/100*(-size))));

        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*size)));
        vertices.push(new Vertex(x+(1/100*size), y-(1/100*size), (1/100*(-size))));
        vertices.push(new Vertex(x+(1/100*size), y+(1/100*size), (1/100*(-size))));

        vertices[0].uv = [0,0];
        vertices[1].uv = [1,0.5];
        vertices[2].uv = [0,0.5];
        vertices[3].uv = [0,0];
        vertices[4].uv = [1,0];
        vertices[5].uv = [1,0.5];

        vertices[6].uv = [0,0];
        vertices[7].uv = [1,1];
        vertices[8].uv = [0,1];
        vertices[9].uv = [0,0];
        vertices[10].uv = [1,0];
        vertices[11].uv = [1,1];

        vertices[12].uv = [0,0];
        vertices[13].uv = [2,1];
        vertices[14].uv = [0,1];
        vertices[15].uv = [0,0];
        vertices[16].uv = [2,0];
        vertices[17].uv = [2,1];

        vertices[18].uv = [0,0];
        vertices[19].uv = [1,1];
        vertices[20].uv = [0,1];
        vertices[21].uv = [0,0];
        vertices[22].uv = [1,0];
        vertices[23].uv = [1,1];

        vertices[24].uv = [0,0];
        vertices[25].uv = [3,3];
        vertices[26].uv = [0,3];
        vertices[27].uv = [0,0];
        vertices[28].uv = [3,0];
        vertices[29].uv = [3,3];

        vertices[30].uv = [0,0.5];
        vertices[31].uv = [1,1];
        vertices[32].uv = [0,1];
        vertices[33].uv = [0,0.5];
        vertices[34].uv = [1,0.5];
        vertices[35].uv = [1,1];
        
        return vertices;
    }

    render(){
        this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(-0.04,0.03, 0);
        this.modelMatrix = this.translationMatrix.multiply(this.modelMatrix);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements); 
  }


}