freq("lib/three/71",function(){

// Inspired by & based on: http://threejs.org/examples/webgl_lod.html

var camera, scene, renderer;
var light, clock = new THREE.Clock();
var lightUpdateDelta, lightUpdateRequired;

var LightColors = 
[
	0xff2200,
	0x00ffff,
	0xffff00,
	0xff00ff,
	0x0000ff
];

function init()
{
	var container = document.getElementById( "drawCanvas" );
	
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 15000 );
	
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x000000, 1, 15000 );
	scene.autoUpdate = false;
	
	newLight();
	scene.add( light );
	
	var uniformLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
	uniformLight.position.set( 0, 0, 1 ).normalize();
	scene.add( uniformLight );
	
	
	var material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: true } );

	var geometries =
	[
		[
			new THREE.IcosahedronGeometry( 100, 4 ),
			new THREE.IcosahedronGeometry( 100, 3 ),
			new THREE.IcosahedronGeometry( 100, 2 ),
			new THREE.IcosahedronGeometry( 100, 1 ),
			new THREE.IcosahedronGeometry( 100, 0 ),
		],
		
		[
			new THREE.TorusKnotGeometry( 90, 40, 64, 16 ),
			new THREE.TorusKnotGeometry( 90, 40, 48, 16 ),
			new THREE.TorusKnotGeometry( 90, 30, 32, 16 ),
			new THREE.TorusKnotGeometry( 90, 30, 32, 8  ),
			new THREE.TorusKnotGeometry( 90, 20, 16, 8  )
		],
	];
	
	var levels = 
	[
		50,
		300, 
		1000,
		2000,
		10000
	];
	
	// Make 1000 SuperComplexNameGeometries
	for ( var j = 0; j < 750; j++ )
	{
		var lod = new THREE.LOD();
		
		var geometry = geometries[Math.floor(Math.random() * 10) === 0 ? 1 : 0];
		for ( var i = 0; i < geometry.length; i++)
		{
			var mesh = new THREE.Mesh( geometry[i], material );
			
			// randomize vertices
			/*for ( var k = 0; k < 10; k++ )
			{
				var index = Math.floor( Math.random() * mesh.geometry.vertices.length );
				mesh.geometry.vertices[index].x += 5 * ( 0.5 - Math.random() );
				mesh.geometry.vertices[index].y += 5 * ( 0.5 - Math.random() );
				mesh.geometry.vertices[index].z += 5 * ( 0.5 - Math.random() );
			}*/
			
			mesh.scale.set( 1.5, 1.5, 1.5 );
			mesh.updateMatrix();
			//mesh.geometry.verticesNeedUpdate = false;
			mesh.matrixAutoUpdate = false;
			lod.addLevel( mesh, levels[i] );
		}
		
		lod.position.x = 10000 * ( 0.5 - Math.random() );
		lod.position.y =  7500 * ( 0.5 - Math.random() );
		lod.position.z = 10000 * ( 0.5 - Math.random() );
		lod.updateMatrix();
		lod.matrixAutoUpdate = false;
		scene.add( lod );
	}
	
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	container.appendChild( renderer.domElement );
	
	window.addEventListener( "resize", onWindowResize, false );
	
	clock.start();
}

function newLight()
{
	scene.remove( light );
	light = new THREE.PointLight( LightColors[Math.floor( Math.random() * LightColors.length )] );
	light.position.set( 0, 0, 0 );
	scene.add( light );
	lightUpdateDelta = 0.0;
	lightUpdateRequired = Math.random() * 4 + 2;
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
	
	var delta = clock.getDelta();
	
	camera.position.z += 100 * delta;
	
	
	if ((lightUpdateDelta += delta) >= lightUpdateRequired)
	{
		newLight();
	}
	
	render();
}

function render()
{
	scene.updateMatrixWorld();
	scene.traverse( function ( object ) {
		
		if ( object instanceof THREE.LOD )
		{
			object.update( camera );
		}
		
	} );
	renderer.render( scene, camera );
}

init();
animate();
});