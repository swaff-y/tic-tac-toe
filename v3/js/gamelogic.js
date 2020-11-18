const gameLogic = {
  combos : [
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ],
  pickArray:[],
  turn: 1,

  winTest : function(){
    let add = 0;
    let check = 0;
    for(let i = 0;i < 8;i++){
//      console.log('iteration',i);
      add = 0;
      check = 0;
      for(let j = 0;j < 3;j++){
        if(this.combos[i][j] !== 0){
          add = add + this.combos[i][j];
          check++;
          if(check === 3){
            check = 0;
            if(add === 3){
              return "X";
            }else if(add === 6){
              return "O";
            }
          }
        }
      }
    }
   return true;
  },
  gameState : function(){
    if(this.pickArray.length === 9){
      return "draw";
    }
    if(this.winTest() === "X"){
      return "X";
    }else if(this.winTest() === "O"){
      return "O";
    }
  },
  playTurn : function(num){
//    console.log("Turn:",this.turn);
    if(this.turn == 1){
      for(let i = 0;i <= this.pickArray.length-1;i++){
        if(this.pickArray[i] === parseInt(num)){
          // console.log("this one");
          return "again";
        }
      }
      this.turn = 0;
      player = 0;
    }
    else{
      // for(let i = 0;i <= this.pickArray.length-1;i++){
      //   if(this.pickArray[i] === num){
      //     console.log("this one");
      //     return "again";
      //   }
      // }
      this.turn = 1;
      player = 1;
    }

    this.pickArray.push(num);

    if(player == 0){
      if(num == 1){
        this.fillArray(0,0,1);
        this.fillArray(3,0,1);
        this.fillArray(7,0,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 2){
        this.fillArray(1,0,1);
        this.fillArray(3,1,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 3){
        this.fillArray(2,0,1);
        this.fillArray(3,2,1);
        this.fillArray(6,2,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 4){
        this.fillArray(0,1,1);
        this.fillArray(4,0,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 5){
        this.fillArray(1,1,1);
        this.fillArray(4,1,1);
        this.fillArray(6,1,1);
        this.fillArray(7,1,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 6){
        this.fillArray(2,1,1);
        this.fillArray(4,2,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 7){
        this.fillArray(0,2,1);
        this.fillArray(5,0,1);
        this.fillArray(6,0,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 8){
        this.fillArray(1,2,1);
        this.fillArray(5,1,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 9){
        this.fillArray(2,2,1);
        this.fillArray(5,2,1);
        this.fillArray(7,2,1);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
    }else{
      if(num == 1){
        this.fillArray(0,0,2);
        this.fillArray(3,0,2);
        this.fillArray(7,0,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 2){
        this.fillArray(1,0,2);
        this.fillArray(3,1,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 3){
        this.fillArray(2,0,2);
        this.fillArray(3,2,2);
        this.fillArray(6,2,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 4){
        this.fillArray(0,1,2);
        this.fillArray(4,0,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 5){
        this.fillArray(1,1,2);
        this.fillArray(4,1,2);
        this.fillArray(6,1,2);
        this.fillArray(7,1,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 6){
        this.fillArray(2,1,2);
        this.fillArray(4,2,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 7){
        this.fillArray(0,2,2);
        this.fillArray(5,0,2);
        this.fillArray(6,0,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 8){
        this.fillArray(1,2,2);
        this.fillArray(5,1,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
      if(num == 9){
        this.fillArray(2,2,2);
        this.fillArray(5,2,2);
        this.fillArray(7,2,2);
        if(this.gameState() === "X"){
          return "X";
        }else if(this.gameState() === "O"){
          return "O";
        }else if(this.gameState() === "draw"){
          return "draw";
        }
        else{
          return true;
        }
      }
    }
  },
  fillArray : function(x,y,player){
    if(player == 1){
      this.combos[x][y] = 1;
      return false;
    }else{
      this.combos[x][y] = 2;
      return false;
    }
  },
  reset : function(){
    this.combos = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
    ];
    this.pickArray = [];
    this.turn = 1;
  },
  gamecounter:[0,0,0],
};
