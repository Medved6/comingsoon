		

	/**
	*
	*	GROUND|JS
	* 	-------------------
	*	DESC | Define Ground manager
	*	LOCATION | app > interface > scripts > components > Ground > Ground.js
	*
	*/

	
	/*--------- IMPORTS ----------*/

	import StoreModels from '@components/storemodels/StoreModels'
	import World from '@world/World'
	import Ticker from '@frameworks/Ticker'




	/*--------- REQUIRES ----------*/

	const THREE = require('three');




	/*---------- CLASS -----------*/

	
	class Ground {


		constructor() {


			this.models = new StoreModels();
			this.world = new World();


			this.init()

		}




		init() {

	
			this.ground = this.models.getItems('ground')
			
			if(this.ground == undefined) return;

			this.ticker = new Ticker()

			const mesh = new THREE.Mesh(this.ground.geom, new THREE.MeshNormalMaterial());
			this.world.scene.add(mesh)


		}




		loadAssets() {



		}







	}




	export default Ground;