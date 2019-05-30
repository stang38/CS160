var shader = null;
var tshader = null;
var scene;
var ctx;
var gl;

function main() {
  // Retrieve the canvas from the HTML document
    canvas = document.getElementById("webgl");
     hud = document.getElementById("hud");
    // Retrieve WebGL rendering context
    gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
    if (!gl) {
      console.log("Failed to get WebGL rendering context.");
      return;
    }
    //add hud
    ctx = hud.getContext('2d');
    ctx.font = '18px "Times New Roman"';
    ctx.fillStyle = 'rgba(255, 255, 0, 1)';
    ctx.fillText('Click the Geometry!', 320, 40);
    // Initialize the scene
    scene = new Scene(); 
    // Initialize shader
    shader = new Shader(gl, FINAL_VSHADER, FINAL_FSHADER);
    shader.addAttribute("a_Position");
    shader.addAttribute("a_Color"); 
    // Add uniforms
    var idMatrix = new Matrix4();
    shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
    var inputHandler = new InputHandler(canvas, scene,ctx);
  //  test
    let shape = new Cube(shader,0,0.5,40);
    scene.addGeometry(shape);

    // let nice = new Triangle(shader,0,0.4,40);
    // scene.addGeometry(nice);
    //initialize the game
    // spawnGeometry();


    renderer = new Renderer(gl, scene, null);
    renderer.start();
}

function spawnGeometry(){
    //spawn geometry
    setInterval(function(){let shape = new Triangle(shader,Math.random()*(-0.8), -0.8,20);
                           scene.addGeometry(shape);},2000);
    setInterval(function(){let shape = new Cube(shader,Math.random()*(0.8), -0.8,20);
                             scene.addGeometry(shape);},3000);
    setInterval(function(){let shape = new Circle(shader,Math.random()*(0.8), 0.8,20,20);
                             scene.addGeometry(shape);},5000);
    //clear at certain time to avoid lagging
    setInterval(function(){scene.clearGeometries();},21000);

}
