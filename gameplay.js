function drawCircle(){

}

function drawCross(){
    
}

//  zdefiniowanie dwóch graczy 

class Player{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}
var p1 = new Player();
var p2 = new Player();

window.onload = function askAboutName(){
    let person = prompt("Please enter first plyer name");
    let person2 = prompt("Please enter second player name");
    p1.name = person;
    p1.id =1;
    p2.name = person2;
    p2.id = 2;
}






function colorChanger(el){
    
    el.classList.add('cross')

}