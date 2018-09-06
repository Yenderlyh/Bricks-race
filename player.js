function Player(canvas, lives) {
  var self = this;
  
  self.canvas = canvas;
  self.lives = lives;
  self.size = 45;
  self.x = self.size;
  self.y = canvas.height;
  self.ctx = self.canvas.getContext('2d');
  self.image = new Image();

};

Player.prototype.update = function () {
  var self = this;

  if (self.x <= self.size) {
      self.x += 1;
  } 
  if (self.x >= self.canvas.width) {
      self.x -= 1;
  }
};

Player.prototype.draw = function () {
  var self = this;
    self.image = document.getElementById ("carro")
    //self.ctx.fillStyle = 'black';
    if (self.image) {
      self.ctx.drawImage(self.image, self.x - self.size, self.y - self.size , self.size, self.size);
    }
   //self.ctx.fillRect(self.x - self.size, self.y - self.size , self.size, self.size);
    //},false);
}

Player.prototype.collidesWithEnemy = function (enemy) {
  var self = this;

  var collidesRight = self.x > enemy.x - enemy.size ;
  var collidesLeft = self.x  < enemy.x + enemy.size ;
  var collidesTop = self.y < enemy.y + enemy.size ;
  var collidesBottom = self.y - 20  > enemy.y - enemy.size;

  if (collidesLeft && collidesRight && collidesTop  && collidesBottom ){
    return true;

  }
  return false;
}

Player.prototype.collided = function () {
  var self = this;

  self.lives--;
}

