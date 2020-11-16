const gameLogic = {
  combos : [
    [0,0,0],
    [1,2,1],
    [0,0,0],
    [0,0,0],
    [2,2,1],
    [0,0,0],
    [1,1,1],
    [0,0,0],
  ],

  winTest : function(){
    let add = 0;
    let check = 0;
    for(let i = 0;i < 8;i++){
      add = 0;
    //  check = 0;
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
   return "Draw";
  },
};
