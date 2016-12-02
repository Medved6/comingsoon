		

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

			this.Ground = this.models.getItems('ground')
			this.ticker = new Ticker()

			const mesh = new THREE.Mesh(this.Ground.geom, new THREE.MeshNormalMaterial());
			
			this.world.scene.add(mesh)


			this.ticker.tick('test',()=>{
				mesh.rotation.y += 0.01
			})



		}




		loadAssets() {



		}







	}




	export default Ground;