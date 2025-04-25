let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses :0,
  ties:0
    };

updateScoreElement();
/*
  if(!score){
    score={
      wins : 0,
      losses :0,
      ties:0
    };
  }
  /*console.log(JSON.parse(localStorage.getItem('score')));//can get value out of localStorage*/

   
   let isAutoPlaying = false;
   let intervalId;

   function autoPlay () {
       if (!isAutoPlaying) {
          intervalId = setInterval(function() {
          const playerMove = pickComputerMove();
           playGame(playerMove);
         }, 1000); 
         isAutoPlaying = true;
       } else {
           clearInterval(intervalId);//to clear setInterval()
           isAutoPlaying = false;
       }       
   }



  function playGame(playerMove){
    const computerMove =  pickComputerMove();
    let  result =' ';
    if (playerMove === 'scissors'){
      if (computerMove === 'rock' ){
     result = 'lose';
    }else if (computerMove === 'paper') {
      result = 'win';
    }  else if (computerMove === 'scissors'){
     result = 'tie';
    }
    } 

    else if (playerMove === 'paper'){
      if (computerMove === 'rock' ){
        result = 'win';
    }else if (computerMove === 'paper') {
       result = 'tie';
    }  else if (computerMove === 'scissors'){
      result = 'lose';
    }
    }

    else if (playerMove === 'rock'){
      if (computerMove === 'rock' ){
         result = 'Tie';
      }else if (computerMove === 'paper') {
         result = 'lose';
      } else if (computerMove === 'scissors'){
        result = 'win';
      }
    }

    if (result === 'win') {
      score.wins ++;
    } else if (result === 'lose') { 
      score.losses ++;
    } else if (result === 'tie') {
      score.ties ++ ;
    }

    localStorage.setItem('score',JSON.stringify(score));//sets item in local storage
    
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

   
  }

  function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses:${score.losses}, Ties: ${score.ties}`;
  }
  
  function pickComputerMove(){
    randomNumber = Math.random();
      let computerMove = ' ';
    if(randomNumber >= 0 && randomNumber<1/3){
      computerMove ='rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    } 
    else if (randomNumber >= 2/3 && randomNumber < 1){
       computerMove='scissors';
    }
    return computerMove;
  }
