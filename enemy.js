function Enemy (canvas, x, speed) {
    var self = this;
    
    self.canvas = canvas;
    self.size = 50;
    self.x = canvas.height;
    self.y = canvas.height;
    self.speed = speed;
    self.ctx = self.canvas.getContext('2d');
}
Enemy.prototype.update = function () {
    var self = this;
    
    self.y = self.y +  self.speed;
 };

Enemy.prototype.draw = function () {
    var self = this;

 
    self.ctx.fillStyle = 'black';
    self.ctx.fillRect(self.x - self.size / 2, self.y - self.size / 2, self.size, self.size);


}
Enemy.prototype.isInScreen = function() {
    var self = this;
    return self.y + self.size / 2 > 0;

}