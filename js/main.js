console.log("Test");


$(document).ready(function(){
  $('#inst').html('Player X turn');


  $('#wh1').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(1);
    if(turn === 1){
      if(result !== "again"){
        $('#x1').show();
        $('#o1').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o1').show();
        $('#x1').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh2').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(2);
    if(turn === 1){
      if(result !== "again"){
        $('#x2').show();
        $('#o2').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o2').show();
        $('#x2').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh3').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(3);
    if(turn === 1){
      if(result !== "again"){
        $('#x3').show();
        $('#o3').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o3').show();
        $('#x3').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh4').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(4);
    if(turn === 1){
      if(result !== "again"){
        $('#x4').show();
        $('#o4').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o4').show();
        $('#x4').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh5').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(5);
    if(turn === 1){
      if(result !== "again"){
        $('#x5').show();
        $('#o5').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o5').show();
        $('#x5').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh6').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(6);
    if(turn === 1){
      if(result !== "again"){
        $('#x6').show();
        $('#o6').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o6').show();
        $('#x6').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh7').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(7);
    if(turn === 1){
      if(result !== "again"){
        $('#x7').show();
        $('#o7').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o7').show();
        $('#x7').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh8').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(8);
    if(turn === 1){
      if(result !== "again"){
        $('#x8').show();
        $('#o8').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o8').show();
        $('#x8').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

  $('#wh9').on('click',function(){
    console.log('clicked');
    let turn = gameLogic.turn;
    let result = gameLogic.playTurn(9);
    if(turn === 1){
      if(result !== "again"){
        $('#x9').show();
        $('#o9').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player O turn');
        }
      }
    }else if(turn === 0){
      if(result !== "again"){
        $('#o9').show();
        $('#x9').hide();
        if(result === "X"){
          $('#inst').html('Player X wins');
        }else if(result === "O"){
          $('#inst').html('Player O wins');
        }else if(result === "draw"){
          $('#inst').html('Draw');
        }else{
          $('#inst').html('Player X turn');
        }
      }
    }
  });

});
