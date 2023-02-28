'use strict';

let secretNumber = Math.trunc( Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
function guesmessage (message) {
    document.querySelector('.guess-message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber = Number(document.querySelector('.number-input').value)
    

if (!guessingNumber) {
    guesmessage('Введите число!')
    // document.querySelector('.guess-message').textContent = 'Введите число!';


}

else if (guessingNumber === secretNumber) {
 guesmessage('Правильно!');
    // document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = ' rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;
    
    if ( score > highscore) {
        highscore = score;
        document.querySelector('.highscore') .textContent = highscore;
    }
    
    }
    else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 
            guessingNumber < secretNumber ? 'Слишком мало!' : 'Слишком много!';
           score--;
           document.querySelector('.score').textContent = score;
        }
        
    
    else {
        guesmessage('Вы проиграли!')
        // document.querySelector('.guess-message').textContent = 'Вы проиграли!'
        document.querySelector('.score').textContent = 0;
    }

}
// else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.guess-message').textContent = 'Слишком много!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.guess-message').textContent = 'Вы проиграли!';
//         document.querySelector('.score').textContent = 0;
//     }
    
// } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.guess-message').textContent = 'Слишком мало!'
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.guess-message').textContent = 'Вы проиграли!'
//         document.querySelector('.score').textContent = 0;
//     }
    
//     }
})
document.querySelector('.again').addEventListener('click', function () {
    score = 20; 
    document.querySelector('.guess-message').textContent = 'начни угадывать!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.question').textContent = '???';
    secretNumber = Math.trunc( Math.random() * 20) + 1;
    
})