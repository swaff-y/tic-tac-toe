
const aiPlayer = {
  checkSpec : function(){     //checks for startin spec cases
    if(gameLogic.pickArray.length <= 2){
      if(gameLogic.combos[0][0] === 1 && gameLogic.combos[2][0] === 1){
        return "S1";
      }else if(gameLogic.combos[2][0] === 1 && gameLogic.combos[2][2] === 1){
        return "S3";
      }else if(gameLogic.combos[2][2] === 1 && gameLogic.combos[0][2] === 1){
        return "S4"
      }else if(gameLogic.combos[0][0] === 1 && gameLogic.combos[0][2] === 1){
        return "S2"
      }else if(gameLogic.combos[0][0] === 1 && gameLogic.combos[2][2] === 0){
        if(gameLogic.combos[2][0] !== 1)
        {return "C4";}
      }else if(gameLogic.combos[2][0] === 1 && gameLogic.combos[0][2] === 0){
        if(gameLogic.combos[2][2] !== 1)
        {return "C3";}
      }else if(gameLogic.combos[0][2] === 1 && gameLogic.combos[2][0] === 0){
        if(gameLogic.combos[0][1] !== 1)
        {return "C2";}
      }else if(gameLogic.combos[2][2] === 1 && gameLogic.combos[0][0] === 0){
        if(gameLogic.combos[2][0] !== 1)
        {return "C1";}
      }else{
        return false;
      }
    }else{
      return false;
    }
  },
  //check win
  checkWin : function(){
      if(gameLogic.combos[0][0] === 2 && gameLogic.combos[0][1] === 2 && gameLogic.combos[0][2] === 0){
        return "C3";
      }else if(gameLogic.combos[0][0] === 2 && gameLogic.combos[0][2] === 2 && gameLogic.combos[0][1] === 0){
        return "S2";
      }else if(gameLogic.combos[0][1] === 2 && gameLogic.combos[0][2] === 2 && gameLogic.combos[0][0] === 0){
        return "C1";
      }else if(gameLogic.combos[1][0] === 2 && gameLogic.combos[1][1] === 2 && gameLogic.combos[1][2] === 0){
        return "S4";
      }else if(gameLogic.combos[1][0] === 2 && gameLogic.combos[1][2] === 2 && gameLogic.combos[1][1] === 0){
        return "C";
      }else if(gameLogic.combos[1][1] === 2 && gameLogic.combos[1][2] === 2 && gameLogic.combos[1][0] === 0){
        return "S1";
      }else if(gameLogic.combos[2][0] === 2 && gameLogic.combos[2][1] === 2 && gameLogic.combos[2][2] === 0){
        return "C4";
      }else if(gameLogic.combos[2][0] === 2 && gameLogic.combos[2][2] === 2 && gameLogic.combos[2][1] === 0){
        return "S3";
      }else if(gameLogic.combos[2][1] === 2 && gameLogic.combos[2][2] === 2 && gameLogic.combos[2][0] === 0){
        return "C2";
      }else if(gameLogic.combos[3][0] === 2 && gameLogic.combos[3][1] === 2 && gameLogic.combos[3][2] === 0){
        return "C2";
      }else if(gameLogic.combos[3][0] === 2 && gameLogic.combos[3][2] === 2 && gameLogic.combos[3][1] === 0){
        return "S1";
      }else if(gameLogic.combos[3][1] === 2 && gameLogic.combos[3][2] === 2 && gameLogic.combos[3][0] === 0){
        return "C1";
      }else if(gameLogic.combos[4][0] === 2 && gameLogic.combos[4][1] === 2 && gameLogic.combos[4][2] === 0){
        return "S3";
      }else if(gameLogic.combos[4][0] === 2 && gameLogic.combos[4][2] === 2 && gameLogic.combos[4][1] === 0){
        return "C";
      }else if(gameLogic.combos[4][1] === 2 && gameLogic.combos[4][2] === 2 && gameLogic.combos[4][0] === 0){
        return "S2";
      }else if(gameLogic.combos[5][0] === 2 && gameLogic.combos[5][1] === 2 && gameLogic.combos[5][2] === 0){
        return "C4";
      }else if(gameLogic.combos[5][0] === 2 && gameLogic.combos[5][2] === 2 && gameLogic.combos[5][1] === 0){
        return "S4";
      }else if(gameLogic.combos[5][1] === 2 && gameLogic.combos[5][2] === 2 && gameLogic.combos[5][0] === 0){
        return "C3";
      }else if(gameLogic.combos[6][0] === 2 && gameLogic.combos[6][1] === 2 && gameLogic.combos[6][2] === 0){
        return "C2";
      }else if(gameLogic.combos[6][0] === 2 && gameLogic.combos[6][2] === 2 && gameLogic.combos[6][1] === 0){
        return "C";
      }else if(gameLogic.combos[6][1] === 2 && gameLogic.combos[6][2] === 2 && gameLogic.combos[6][0] === 0){
        return "C3";
      }else if(gameLogic.combos[7][0] === 2 && gameLogic.combos[7][1] === 2 && gameLogic.combos[7][2] === 0){
        return "C4";
      }else if(gameLogic.combos[7][0] === 2 && gameLogic.combos[7][2] === 2 && gameLogic.combos[7][1] === 0){
        return "C";
      }else if(gameLogic.combos[7][1] === 2 && gameLogic.combos[7][2] === 2 && gameLogic.combos[7][0] === 0){
        return "C1";
      }else{
        return false;
      }
  },
  //check block
  checkBlock : function(){
    if(gameLogic.combos[0][0] === 1 && gameLogic.combos[0][1] === 1 && gameLogic.combos[0][2] === 0){
      return "C3";
    }else if(gameLogic.combos[0][0] === 1 && gameLogic.combos[0][2] === 1 && gameLogic.combos[0][1] === 0){
      return "S2";
    }else if(gameLogic.combos[0][1] === 1 && gameLogic.combos[0][2] === 1 && gameLogic.combos[0][0] === 0){
      return "C1";
    }else if(gameLogic.combos[1][0] === 1 && gameLogic.combos[1][1] === 1 && gameLogic.combos[1][2] === 0){
      return "S4";
    }else if(gameLogic.combos[1][0] === 1 && gameLogic.combos[1][2] === 1 && gameLogic.combos[1][1] === 0){
      return "C";
    }else if(gameLogic.combos[1][1] === 1 && gameLogic.combos[1][2] === 1 && gameLogic.combos[1][0] === 0){
      return "S1";
    }else if(gameLogic.combos[2][0] === 1 && gameLogic.combos[2][1] === 1 && gameLogic.combos[2][2] === 0){
      return "C4";
    }else if(gameLogic.combos[2][0] === 1 && gameLogic.combos[2][2] === 1 && gameLogic.combos[2][1] === 0){
      return "S3";
    }else if(gameLogic.combos[2][1] === 1 && gameLogic.combos[2][2] === 1 && gameLogic.combos[2][0] === 0){
      return "C2";
    }else if(gameLogic.combos[3][0] === 1 && gameLogic.combos[3][1] === 1 && gameLogic.combos[3][2] === 0){
      return "C2";
    }else if(gameLogic.combos[3][0] === 1 && gameLogic.combos[3][2] === 1 && gameLogic.combos[3][1] === 0){
      return "S1";
    }else if(gameLogic.combos[3][1] === 1 && gameLogic.combos[3][2] === 1 && gameLogic.combos[3][0] === 0){
      return "C1";
    }else if(gameLogic.combos[4][0] === 1 && gameLogic.combos[4][1] === 1 && gameLogic.combos[4][2] === 0){
      return "S3";
    }else if(gameLogic.combos[4][0] === 1 && gameLogic.combos[4][2] === 1 && gameLogic.combos[4][1] === 0){
      return "C";
    }else if(gameLogic.combos[4][1] === 1 && gameLogic.combos[4][2] === 1 && gameLogic.combos[4][0] === 0){
      return "S2";
    }else if(gameLogic.combos[5][0] === 1 && gameLogic.combos[5][1] === 1 && gameLogic.combos[5][2] === 0){
      return "C4";
    }else if(gameLogic.combos[5][0] === 1 && gameLogic.combos[5][2] === 1 && gameLogic.combos[5][1] === 0){
      return "S4";
    }else if(gameLogic.combos[5][1] === 1 && gameLogic.combos[5][2] === 1 && gameLogic.combos[5][0] === 0){
      return "C3";
    }else if(gameLogic.combos[6][0] === 1 && gameLogic.combos[6][1] === 1 && gameLogic.combos[6][2] === 0){
      return "C2";
    }else if(gameLogic.combos[6][0] === 1 && gameLogic.combos[6][2] === 1 && gameLogic.combos[6][1] === 0){
      return "C";
    }else if(gameLogic.combos[6][1] === 1 && gameLogic.combos[6][2] === 1 && gameLogic.combos[6][0] === 0){
      return "C3";
    }else if(gameLogic.combos[7][0] === 1 && gameLogic.combos[7][1] === 1 && gameLogic.combos[7][2] === 0){
      return "C4";
    }else if(gameLogic.combos[7][0] === 1 && gameLogic.combos[7][2] === 1 && gameLogic.combos[7][1] === 0){
      return "C";
    }else if(gameLogic.combos[7][1] === 1 && gameLogic.combos[7][2] === 1 && gameLogic.combos[7][0] === 0){
      return "C1";
    }else{
      return false;
    }
  },
  //check center
  checkCenter : function(){
    if(gameLogic.combos[1][1] === 0){
      return true;
      // console.log('center-run');
    }else{
      return false;
    }
  },
  //check corner
  checkCorners : function(){
      if(gameLogic.combos[0][0] === 0){
        // console.log('run - C1');
        return "C1";
      }else if(gameLogic.combos[2][0] === 0){
        // console.log('run - C2');
        return "C2";
      }else if(gameLogic.combos[0][2] === 0){
         console.log('run - C3');
        return "C3";
      }else if(gameLogic.combos[2][2] === 0){
        // console.log('run - C4');
        return "C4";
      }else{
        return false;
      }
  },
  //check side
  checkSide : function(){
    if(gameLogic.combos[1][0] === 0){
      // console.log('s1 - run');
      return "S1";
    }else if(gameLogic.combos[0][1] === 0){
      // console.log('s2 - run');
      return "S2";
    }else if(gameLogic.combos[2][1] === 0){
      // console.log('s3 - run');
      return "S3";
    }else if(gameLogic.combos[1][2] === 0){
      // console.log('s4 - run');
      return "S4";
    }else{
      return false;
    }
  },
  //the play cascade
  playCascade : function(){

    if(this.checkSpec() === "C4"){
      console.log('c4');
      gameLogic.playTurn(9);
      return "C4";
    }else if(this.checkSpec() === "C3"){
      console.log('c3');
      gameLogic.playTurn(7);
      return "C3";
    }else if(this.checkSpec() === "C1"){
      console.log('c1');
      gameLogic.playTurn(1);
      return "C1";
    }else if(this.checkSpec() === "C2"){
      console.log('c2');
      gameLogic.playTurn(3);
      return "C2";
    }else if(this.checkWin() === "C1"){
      console.log('c1');
      gameLogic.playTurn(1);
      return "C1";
    }else if(this.checkWin() === "S1"){
      console.log('s1');
      gameLogic.playTurn(2);
      return "S1";
    }else if(this.checkWin() === "C2"){
      console.log('c2');
      gameLogic.playTurn(3);
      return "C2";
    }else if(this.checkWin() === "S2"){
      console.log('s2');
      gameLogic.playTurn(4);
      return "S2";
    }else if(this.checkWin() === "C"){
      console.log('c');
      gameLogic.playTurn(5);
      return "C";
    }else if(this.checkWin() === "S3"){
      console.log('s3');
      gameLogic.playTurn(6);
      return "S3";
    }else if(this.checkWin() === "C3"){
      console.log('c3');
      gameLogic.playTurn(7);
      return "C3";
    }else if(this.checkWin() === "S4"){
      console.log('s4');
      gameLogic.playTurn(8);
      return "S4";
    }else if(this.checkWin() === "C4"){
      console.log('c4');
      gameLogic.playTurn(9);
      return "C4";
    }else if(this.checkBlock() === "C1"){
      console.log('c1');
      gameLogic.playTurn(1);
      return "C1";
    }else if(this.checkBlock() === "S1"){
      console.log('s1');
      gameLogic.playTurn(2);
      return "S1";
    }else if(this.checkBlock() === "C2"){
      console.log('c2');
      gameLogic.playTurn(3);
      return "C2";
    }else if(this.checkBlock() === "S2"){
      console.log('s2 - 1');
      gameLogic.playTurn(4);
      return "S2";
    }else if(this.checkBlock() === "C"){
      console.log('c');
      gameLogic.playTurn(5);
      return "C";
    }else if(this.checkBlock() === "S3"){
      console.log('s3');
      gameLogic.playTurn(6);
      return "S3";
    }else if(this.checkBlock() === "C3"){
      console.log('c3');
      gameLogic.playTurn(7);
      return "C3";
    }else if(this.checkBlock() === "S4"){
      console.log('s4');
      gameLogic.playTurn(8);
      return "S4";
    }else if(this.checkBlock() === "C4"){
      console.log('c4');
      gameLogic.playTurn(9);
      return "C4";
    }else if(this.checkCenter() === true){
      gameLogic.playTurn(5);
      return "C";
    }else if(this.checkCorners() === "C1"){
      console.log('c1');
      gameLogic.playTurn(1);
      return "C1";
    }else if(this.checkCorners() === "C2"){
      console.log('c2');
      gameLogic.playTurn(3);
      return "C2";
    }else if(this.checkCorners() === "C3"){
      console.log('c3');
      gameLogic.playTurn(7);
      return "C3";
    }else if(this.checkCorners() === "C4"){
      console.log('c4');
      gameLogic.playTurn(9);
      return "C4";
    }else if(this.checkSide() === "S1"){
      console.log('s1');
      gameLogic.playTurn(2);
      return "S1";
    }else if(this.checkSide() === "S2"){
      console.log('s2');
      gameLogic.playTurn(4);
      return "S2";
    }else if(this.checkSide() === "S3"){
      console.log('s3');
      gameLogic.playTurn(6);
      return "S3";
    }else if(this.checkSide() === "S4"){
      console.log('s4');
      gameLogic.playTurn(8);
      return "S4";
    }
  },
};
