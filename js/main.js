const yis = function(){    //
  $('#inst').html('Player X turn');
  counterSet();
};
const counterSet = function(){ //sets the game counter
  $('#X').html(gameLogic.gamecounter[0]);
  $('#O').html(gameLogic.gamecounter[1]);
  $('#draw').html(gameLogic.gamecounter[2]);
}
const $restartGame = function(win){ //hides all imgs to start next game
  for(let i = 1;i <= 9;i++){
    $('#x' + i).hide();
    $('#o' + i).hide();
  };
  gameLogic.reset();
  console.log("win",win);
  if(win === "X"){
    $('#inst').html('Player X wins');
    gameLogic.gamecounter[0]++;
    randomTaunt();
  }else if(win === "O"){
    $('#inst').html('Player O wins');
    gameLogic.gamecounter[1]++;
    randomTaunt();
  }else if(win === "draw"){
    $('#inst').html('Draw');
    gameLogic.gamecounter[2]++;
    randomTaunt();
  }
  setTimeout(yis,1500);
}
const $moveChange = function(nextTest){ //tests the player X || O
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
const randomTaunt = function(){ //set the random taunts
  const taunts = [
    'Really?',
    'Are you sure?',
    'I wouldn\'t!',
    'For Real?',
    'Surly Not',
    'Final Answer?',
    'This One?',
    'Try me',
    'Your Loss',
    'Mmmmm'
  ];

  for(let i = 1;i <= 9;i++){
    const random = Math.floor(Math.random()*10);
    $('#t' + i).html(taunts[random]);
    $('#t' + i).hide();
  }
}
$(document).ready(function(){
  randomTaunt(); //calls the taunt function

  $('#inst').html('Player X turn');
  let clicks = 0;

  $('#recount').on('click',function(){
    location.reload();
  });
  const $write = function(num){
      $('#wh' + num).on('click',function(){
        $('#t' + num).html('');
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
              $('#t5').html('');
              $('#o5').show();
              $moveChange(nextTest);
            }else if(play === "C1"){
              $('#t1').html('');
              $('#o1').show();
              $moveChange(nextTest);
            }else if(play === "C2"){
              $('#t3').html('');
              $('#o3').show();
              $moveChange(nextTest);
            }else if(play === "C3"){
              $('#t7').html('');
              $('#o7').show();
              $moveChange(nextTest);
            }else if(play === "C4"){
              $('#t9').html('');
              $('#o9').show();
              $moveChange(nextTest);
            }else if(play === "S1"){
              $('#t2').html('');
              $('#o2').show();
              $moveChange(nextTest);
            }else if(play === "S2"){
              $('#t4').html('');
              $('#o4').show();
              $moveChange(nextTest);
            }else if(play === "S3"){
              $('#t6').html('');
              $('#o6').show();
              $moveChange(nextTest);
            }else if(play === "S4"){
              $('#t8').html('');
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
    $('#wh' + i).hover(function(){
      $('#t' + i).show();
    },function(){
      $('#t' + i).hide();
    })
  };


});
