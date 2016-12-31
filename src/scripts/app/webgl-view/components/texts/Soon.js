		

	/**
	*
	*	SOON|JS
	* 	-------------------
	*	DESC | Define text soon class
	*	LOCATION | src > scrips > app > webgl-view > components > texts > Soon.js
	*
	*/

	
	/*--------- IMPORTS ----------*/

	import World from '@world/World'
	import WebglViewport from '@utils/WebglViewport'
	import Ticker from '@frameworks/Ticker'
 


	const THREE  = require('three');




	/*---------- CLASS -----------*/

	
	class Soon {

		constructor() {

			this.world = new World();
			this.viewport = new WebglViewport();
			this.ticker = new Ticker();

			this.init()

		}



		init() {

			

			var img = new THREE.MeshPhongMaterial({ 
				transparent: true, 
				opacity: 1, 
				color: 0xFFFFFF,
				side: THREE.DoubleSide,
	    });


			var textureLoader = new THREE.TextureLoader();
				textureLoader.load( './dist/assets/images/soon_1.png',( map ) =>{
					img.map = map;
					img.needsUpdate = true;

					var plane = new THREE.PlaneGeometry(70,17);
					this.mesh = new THREE.Mesh(plane,img);


					this.mesh.position.set(-.6,11,0);

					this.world.scene.add(this.mesh);
					this.ticker.tick('soon',this.update.bind(this));
					
				});
		}



		update() {

			// this.mesh.rotation.y += 0.01;


		}


	}



	export default Soon
