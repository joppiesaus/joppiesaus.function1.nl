freq("lib/three/67",function(){

var Particles = 50000;
var camera, scene, renderer, particleSystem;

function init()
{
	var container = document.getElementById( "drawCanvas" );
	
	camera = new THREE.PerspectiveCamera (
		27, window.innerWidth / window.innerHeight, 5, 3500
	);
	camera.position.z = 2750;
	
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );
	
	
	var geometry = new THREE.BufferGeometry();
	
	var particles3 = Particles * 3;
	
	geometry.addAttribute( "position", new Float32Array( particles3 ), 3 );
	geometry.addAttribute( "color", new Float32Array( particles3 ), 3 );
	
	var positions = geometry.getAttribute( "position" ).array;
	var colors = geometry.getAttribute( "color" ).array;
	
	var color = new THREE.Color();
	
	var n = 10000, n2 = n / 2; // particles spread in the cube, "size" of the cube
	
	for ( var i = 0; i < particles3; i += 3)
	{
		var x = Math.random() * n - n2;
		var y = Math.random() * n - n2;
		var z = Math.random() * n - n2;
	
		positions[ i ] 		= x;
		positions[ i + 1 ]	= y;
		positions[ i + 2 ]	= z;
		
		var vx = ( x / n ) + 0.5;
		var vy = ( y / n ) + 0.5;
		var vz = ( z / n ) + 0.5;
		
		color.setRGB( vx, vy, vz );
		
		colors[ i ]			= color.r;
		colors[ i + 1 ]		= color.g;
		colors[ i + 2 ]		= color.b;
	}
	
	geometry.computeBoundingSphere();
	
	var material = new THREE.ParticleSystemMaterial( { size: 15, vertexColors: true } );
	
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
	var time = Date.now() * 0.001;
	
	particleSystem.rotation.x = time * 0.25;
	particleSystem.rotation.y = time * 0.5;
	
	renderer.render( scene, camera );
}

init();
animate();
});