'use strict'
var canvas = document.querySelector('div.canvas');


function Game() {
  var self = this;
  self.score = 0;
  self.time = 0;
  self.lanes = [46 , 101 , 160, 212, 270, 325 ];
  self.gameIsOver = false;
}

Game.prototype.start = function() {
  var self = this;

  self.gameMain = buildDom(`
    <main class="game container">
      <div class="canvas">
        <canvas>
        </canvas>
      </div>
      <header>
        <div class="lives">
          <span class="label">Lives</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Score</span>
          <span class="value"></span>
        </div>
        <div class="time">
          <span class="label">Time</span>
          <span class="value"></span>
        </div>
        <div class="hidden">
        <img id="carro" src="https://image.ibb.co/k83jhz/imageedit_11_8498164966.png" alt="carro" border="0">
        <img id="enemy"src="https://image.ibb.co/cALKFK/imageedit_11_8498164966.png" alt="carro" border="0"></a><br />
        </div>
      </header>
    </main>
  `);


  self.canvasParentElement = self.gameMain.querySelector ('.canvas');
  self.canvasElement = self.gameMain.querySelector('canvas');

  self.livesElement = self.gameMain.querySelector('.lives .value');
  self.scoreElement = self.gameMain.querySelector('.score .value');
  self.timeElement = self.gameMain.querySelector('.time .value');
  document.body.appendChild(self.gameMain);
  
  self.width = window.innerWidth / 4;
  self.height = window.innerHeight / 1.5;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.player = new Player (self.canvasElement, 3);
  self.livesElement.innerText = self.player.lives;
  self.scoreElement.innerText = self.score;
  self.timeElement.innerText = self.time;
  self.handleKeyDown = function (event) {
    if (event.key === 'ArrowLeft') {
      self.player.x -= 56;
    } else if (event.key === 'ArrowRight') {
      self.player.x += 56;
    }
  };

  document.body.addEventListener('keydown', self.handleKeyDown);

  self.enemies = [];
  self.startLoop();
  self.startTimer();
  self.countScore();
};

Game.prototype.startLoop = function () {
  var self = this;

  var ctx = self.canvasElement.getContext('2d');

  function loop() {

    var lane = self.lanes[Math.floor(Math.random()*self.lanes.length)]
    if (Math.random() > 0.98) {
      self.enemies.push(new Enemy(self.canvasElement, lane, 3));
    } 

    self.player.update();
    self.enemies.forEach(function(item) {
      item.update();
    });

    self.enemies = self.enemies.filter(function(item) {
      return item.isInScreen();
    })
    
    self.checkIfEnemiesCollidedPlayer();

    ctx.clearRect(0, 0, self.width, self.height);
    self.player.update();
    self.player.draw();
    self.enemies.forEach(function (item) {
      item.draw();
    });
    if (!self.gameIsOver){
      window.requestAnimationFrame(loop);
    }
  }
  window.requestAnimationFrame(loop);
};

Game.prototype.checkIfEnemiesCollidedPlayer = function () {
  var self = this;

  self.enemies.forEach(function (item) {
    if(self.player.collidesWithEnemy(item)) {
      self.player.collided();
      self.livesElement.innerText = self.player.lives;
      self.resetEnemies();
      if (!self.player.lives) {
        self.gameOver();
      }
    }
  });
}

Game.prototype.resetEnemies = function () {
  var self = this;
  self.enemies.splice(0,10000);
}

Game.prototype.onOver = function (callback) {
  var self = this;

  self.onGameOverCallback = callback;
};

Game.prototype.gameOver = function () {
  var self = this;
  self.gameIsOver = true;
  self.onGameOverCallback();
};

Game.prototype.destroy = function () {
  var self = this;
  
  self.gameMain.remove();
};

Game.prototype.startTimer = function () {
  var self = this;

  self.intervalId = window.setInterval(function (){
    self.timeElement.innerText = self.time;
    self.time ++;
  }, 1000);
};
Game.prototype.countScore = function () {
  var self = this;
  
  self.intervalId = window.setInterval (function (){
    self.scoreElement.innerText = self.score;
    
    if (self.time >= 10) {
      self.score += 50;
    }
  },8000); 
}

// Game.prototype.countLives = function () {
//   var self = this;
//   self.livesElement.innerText = self.player.lives;
//   if (self.player.collidesWithEnemy(item)) {
//     self.player.lives = self.player.lives--;
//   }
// }




