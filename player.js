function Player(canvas, lives) {
  var self = this;
  
  self.canvas = canvas;
  self.lives = lives;
  self.size = 46;
  self.x = self.size - 9;
  self.y = canvas.height;
  self.ctx = self.canvas.getContext('2d');
};

Player.prototype.setDirection = function (direction) {
  var self = this;

  self.direction = direction;
};
Player.prototype.update = function () {
  var self = this;


  if (self.x <= 46) {
      self.x += 1;
  } 
  if (self.x >= self.canvas.width) {
      self.x -= 1;
  }
};

Player.prototype.draw = function () {
  var self = this;

  self.ctx.fillStyle = 'rgb(220, 20, 20)';
  self.ctx.fillRect(self.x - self.size, self.y - self.size , self.size, self.size);
};

