# Bricks-race

## Description
The objective of the game is to lead the brick trought the race without collisioning with other bricks.

The player has to dodge the obstacles during the race and will only have 3 oportunities to win the game. 


 • controllers:

	· <- and ->  to control the movement of the player  (left - right)
	· [ Space ] To pause the game

####winning: 
- If the score is 100 the player wins!
####losing:
- If there is a collision the player will lose lives and lower the score.  If the score is 0 or the player has no lives. Loses! 


## MVP (DOM - CANVAS)
Canvas - Javascript

- Create player
- Create enemyBrick
- Create startLoop 

## Backlog
- Transition screen
- Bonus: 
	·Time++
	· Lives++
	· Score ++ 
- Pause 
- Levels (Speed change)
- Music
- Design
	

## Data structure
Classes and methods definition.

### Main JS
```
- buildDom();
- main();
- buildSplash();
- destroySplash();
- startGame();

- var game = newGame() {
    game.start();
    game.onOver();}
- buildGameOver() {
    gameOverMain = buildDom();
- destroyGameOver();
```

### Game JS
```
- Game();
- self.start();
- self.canvas;
- self.score;
- self.width;
- self.height;
- self.player;
- self.player.update();
- self.player.draw();
- self.enemies;
- self.handleKeyDown();
- self.startLoop();
- loop();
- self.checkCollision();
- ctx;
- onOver();
- self.destroy();
```

### Player JS
```
- Player(){
	self.canvas;
	self.lives;
	self.size;
	self.x;
	self.y;
	self.direction;
	self.speed;
	self.ctx;
}
- setDirection();
- collidesWithEnemy();
- collided();
- update();
- draw();
```
### Enemy JS
```
- Enemy(){
	self.canvas;
	self.lives;
	self.size;
	self.x;
	self.y;
	self.speed;
	self.ctx;
}

- update();
- draw();
- isInScreen();
```
## States y States Transitions
Definition of the different states and their transition (transition functions)

 · splashScreen
 · gameScreen
 · gameoverScreen
 · winningScreen
 
## Task

### Main JS
- buildDom()
- Create the Main function
- state transitions
- buildSplash()
- startGame() 
- gameOver()
- Win
 

### Game JS
 

- loop function w/ requestAnimationFrame (start loop)
- draw limits of screen
- game.start()
- create player
- draw player (player.draw)
- player movement
- update player position

- collision player with limits

- create 1 enemy
- draw enemy
- update enemy position

- collision player with enemy

- create more enemies

- Show score
- Show lives x 3
- if player collides lives--
- if player score === 100 player wins
- if score === 0 gameOver()


 


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
Game
