console.log('test');
if(gameLogic.playerSide == "X"){
  let letterXO = "X";
  let letterOX = "O";
  let letterxo = "x";
  let letterox = "o";
}else{
  let letterXO = "O";
  let letterOX = "X";
  let letterxo = "o";
  let letterox = "x";
};

const yis = function(){
  $('#inst').html('Player ' + letterXO + ' turn');
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
  if(win === 'X'){
    $('#inst').html('Player ' + letterXO + ' wins');
    gameLogic.gamecounter[0]++;
    randomTaunt();
  }else if(win === 'O'){
    $('#inst').html('Player ' + letterOX + ' wins');
    gameLogic.gamecounter[1]++;
    randomTaunt();
  }else if(win === "draw"){
    $('#inst').html('Draw');
    gameLogic.gamecounter[2]++;
    randomTaunt();
  }
  setTimeout(yis,1500);
}

const $moveChange = function(nextTest){
  if(nextTest === 'X'){
    $('#inst').html('Player ' + letterXO + ' turn');
    $restartGame('X');
  }else if(nextTest === "O"){
    $('#inst').html('Player ' + letterOX + ' turn');
    $restartGame('O');
  }else if(nextTest === "draw"){
    $('#inst').html('Draw');
    $restartGame('draw');
  }
};

const randomTaunt = function(){
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
  randomTaunt();
  const dfg = 'Player ' + letterXO + ' turn';
  $('#inst').html(dfg);

  $('#recount').on('click',function(){
    location.reload();
  });
  const $write = function(num){
      $('#wh' + num).on('click',function(){
        $('#t' + num).html('');
        console.log('clicked-');
        let turn = gameLogic.turn;
        let result = gameLogic.playTurn(num);
        if(turn === 1){
          if(result !== "again"){
            $('#' + letterxo + num).show();
            $('#' + letterox + num).hide();
            const play = aiPlayer.playCascade();
            let nextTest = gameLogic.winTest();
            if(gameLogic.pickArray.length === 9){
            //  console.log("write me");
              nextTest = 'draw';
            }
            if(play === "C"){
              $('#t5').html('');
              $('#' + letterox + '5').show();
              $moveChange(nextTest);
            }else if(play === "C1"){
              $('#t1').html('');
              $('#' + letterox + '1').show();
              $moveChange(nextTest);
            }else if(play === "C2"){
              $('#t3').html('');
              $('#' + letterox + '3').show();
              $moveChange(nextTest);
            }else if(play === "C3"){
              $('#t7').html('');
              $('#' + letterox + '7').show();
              $moveChange(nextTest);
            }else if(play === "C4"){
              $('#t9').html('');
              $('#' + letterox + '9').show();
              $moveChange(nextTest);
            }else if(play === "S1"){
              $('#t2').html('');
              $('#' + letterox + '2').show();
              $moveChange(nextTest);
            }else if(play === "S2"){
              $('#t4').html('');
              $('#' + letterox + '4').show();
              $moveChange(nextTest);
            }else if(play === "S3"){
              $('#t6').html('');
              $('#' + letterox + '6').show();
              $moveChange(nextTest);
            }else if(play === "S4"){
              $('#t8').html('');
              $('#' + letterox + '8').show();
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
