
	/**
	*
	*	STOREMODEL|JS
	* 	-------------------
	*	DESC | Define 3d model store
	*	LOCATION | app > interface > components > storemodels > StoreModel.js
	*
	*/

	
	/*--------- IMPORTS ----------*/


	import $ from 'jquery';
	import _ from 'lodash';
	import MeshLoader from '@utils/MeshLoader';
	import LoaderManager from '@frameworks/LoaderManager';


	const MODELS = require('./models.json');
	const THREE  = require('three');

	/*---------- CLASS -----------*/




	class StoreModels {


		static instance;

		constructor() {



			if (StoreModels.instance) return StoreModels.instance;
			else StoreModels.instance = this

			console.log(MODELS);

			this.items  = [];
			this.toLoad = MODELS.models;
			this.length = this.toLoad.length;

			return this;
			
		}




		launch(callback) {

			if( typeof callback != 'function') return
			else if(this.length == 0) callback();


			this.callback = callback;
			this.manager  = new LoaderManager();
			this.manager.init(this.callback.bind(this));
			this.loader   = new MeshLoader(this.manager.instance);
			
			this.load();

		}



		load() {
			_.map(this.toLoad, (model,index) => {
				if(this.items[model.name]) return
				this.loader.load(model.name, model.type, this.loaded.bind(this))
			})
		}


		loaded(mesh) {
			this.items[mesh.name] = mesh;
		}


		getMaxVertices() {



		}


		getItems(name) {
			if(!this.items[name]) return;
			return this.items[name];
		}


	}




	export default StoreModels
	
