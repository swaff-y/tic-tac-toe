console.log("Test");


$(document).ready(function(){
  $('#inst').html('Player X turn');

  $('#wh1').on('click',function(){
    console.log('clicked');
    if(gameLogic.turn === 1){
        if(gameLogic.playTurn(1) === true){
          $('#x1').show();
          $('#o1').hide();
        }else{
          
        }

    }else{
        gameLogic.playTurn(0);
        $('#o1').show();
        $('#x1').hide();
    }
  });

});
