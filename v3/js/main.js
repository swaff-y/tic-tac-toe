console.log("Test");


$(document).ready(function(){
  $('#inst').html('Player X turn');

  const $write = function(num){
      $('#wh' + num).on('click',function(){
        console.log('clicked');
        let turn = gameLogic.turn;
        let result = gameLogic.playTurn(num);
        if(turn === 1){
          if(result !== "again"){
            $('#x' + num).show();
            $('#o' + num).hide();
            const play = aiPlayer.playCascade();
            const nextTest = gameLogic.winTest();
            if(play === "C"){
              $('#o5').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "C1"){
              $('#o1').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "C2"){
              $('#o3').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "C3"){
              $('#o7').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "C4"){
              $('#o9').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "S1"){
              $('#o2').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "S2"){
              $('#o4').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "S3"){
              $('#o6').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }else if(play === "S4"){
              $('#o8').show();
              if(nextTest === "X"){
                $('#inst').html('Player X wins');
              }else if(nextTest === "O"){
                $('#inst').html('Player O wins');
              }else if(result === "draw"){
                $('#inst').html('Draw');
              }else{
                $('#inst').html('Player X turn');
              }
            }
          }
        }
      });
  };
  for(let i = 1; i <= 9;i++){
    $write(i);
  };
});