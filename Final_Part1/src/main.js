var shader = null;
var tshader = null;
var scene;
var ctx;
var ctxx;
var gl;
var hud;
var x=360;
var y=400;





function main() {
  // Retrieve the canvas from the HTML document
    canvas = document.getElementById("webgl");
    hud = document.getElementById("hud");
    realhud =  document.getElementById("realhud");
  // mouse = document.getElementById("mouse");
    // Retrieve WebGL rendering context
    gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
    if (!gl) {
      console.log("Failed to get WebGL rendering context.");
      return;
    }
    //add hud
    ctx = hud.getContext('2d');
   
    canvasDraw();
    ctxx = realhud.getContext('2d');
    ctxx.font = '18px "Times New Roman"';
    ctxx.fillStyle = 'rgba(255, 255, 0, 1)';
    ctxx.fillText('Click the Geometries as Many as You Can!', 320, 40);
    
    // c = mouse.getContext('2d');
    // c.beginPath();
    // c.arc(0, 0, 20, 0, degToRad(360), true);
    // c.fill();
    // Initialize the scene

    scene = new Scene(); 
    // Initialize shader
    shader = new Shader(gl, FINAL_VSHADER, FINAL_FSHADER);
    shader.addAttribute("a_Position");
    shader.addAttribute("a_Color"); 
    // Add uniforms
    var idMatrix = new Matrix4();
    shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
    var inputHandler = new InputHandler(canvas, scene,ctx,hud);
    //test
    // let shape = new Triangle(shader,0,0,40);
    // scene.addGeometry(shape);

    // let nice = new Triangle(shader,0,0.4,40);
    // scene.addGeometry(nice);

    //let good = new Cube(shader,0,-0.5,20);
    //scene.addGeometry(good);

    //let circle = new Circle(shader,0.5,0.5,20,20);
    //scene.addGeometry(circle);

    //initialize the game
    
    spawnGeometry();


    renderer = new Renderer(gl, scene, null,ctxx);
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


function degToRad(degrees) {
  var result = Math.PI / 180 * degrees;
  return result;
}
function canvasDraw() {
  ctx.clearRect(0,0,hud.width,hud.height);
  ctx.fillStyle = "#f12";
  ctx.beginPath();
  ctx.arc(x,y, 20, 0, degToRad(360), true);
  ctx.fill();
}

