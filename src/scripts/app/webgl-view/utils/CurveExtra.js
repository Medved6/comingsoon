		

	/**
	*
	*	CURVE-EXTRA|JS
	* 	-------------------
	*	DESC | Define extra three js curves function
	*	LOCATION | src > scripts > app > webgl-view > utils
	*
	*/

	
	/*--------- REQUIRE ----------*/

	const THREE = require('three');


	/*---------- CLASS -----------*/

	




	// Declare
	THREE.Curves = {};


	THREE.Curves.GrannyKnot = THREE.Curve.create( function() {},

		 function( t ) {

			t = 2 * Math.PI * t;

			var x = - 0.22 * Math.cos( t ) - 1.28 * Math.sin( t ) - 0.44 * Math.cos( 3 * t ) - 0.78 * Math.sin( 3 * t );
			var y = - 0.1 * Math.cos( 2 * t ) - 0.27 * Math.sin( 2 * t ) + 0.38 * Math.cos( 4 * t ) + 0.46 * Math.sin( 4 * t );
			var z = 0.7 * Math.cos( 3 * t ) - 0.4 * Math.sin( 3 * t );
			return new THREE.Vector3( x, y + .4 , z ).multiplyScalar( 20 );

		}
	);

	// Export
	export default THREE.Curves