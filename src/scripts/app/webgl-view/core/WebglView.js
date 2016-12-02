		

	/**
	*
	*	INTERFACE|JS
	* 	-------------------
	*	DESC | Define WebGL main entry
	*	LOCATION | app > interface > scripts > core
	*
	*/



	/*--------- IMPORTS ----------*/

	import $ from 'jquery'
	import StoreModels from '@components/storemodels/StoreModels'


	import World from '@world/World'
	import Field from '@components/ground/Ground'
	



	/*--------- REQUIRES ----------*/

	const THREE = require('three');



	/*--------- CLASS ----------*/


	class WebglView {


		constructor() {

			console.log('%c init Interface','color: pink');


			this.init();

		}


		init() {


			this.storeModels = new StoreModels();
			this.storeModels.launch(this.create.bind(this));

		}



		create() {

			console.log("%c CALLBACK","font-size: 24px")

			this.world = new World();
			this.world.launch();
			this.field = new Field();

		}


	}



	export default WebglView;
	

