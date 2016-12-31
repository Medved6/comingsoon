		

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
	import Ground from '@components/ground/Ground'
	import BallCore from '@components/balls/BallCore'
	import Soon from '@components/texts/Soon'
	



	/*--------- REQUIRES ----------*/

	const THREE = require('three');



	/*--------- CLASS ----------*/


	class WebglView {


		constructor() {

			console.log('%c init Interface','color: pink; font-size: 16px; background-color: brown;');

			this.init();

		}


		init() {


			this.storeModels = new StoreModels();
			this.storeModels.launch(this.create.bind(this));

			//this.create();

		}



		create() {

			// Init World
			this.world = new World();
			this.world.launch();

			// Init text soon
			this.soon = new Soon();

			// Init ball light
			this.ballCore = new BallCore();
			this.ballCore.launchAnim();
			
		}


	}



	export default WebglView;
	

