console.log('ai working');
const aiPlayer = {
  //check win
  checkwin : function(){
    
  },
  //check block
  checkblock : function(){},
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
  playCascade : function(){

    if(this.checkCenter() === true){
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
      gameLogic.playTurn(1);
      return "S1";
    }else if(this.checkSide() === "S2"){
      console.log('s2');
      gameLogic.playTurn(3);
      return "S2";
    }else if(this.checkSide() === "S3"){
      console.log('s3');
      gameLogic.playTurn(7);
      return "S3";
    }else if(this.checkSide() === "S4"){
      console.log('s4');
      gameLogic.playTurn(9);
      return "S4";
    }

  },
};
