class Bird{
	constructor(){
		this.element;
		this.height=24;
		this.width=34;
		this.top=125;
		this.flag=false;
		this.moveY=false;
		this.checkKeyDown = this.checkKeyDown.bind(this);
		//this.gravity=9.8;
		this.flagGameOver=false;
		this.left=250;
		this.g=7;
		this.t=1.2;
		this.v=0;
		this.score=0;
		
	}
	create(){
		this.element=document.createElement('div');
		this.element.style.height=this.height;
		this.element.style.width=this.width;
		this.element.style.background='grey';
		this.element.style.position='absolute';
		this.element.style.zIndex=10;
		this.element.style.top=this.top;
		this.element.style.background='url("images/bird.png")'
		this.element.style.left=this.left;
	}
	move(){
		// this.element.style.top=this.top;
		// if (!this.moveY) {
		// this.top+=1;}else{
		// 	while(this.t!=0){
		// 	this.top-=(1*6*this.t-1/2*this.t*this.t);
		// 	this.element.style.top=this.top;
		// 	this.t--;
		// 	debugger;
		// }
		// this.moveY=false;
		this.element.style.top=this.top;
		this.top-=(this.v*this.t-1/2*this.g*this.t*this.t);


		}

	
	jump(){
		
		document.addEventListener('keydown',this.checkKeyDown,false);
		
		if (this.moveY) {
			this.element.style.top=this.top;
			//this.top-=(1-1/2);
		}

	}
	 removeBird(element){
  //  parent.element.removeChild(this.element);
    	element.remove();
    
    return true;
  }
	 checkKeyDown(key){
			if (this.flag==false) {
			  if(key.keyCode=='32'){
			  	
				this.moveY=true;
				this.v=13;
			}
		}
	}

}
export default Bird;