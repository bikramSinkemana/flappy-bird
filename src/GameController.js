import Container from './Container';
import Slider from './Slider';
import Bird from './Bird'
import Obstacle from './Obstacle';
import GameOver from './GameOver';
import {randomNumberGenerator} from './utilities'
class GameController{
	constructor(){
		this.element=document.getElementById('game');

	}

	
	run(){
		let intervalId=0;
		let container;
		let slider;
		let bird;
		let gameOver;
		let obstacles=[];
	
	

		container=new Container();
		container.create();

		slider=new Slider();
		slider.create();

		bird=new Bird();
		bird.create();

		gameOver=new GameOver();
		gameOver.create();

			

		
		

		this.element.appendChild(container.element);

		container.append(slider.element);
		container.append(bird.element);
		container.append(gameOver.element);
		


		let update=setInterval(()=>{
			slider.slide();
			bird.move();
			bird.jump();
			 let scoreBoard = document.getElementById('score');
	 		 scoreBoard.innerHTML = Math.floor(bird.score);
	 		
			if (bird.v>0) {
			bird.v--;
		}
			
			
			// creating obstacles in certain time
			if (slider.left%300==0||slider.left==-30) {
				let position=randomNumberGenerator(10,200);
				for (let i = 0; i < 2; i++) {	
					let obstacle;	
				 	obstacle=new Obstacle(i,position,bird);
					obstacle.create();
					container.append(obstacle.element);
					obstacles.push(obstacle)
				}
			}
			
			for (let i = 0; i < obstacles.length; i++) {
				obstacles[i].move();
				obstacles[i].collide();
			}
			for (let i = 0; i < obstacles.length; i++) {
				if (obstacles[i].left==0) {
					let test = false;
					test = obstacles[i].removeObstacle(container);
					if(test){
						let index = obstacles.indexOf(obstacles[i]);
						obstacles.splice(index,1);
					}
				}
	   	}
	   	if(bird.flagGameOver){
	   		gameOver.showGameOver();
	   	
	   		
	   		clearInterval(update);
	   		
	   	}
	   	intervalId=setInterval(()=>{
		   	if(gameOver.restart==1){
		   		for (let i = 0; i < obstacles.length; i++) {
				
						let test = false;
						test = obstacles[i].removeObstacle(container);
						if(test){
							let index = obstacles.indexOf(obstacles[i]);
							obstacles.splice(index,1);
						}
					
		   		}
			   	obstacles=[];
			   	 clearInterval(intervalId);
			   	
			    //bird.removeBird(container);
			    bird.removeBird(bird.element);
			   	slider.removeSlider(slider.element);
			   	gameOver.restart=0;
			   	gameOver.removeGameOver(gameOver.element);
			  	this.element.removeChild(container.element);

			  // 	container.element.remove();
			  
			  	clearInterval(intervalId);
			 
			   	this.run();

					 
				}
			},1000/60);
		
		
		},1000/60);
		
	


	}
	 stop(clear){
  	clearInterval(clear);
  	debugger;
  }
	
}
export default GameController;