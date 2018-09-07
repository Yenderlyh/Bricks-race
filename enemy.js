'use strict';

function Enemy(canvas, lane, speed) {
  var self = this;
  
  self.canvas = canvas;
  self.size = 45;
  self.x = lane ;
  self.y = 0;
  self.speed = speed;
  self.ctx = self.canvas.getContext('2d');
  self.image = new Image();
}

Enemy.prototype.update = function () {
  var self = this;

  self.y = self.y + self.speed;
};

Enemy.prototype.draw = function () {
  var self = this;
  
  self.image = document.getElementById ("enemy")
  self.ctx.drawImage(self.image, self.x - self.size, self.y - self.size, self.size, self.size)

 

};

Enemy.prototype.isInScreen = function () {
  var self = this;
  return self.x + self.size / 2 > 0;
}
