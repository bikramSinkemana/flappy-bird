class GameOver{
    constructor(){
        this.height=49;
        this.width=279;
        this.restart=0;
        this.checkKeyPressRestart=this.checkKeyPressRestart.bind(this);
    }
    create(){
        this.element=document.createElement('div');
        this.element.style.height=this.height;
        this.element.style.width=this.width;
        this.element.style.position='absolute';
        this.element.style.left=100;
        this.element.style.top=200;
        this.element.style.zIndex=0;
        this.element.style.background='url("images/start-img.png")';
    }
    showGameOver(){
        this.element.style.zIndex=20
        document.addEventListener('keydown',this.checkKeyPressRestart,false);   
    }
    removeGameOver(element){
   // parent.element.removeChild(this.element);
    element.remove();
    return true;
  }
    checkKeyPressRestart(key){      
            if(key.keyCode=="13"){      
                
                this.restart=1;
            }
        }
}
export default GameOver;