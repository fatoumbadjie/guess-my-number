'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='correct Numbre!';

document.querySelector('.guess').value=22;
console.log(document.querySelector('.guess').value);

document.querySelector('.score').textContent=23;

document.querySelector('.number').textContent = 13;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click',function(){
console.log(document.querySelector('.guess').value);

const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
//when player doesnt guess//
if(!guess){t
    displayMessagee('No number');
    //when player gets the correct number//
}else if(guess===secretNumber){
    displayMessage('correct#');
    displayScore(score);
    document.querySelector('.number').textContent = secretNumber;
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width ='30rem';
 if(score>highscore){
       highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}
}
else if(guess!==secretNumber){
    if(score > 1){
        displayMessage = guess > secretNumber? 'too high' : 'too low';
        score--;
        displayScore = score;
        }else{ 
            displayMessage = 'you lost the Game';
            dispalayScore = 0;
}
}
});
    //when guess is too high//
    /*
}else if(guess > secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent = 'too high';
    score--;
    document.querySelector('.score').textContent = score;
    }else{ 
        document.querySelector('.message').textContent = 'you lost the Game';
        document.querySelector('.score').textContent = 0; 
    //when guess is too low//
}else if(guess < secretNumber){
    if (score > 1){
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
}else {
    document.querySelector('.message').textContent = 'you lost the Game';
    document.querySelector('.score').textContent = 0;
}
}
});
*/
// restoring the again button//
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
 secretNumber = Math.trunc(Math.random() * 20) + 1;

 displayMessage = 'start guessing';

 dispalayScore(score);
 document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

// implementing high score//

});