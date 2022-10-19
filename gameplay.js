 

class Player{
    constructor(wins,isRunning,typeOfPlayer){
        this.wins = wins;
        this.isRunning = isRunning;
        this.typeOfPlayer = typeOfPlayer;
    }


    selectPosition(x,y) {
    if(this.typeOfPlayer=='cross'){
        game[x][y] = 'x';
    
    }if(this.typeOfPlayer=='circle'){
        game[x][y] = 'o';
    }
  
   }

   


}

var p1 = new Player();
p1.typeOfPlayer='cross';
p1.wins = 0;
var p2 = new Player();
p2.typeOfPlayer='circle';
p2.wins=0;

p1.isRunning = true;
p2.isRunning = false;



 
// tablica przedstwiajaca przebieg gry
// n -oznacza neutral
// x -cross
// o - circle
var game = [['n','n','n'],['n','n','n'],['n','n','n']];
const usedPlaces  = [];
// askAboutName();



function  checkifGameIsEnded(game){
    if(game[0][0]=='x' && game[0][1]=='x' && game[0][2]=='x'){
        return true;
    }
    if(game[1][0]=='x' && game[1][1]=='x' && game[1][2]=='x'){
        return true;
    }
    if(game[2][0]=='x' && game[2][1]=='x' && game[2][2]=='x'){
        return true;
    }
    if(game[0][0]=='x' && game[1][0]=='x' && game[2][0]=='x'){
        return true;
    }
    if(game[0][1]=='x' && game[1][1]=='x' && game[2][1]=='x'){
        return true;
    }

    if(game[0][2]=='x' && game[1][2]=='x' && game[2][2]=='x'){
        return true;
    }

    if(game[0][0]=='x' && game[1][1]=='x' && game[2][2]=='x'){
        return true;
    }
    if(game[2][0]=='x' && game[1][1]=='x' && game[0][2]=='x'){
        return true;
    }
// kółka
if(game[0][0]=='o' && game[0][1]=='o' && game[0][2]=='o'){
    return true;
}
if(game[1][0]=='o' && game[1][1]=='o' && game[1][2]=='o'){
    return true;
}
if(game[2][0]=='o' && game[2][1]=='o' && game[2][2]=='o'){
    return true;
}
if(game[0][0]=='o' && game[1][0]=='o' && game[2][0]=='o'){
    return true;
}
if(game[0][1]=='o' && game[1][1]=='o' && game[2][1]=='o'){
    return true;
}

if(game[0][2]=='o' && game[1][2]=='o' && game[2][2]=='o'){
    return true;
}
if(game[0][0]=='o' && game[1][1]=='o' && game[2][2]=='o'){
    return true;
}
if(game[2][0]=='o' && game[1][1]=='o' && game[0][2]=='o'){
    return true;
}
return false;

}



function colorChanger(el){
    const list = document.getElementsByTagName("td");

    var element = document.getElementById('winner');
    
   var idOfElement= el.id;
   var x = idOfElement.split('')[0];
    var y =idOfElement.split('')[1];
    console.log('elemetu zmienione' + 'x ' +x  + 'y ' + y);
   if(usedPlaces.includes(idOfElement)){
    console.log("jest ten element")
   }else{
    console.log("nie ma tego elementu")
   }
   console.log(idOfElement);
   usedPlaces.push(idOfElement);
   let text = usedPlaces.toString();
   console.log(text);
   console.log('p1 running ' +p1.isRunning)
   console.log('p2 running ' +p2.isRunning)
   
   if(p1.isRunning==true && p2.isRunning==false){
     el.classList.add('cross');
    p1.selectPosition(x,y);
   
   }
   if(checkifGameIsEnded(game)){
    
     element.innerHTML+= "gracz nr 1";
    
     for (let i = 0; i < list.length; i++) {
        list[i].removeAttribute("onclick");
      }
     return;
 }
   if(p2.isRunning==true && p1.isRunning==false){
    el.classList.add('circle');
    p2.selectPosition(x,y);

   }
   if(checkifGameIsEnded(game)){
   
     element.innerHTML+= "gracz nr 2";
     
     for (let i = 0; i < list.length; i++) {
        list[i].removeAttribute("onclick");
      }


     return;
 }
 
 game.forEach(function(entry){
    console.log(entry);
 })
   p1.isRunning=!p1.isRunning;
   p2.isRunning=!p2.isRunning;

}

