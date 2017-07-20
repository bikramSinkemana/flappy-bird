class Slider{
	constructor(){
	this.element;
	//this.intervalId;
	this.width=600000;
	this.height=720;
	this.color='blue';
	this.score=0;
	this.left=0;
	}

	create() {
		this.element=document.createElement('div');
		this.element.style.width=this.width;
		this.element.style.height=this.height;
		this.element.style.position='absolute';
		this.element.style.zIndex=5;
		this.element.style.marginLeft=this.left;
		this.element.style.background='url("images/background1.png")';
	    this.element.style.backgroundRepeat='repeat-x';
	
	}
	append(element){
		this.element.appendChild(element);
	}

	
	slide(){
		this.element.style.marginLeft=this.left;
	 this.left-=1;
	
  }
   removeSlider(element){
    //parent.element.removeChild(this.element);
    element.remove();
    
    return true;
  }
	// this.showScore=function(){
	// 	console.log(that.score);
	// }
	// this.stop=function(){
	// 	clearInterval(that.intervalId);
	// }
	// // body...

}
export default Slider;