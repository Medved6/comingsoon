		

	/**
	*
	*	BALL-CORE|JS
	* 	-------------------
	*	DESC | Define the bll core class
	*	LOCATION | src > scripts > app > webgl-view > components > ball
	*
	*/

	
	/*--------- IMPORTS ----------*/

	import World from '@world/World'
	import { SpriteText2D, textAlign } from 'three-text2d'
	import TweenMax from 'gsap'
	import Ticker from '@frameworks/Ticker'
 	import $ from 'jquery'
 	import Curves from '@utils/CurveExtra'



	const THREE = require('three');
	

	/*---------- CLASS -----------*/

	

	class BallCore{

		constructor(){

			this.world = new World()
			this.ticker = new Ticker()

			this.createGeom()

		}




		createGeom(){


			let ballGeom = new THREE.SphereGeometry(3,32,32,)
			let ballMat  = new THREE.MeshPhongMaterial( {
				emissive: 0xffffff,
				emissiveIntensity: 0,
				color: 0xffffff,
			});


			this.mesh = new THREE.PointLight( 0xffffff, 0, 100, 2 );
			this.mesh.add( new THREE.Mesh( ballGeom,ballMat ) );
			this.mesh.position.set(0,40,20);
			this.world.scene.add(this.mesh);

		}


		turnOn() {

			TweenMax.to(this.mesh.children[0].material,3,{
				emissiveIntensity : 1,
				delay : .6,
				ease: Bounce.easeIn
			})
			TweenMax.to(this.mesh,3,{
				intensity : 3,
				delay : .6,
				ease: Bounce.easeIn,
				oncomplete : ()=>{
					$('.links-nav').addClass('ready');
				}
			})
		}


		launchAnim() {

			this.createPath();
		  this.ticker.tick('soonspline',this.loop.bind(this));
		  this.turnOn();

		}




		createPath() {
			this.spline = new Curves.GrannyKnot()
		}





		loop() {

			let time = Date.now();
			let looptime = 20 * 1000;
			let t = ( time % looptime ) / looptime;
			let pos = this.spline.getPointAt(t);

			pos.multiplyScalar(1.5);
			this.mesh.position.copy(pos);
	
		}


	}



	export default BallCore
