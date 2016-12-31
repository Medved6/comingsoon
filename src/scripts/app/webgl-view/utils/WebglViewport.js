		

	/**
	*
	*	WEBGLVIEWPORT|JS
	* 	-------------------
	*	DESC | Define utils webglViewport
	*	LOCATION | path
	*
	*/

	
	/*--------- IMPORTS ----------*/




	/*---------- CLASS -----------*/

	
	class WebglViewport {


		static instance

		constructor() {


			if(WebglViewport.instance) return WebglViewport.isntance
			else WebglViewport.instance = this

			this.mouse = {x:0,y:0}

			this.bind();


			return this;

		}


		bind() {

			window.addEventListener('mousemove', this.mousemove.bind(this));

		}


		mousemove(e) {

			this.mouse.x = e.clientX - window.innerWidth/2;
			this.mouse.y = e.clientY - window.innerHeight/2;

		}




	}

	export default WebglViewport
