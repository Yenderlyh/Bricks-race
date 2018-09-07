'use strict';

//Build the dom 
function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}
//create the main function
function main() {

  var splashMain;
  var gameOverMain;
  var game;
  var musicMain;
  var musicGameOver;

  //state transitions

  //build splash

  function buildSplash() {

    
    splashMain = buildDom(`
    <main class= "game container">
      <div class = 'box'>  
        <h1>Bricks race</h1>
        <button>Press Start</button>
      <div>
      <audio class="musicMain"><source src="./mainMusic.mp3" type="audio/mpeg"></audio>
    </main>
  `);
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);

    musicMain = splashMain.querySelector('.musicMain');
    musicMain.autoplay = true;


  }

  function destroySplash() {
    splashMain.remove();
  }
  // -- game

  function startGame() {
    
    destroySplash();
    destroyGameOver();

    game = new Game();
    game.start();
    game.onOver(function () {
      gameOver(game.score);
    });
  }

  function destroyGame() {
    game.destroy();
  }
  // -- game over 


  function gameOver(score) {
    destroyGame();
    buildGameOver(score);
  }

  function buildGameOver(score) {

    gameOverMain = buildDom(`
      <main class= "game container">
        <div class="box" >
          <h1>Game over</h1>
          <p>Your score: <span></span></p>
          <button>Play again</button>
          <audio class="musicGameOver"><source src="./musicGameOver.mp3" type="audio/mpeg"></audio>
        <div>
      </main>
      
    `);

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);  

    musicGameOver = gameOverMain.querySelector('.musicGameOver');
    musicGameOver.autoplay = true;
 
    
    var span = gameOverMain.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverMain);
  }

  function destroyGameOver() {
    if (gameOverMain) {
      gameOverMain.remove();
    }
  }
  // -- initialize

  buildSplash();
}

window.addEventListener('load', main);