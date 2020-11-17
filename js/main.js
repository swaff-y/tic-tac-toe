console.log("Test");


$(document).ready(function(){
  $('#inst').html('Player X turn');

  $('#wh1').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(1) !== "again"){
        $('#x1').show();
        $('#o1').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(1) !== "again"){
        $('#o1').show();
        $('#x1').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh2').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(2) !== "again"){
        $('#x2').show();
        $('#o2').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(2) !== "again"){
        $('#o2').show();
        $('#x2').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh3').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(3) !== "again"){
        $('#x3').show();
        $('#o3').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(3) !== "again"){
        $('#o3').show();
        $('#x3').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh4').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(4) !== "again"){
        $('#x4').show();
        $('#o4').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(4) !== "again"){
        $('#o4').show();
        $('#x4').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh5').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(5) !== "again"){
        $('#x5').show();
        $('#o5').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(5) !== "again"){
        $('#o5').show();
        $('#x5').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh6').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(6) !== "again"){
        $('#x6').show();
        $('#o6').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(6) !== "again"){
        $('#o6').show();
        $('#x6').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh7').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(7) !== "again"){
        $('#x7').show();
        $('#o7').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(7) !== "again"){
        $('#o7').show();
        $('#x7').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh8').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(8) !== "again"){
        $('#x8').show();
        $('#o8').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(8) !== "again"){
        $('#o8').show();
        $('#x8').hide();
        $('#inst').html('Player X turn');
      }
    }
  });
  $('#wh9').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
      if(gameLogic.playTurn(9) !== "again"){
        $('#x9').show();
        $('#o9').hide();
        $('#inst').html('Player O turn');
      }
    }else if(gameLogic.turn === 0){
      if(gameLogic.playTurn(9) !== "again"){
        $('#o9').show();
        $('#x9').hide();
        $('#inst').html('Player X turn');
      }
    }
  });


});
