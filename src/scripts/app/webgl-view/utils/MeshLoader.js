		

	/**
	*
	*	MESHLOADER|JS
	* 	-------------------
	*	DESC | Util for manage external 3D assets
	*	LOCATION | app > interface > utils
	*
	*/

	
	/*--------- IMPORTS ----------*/


	const THREE = require('three')
	import World from '@world/world'


	/*---------- CLASS -----------*/

	
	class MeshLoader {


		static instance

		constructor(manager) {

			if(MeshLoader.instance) return MeshLoader.instance
			else MeshLoader.instance = this

			this.manager = manager;

			this.loader = {
				object : new THREE.JSONLoader(this.manager),
				scene  : new THREE.ObjectLoader(this.manager)
			}

			return this

		}




		load(name,type,func) {

			this.loader[type].load('./src/scripts/app/webgl-view/utils/field.json', (geometry, materials) => {

				const mesh = {
					name : name,
					geom : geometry,
					materials : materials						
				}

				func(mesh);

			});

		}


	}



	export default MeshLoader