'use strict'
var canvas = document.querySelector('div.canvas');

function Game() {
  var self = this;
}

Game.prototype.start = function() {
  var self = this;

  self.gameMain = buildDom(`
    <main class="game">
      <div class="canvas">
        <canvas></canvas>
      </div>
      <header>
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>
     
    </main>
  `);

  self.canvasParentElement = self.gameMain.querySelector ('.canvas');
  self.canvasElement = self.gameMain.querySelector('canvas');

  self.livesElement = self.gameMain.querySelector('.lives .value');
  self.scoreElement = self.gameMain.querySelector('.score .value');

  document.body.appendChild(self.gameMain);

  self.width = window.innerWidth / 4;
  self.height = window.innerHeight / 1.5;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.player = new Player (self.canvasElement, 3);

  self.handleKeyDown = function (event) {
    console.log(event)
    if (event.key === 'ArrowLeft') {
      self.player.x -= 46;
    } else if (event.key === 'ArrowRight') {
      self.player.x += 46;
    }
    self.player.draw()
    self.enemies = [];
    self.startLoop();
  };

  document.body.addEventListener('keydown', self.handleKeyDown);

  self.player.draw();    
};
Game.prototype.startLoop = function () {
  var self = this;

  var ctx = self.canvasElement.getContext('2d');

  function loop() {

    if (Math.random() > 0.99) {
      var x = self.canvasElement.width * Math.random();
      self.enemies.push(new Enemy(self.canvasElement, x, 5));
    } 

    self.player.update();
    self.enemies.forEach(function(item) {
      item.update();
    });

    self.enemies = self.enemies.filter(function(item) {
      return item.isInScreen();
    })

    ctx.clearRect(0, 0, self.width, self.height);
    self.player.draw();
    self.player.update();
    self.enemies.forEach(function (item) {
      item.draw();
    });
    
    window.requestAnimationFrame(loop);

  }
  window.requestAnimationFrame(loop);
};

