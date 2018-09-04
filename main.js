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

  //state transitions

  //build splash

  function buildSplash() {

    splashMain = buildDom(`
      <main>
        <div class = 'start'>  
          <h1>Bricks race</h1>
          <button>Play</button>
        <div>
      </main>
    `);
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
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
      <main>
        <h1>Game over</h1>
        <p>Your score: <span></span></p>
        <button>Play again</button>
      </main>
    `);

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);    
    
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