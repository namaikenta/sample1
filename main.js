enchant();
window.onload=function(){
	
    var game=new Game(320, 320);
    game.preload('icon0.gif');
    
    game.onload=function(){
    	var scene = game.rootScene
    	scene.backgroundColor = "black";
    	
  		game.rootScene.addEventListener('enterframe', function(){
  			var NUM = Math.random() * 0.2;
		  	var enemy = new Sprite(16, 16);
			enemy.image=game.assets['icon0.gif'];
	  		enemy.frame = 15;
	  		enemy.x = (320 - 32) * Math.random();
		  	enemy.y = 320 / 2;
		  	game.rootScene.addChild(enemy);
		  	var SPEED = 3;
			if(NUM < 0.1){
		  		enemy.addEventListener('enterframe', function(){
		  			this.y += SPEED;
		  		});
		  	};
		  	
		  	if(NUM > 0.1){
		  		enemy.addEventListener('enterframe', function(){
		  			this.y -= SPEED;
		  		});
		  	};
		  	
		});
		
   };

  game.start();
  
};