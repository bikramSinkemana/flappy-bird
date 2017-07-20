class Obstacle{
	constructor(value,gap,bird){
		this.width=40;
		this.height=350;
		this.left=900;
		this.value=value;
		this.gap=gap;
		this.top;
		//this.flag=false;
		this.topForTop=-300;
		this.topForBottom=400-250;
		this.bird=bird;
		


	}
	create(){
		  this.element=document.createElement('div');
		  this.element.style.width=this.width;
		  this.element.style.height=this.height;
		  this.element.style.position='absolute';
		  this.element.style.background='yellow';
		  this.element.style.zIndex=15;
		  this.element.style.marginLeft=this.left;
		  if (this.value==0) {
		  	this.top=this.topForTop+this.gap
		  	this.element.style.background='url("images/top-obs.png")';
		  	this.element.style.marginTop=this.top;
		  }else{
		  	this.top=this.topForBottom+this.gap
		  	this.element.style.background='url("images/bottom-obs.png")';
		  	this.element.style.marginTop=this.top;

		  }

		


	}
	move(){
		this.element.style.marginLeft=this.left;
		this.left-=1;
	}
	collide(){
		if ((this.bird.left< this.left + this.width &&
        this.bird.left + this.bird.width > this.left &&
        this.bird.top < this.top + this.height &&
        this.bird.height + this.bird.top > this.top)||this.bird.top<=0||this.bird.height+this.bird.top>=401) {
			
			this.bird.flagGameOver=true;
		}
		if (this.bird.left== this.left + this.width) {
			this.bird.score=this.bird.score+.5;
						console.log(this.bird.score);
		}

	}

	 removeObstacle(parent){
    parent.element.removeChild(this.element);
    
    return true;
  }
 
}
export default Obstacle;