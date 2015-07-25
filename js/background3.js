/* I took great inspiration from dataworld(http://mrdoob.com/files/temp/xplsv_dataworld/index.html) for this one*/

freq("/lib/three/71",function(){

var FIELD_WIDTH = 800;

var E_CHANNELS_ARR = [];

var camera, scene, renderer;

var light;
var group;

var clock = new THREE.Clock();

function init()
{	
	var container = document.getElementById( "drawCanvas" );
	
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( FIELD_WIDTH / 2, FIELD_WIDTH / 2, FIELD_WIDTH + 10);
	camera.rotation.set( 0, 0, 0 );
	
	// Create colors!
	for ( var x = 0; x < 2; x++ )
	{
		for ( var y = 0; y < 2; y++ )
		{
			for ( var z = 0; z < 2; z++ )
			{
				E_CHANNELS_ARR.push( [ !!x, !!y, !!z ] );
			}
		}
	}
	
	E_CHANNELS_ARR.shift(); // Remove black color
	
	scene = new THREE.Scene();
	
	var GEOMETRIES = [
		new THREE.IcosahedronGeometry( 20, 0 ),
		new THREE.OctahedronGeometry( 20, 0 ),
		new THREE.TetrahedronGeometry( 20, 0 ),
	];
	
	
	// Creates a nice mesh
	var createMesh = function()
	{
		// Pick random geometry
		var geometry = GEOMETRIES[ Math.floor( Math.random() * GEOMETRIES.length ) ];
		
		var material = new THREE.MeshLambertMaterial( {
			color: new THREE.Color( Math.random(), Math.random(), Math.random() ), // random colloorrr
			blending: THREE.AdditiveBlending,
			depthTest: false,
			shading: THREE.FlatShading, // no smoothness, harshness!
			transparent: true, // look-trough
		} );
		
		var mesh = new THREE.Mesh( geometry, material );
		
		var wireframe = mesh.clone();
		wireframe.material = mesh.material.clone();
		wireframe.material.wireframe = true;
		wireframe.scale.set( 1.1, 1.1, 1.1 );
		mesh.add( wireframe );
		
		return mesh;		
	};
	
	light = new THREE.PointLight( 0x404040, 3, 1400 );
	scene.add( light );
	
	light.color.setHex( Math.random() * 0xffffff );
	light.position.x = Math.random() * FIELD_WIDTH - FIELD_WIDTH / 2;
	light.position.y = Math.random() * FIELD_WIDTH - FIELD_WIDTH / 2;
	light.position.z = Math.random() * FIELD_WIDTH - FIELD_WIDTH / 2;
	
	group = new THREE.Group();
	scene.add( group );
	
	for ( var x = 0; x < 5; x++ )
	{
		for ( var y = 0; y < 5; y++ )
		{
			for ( var z = 0; z < 6; z++ )
			{
				var mesh = createMesh();
				
				randomChannels( mesh );
				
				// position
				mesh.position.x = x * 200;
				mesh.position.y = y * 200;
				mesh.position.z = z * 200;
				
				// rotation
				mesh.rotation.x = Math.random() * Math.PI;
				mesh.rotation.y = Math.random() * Math.PI;
				mesh.rotation.z = Math.random() * Math.PI;
				
				// size
				mesh.scale.multiplyScalar( Math.random() * Math.random() * 4 + 0.25 );
				
				group.add( mesh );
			}
		}
	}
	
	renderPreserveDrawingBufferTargetTime = 10 + Math.random() * 50;
	
	renderer = new THREE.WebGLRenderer( { 
		preserveDrawingBuffer: true/*don't forget about what happened*/, 
		antialias: false /*turn it on and it's even more impressive, but it costs more computing power */
	} );
	renderer.autoClear = false;
	renderer.setClearColor( 0x000010 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	container.appendChild( renderer.domElement );
	
	window.addEventListener( "resize", onWindowResize, false );
	
	clock.start();
}

function applyChannels( e, s )
{
	e.children[ 0 ].material.emissive.r = e.eChannels[0] === true ? s : 0;
	e.children[ 0 ].material.emissive.g = e.eChannels[1] === true ? s : 0;
	e.children[ 0 ].material.emissive.b = e.eChannels[2] === true ? s : 0;
}

function randomChannels( e )
{
	e.eChannels = E_CHANNELS_ARR[ Math.floor( Math.random() * E_CHANNELS_ARR.length ) ];
}

function onWindowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var prevLightChange = 0, renderPreserveDrawingBufferTargetTime = 0, renderPreserveDrawingBufferTime = 0;

function animate()
{
	requestAnimationFrame( animate );
	
	var delta = clock.getDelta();

	
	var emissive = Math.pow( prevLightChange, 2.6 ) * 0.3;
	
	group.children.forEach( function ( e ) {
		
		e.rotation.x += 0.5 * delta;
		e.rotation.y += 0.3 * delta;
		e.rotation.z += 0.4 * delta;
		
		e.position.z += 100 * delta;
		if ( e.position.z > FIELD_WIDTH )
		{
			e.position.z = 0;
		}
		
		applyChannels( e, emissive );
		//e.children[ 0 ].material.emissive[ e.choosenColor ] = emissive;
		//e.children[ 0 ].scale.set( scale, scale, scale );
		
	} );
	
	if ( ( prevLightChange += delta ) > 1 )
	{
		prevLightChange -= 1;
		light.color.setHex( Math.random() * 0xffffff );
		light.position.x = Math.random() * FIELD_WIDTH - FIELD_WIDTH / 2;
		light.position.y = Math.random() * FIELD_WIDTH - FIELD_WIDTH / 2;
		light.position.z = Math.random() * FIELD_WIDTH - FIELD_WIDTH / 2;
		
		group.children.forEach( function ( e ) {
			randomChannels( e );
		} );
	}
	
	renderPreserveDrawingBufferTargetTime -= delta;
	if ( renderPreserveDrawingBufferTargetTime <= 0 )
	{
		renderPreserveDrawingBufferTargetTime = 10 + Math.random() * 50;
		renderPreserveDrawingBufferTime = 0.6 + Math.random();
	}
	
	renderPreserveDrawingBufferTime -= delta;
	
	render();
}

function render()
{
	if ( renderPreserveDrawingBufferTime <= 0 )
	{
		renderer.clear();
	}
	
	renderer.render( scene, camera );
}

init();
animate();
});