freq("/lib/three/67",function(){

var Particles = 5000;
var camera, scene, renderer, particleSystem;

function init()
{
	var container = document.getElementById( "drawCanvas" );
	
	camera = new THREE.PerspectiveCamera (
		27, window.innerWidth / window.innerHeight, 5, 3500
	);
	camera.position.z = 2500;
	
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );
	
	
	var geometry = new THREE.BufferGeometry();
	
	var particles3 = Particles * 3;
	
	geometry.addAttribute( "position", new Float32Array( particles3 ), 3 );
	geometry.addAttribute( "color", new Float32Array( particles3 ), 3 );
	
	var positions = geometry.getAttribute( "position" ).array;
	var colors = geometry.getAttribute( "color" ).array;
	
	var color = new THREE.Color();
	
	var Radius = 500;
	var Diffusion = Radius / 5;
	
	// this function returns a random number between -1 and 1
	var rnd = function()
	{
		return Math.random() * 2 - 1;
	}
	
	for ( var i = 0; i < particles3; i += 3)
	{
		var angle = rnd() * Math.PI;
		
		var x = Math.cos(angle) * Radius + rnd() * Diffusion;
		var y = Math.sin(angle) * Radius + rnd() * Diffusion;
		var z = rnd() * Diffusion;
		
		
		positions[ i ]		= x;
		positions[ i + 1 ]	= y;
		positions[ i + 2 ]  = z;
		
		color.setRGB( x, y, z );
		
		colors[ i ]			= color.r;
		colors[ i + 1 ]		= color.g;
		colors[ i + 2 ]		= color.b;
	}
	
	geometry.computeBoundingSphere();
	
	var material = new THREE.ParticleSystemMaterial( { size: 11, vertexColors: true } );
	
	particleSystem = new THREE.ParticleSystem( geometry, material );
	scene.add( particleSystem );
	
	renderer = new THREE.WebGLRenderer( { antialias: false } );
	renderer.setClearColor( scene.fog.color, 1 );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	container.appendChild( renderer.domElement );
	
	window.addEventListener( "resize", onWindowResize, false );
}

function onWindowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate()
{
	requestAnimationFrame( animate );
	
	render();
}

function render()
{
	var time = Date.now() * 0.0003;
	
	particleSystem.rotation.x = time * 0.25;
	particleSystem.rotation.y = time * 0.4;
	particleSystem.rotation.z = time * 0.5;
	
	renderer.render( scene, camera );
}

init();
animate();
});