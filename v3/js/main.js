console.log("Test");
const yis = function(){
  $('#inst').html('Player X turn');
  counterSet();
};
const counterSet = function(){
  $('#X').html(gameLogic.gamecounter[0]);
  $('#O').html(gameLogic.gamecounter[1]);
  $('#draw').html(gameLogic.gamecounter[2]);
}
const $restartGame = function(win){
  for(let i = 1;i <= 9;i++){
    $('#x' + i).hide();
    $('#o' + i).hide();
  };
  gameLogic.reset();
  console.log("win",win);
  if(win === "X"){
    $('#inst').html('Player X wins');
    gameLogic.gamecounter[0]++;
  }else if(win === "O"){
    $('#inst').html('Player O wins');
    gameLogic.gamecounter[1]++;
  }else if(win === "draw"){
    $('#inst').html('Draw');
    gameLogic.gamecounter[2]++;
  }
  setTimeout(yis,1500);
}

const $moveChange = function(nextTest){
  if(nextTest === "X"){
    $('#inst').html('Player X turn');
    $restartGame('X');
  }else if(nextTest === "O"){
    $('#inst').html('Player O turn');
    $restartGame('O');
  }else if(nextTest === "draw"){
    $('#inst').html('Draw');
    $restartGame('draw');
  }
};
$(document).ready(function(){
  $('#inst').html('Player X turn');
  let clicks = 0;

  $('#recount').on('click',function(){
    location.reload();
  });


  const $write = function(num){
      $('#wh' + num).on('click',function(){
        console.log('clicked-'+clicks);
        let turn = gameLogic.turn;
        let result = gameLogic.playTurn(num);
        if(turn === 1){
          if(result !== "again"){
            $('#x' + num).show();
            $('#o' + num).hide();
            const play = aiPlayer.playCascade();
            let nextTest = gameLogic.winTest();
            if(gameLogic.pickArray.length === 9){
            //  console.log("write me");
              nextTest = 'draw';
            }
            if(play === "C"){
              $('#o5').show();
              $moveChange(nextTest);
            }else if(play === "C1"){
              $('#o1').show();
              $moveChange(nextTest);
            }else if(play === "C2"){
              $('#o3').show();
              $moveChange(nextTest);
            }else if(play === "C3"){
              $('#o7').show();
              $moveChange(nextTest);
            }else if(play === "C4"){
              $('#o9').show();
              $moveChange(nextTest);
            }else if(play === "S1"){
              $('#o2').show();
              $moveChange(nextTest);
            }else if(play === "S2"){
              $('#o4').show();
              $moveChange(nextTest);
            }else if(play === "S3"){
              $('#o6').show();
              $moveChange(nextTest);
            }else if(play === "S4"){
              $('#o8').show();
              $moveChange(nextTest);
            }else if(nextTest === 'draw'){
              $('#inst').html('Draw');
              $moveChange(nextTest);
            }
          }
        }
      });
  };
  for(let i = 1; i <= 9;i++){
    $write(i);
  };
});
