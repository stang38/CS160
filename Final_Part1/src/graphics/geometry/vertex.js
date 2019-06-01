/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
  	this.point  = new Vector3([x, y, z]);
    this.color  = [Math.random(),Math.random(),Math.random(),0.5];
  }
}