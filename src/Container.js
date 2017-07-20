class Container {
 
  constructor() {
  	this.element;
  	this.width=1280;
  	this.height=720;

  	

  }


  create() {
   this.element=document.createElement('div');
  	this.element.style.width=this.width;
  	this.element.style.height=this.height;
  	this.element.style.background='green';
  	this.element.style.position='relative';
  	this.element.style.overflow='hidden';
  }
  append(element){
  	this.element.appendChild(element);
  }
}

export default Container;