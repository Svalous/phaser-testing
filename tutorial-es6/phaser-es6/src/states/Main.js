import ExampleObject from 'objects/ExampleObject';

// Globals
var platforms;
var player;
var cursors;

var stars;
var diamonds;
var score = 0;
var scoreText;

var baddies;
var baddieLoop;

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// Skybox
		this.game.add.sprite(0, 0, 'sky');

		// Platforms
		platforms = this.game.add.group();
		platforms.enableBody = true;
		var ground = platforms.create(0, this.game.world.height - 64, 'ground');
		ground.scale.setTo(2, 2);
		ground.body.immovable = true;
		var ledge = platforms.create(400, 400, 'ground');
		ledge.body.immovable = true;
		ledge = platforms.create(-150, 200, 'ground');
		ledge.body.immovable = true;

		//Example of including an object
		//let exampleObject = new ExampleObject(this.game);

		// player setup
		player = this.game.add.sprite(150, this.game.world.height - 150, 'dude');
		this.game.physics.arcade.enable(player);
		// I don't like the bounce!
		//player.body.bounce.y = 0.2;
		// I want more gravity
		player.body.gravity.y = 500;
		player.body.collideWorldBounds = true;
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);

		// baddie setup
		baddies = this.game.add.group();
		baddies.enableBody = true;
		var testMan = baddies.create(32, this.game.world.height - 400, 'baddie');
		this.game.physics.arcade.enable(testMan);
		testMan.body.gravity.y = 500;
		testMan.body.collideWorldBounds = true;
		testMan.animations.add('left', [0, 1], 10, true);
		testMan.animations.add('right', [2, 3], 10, true);
		testMan.body.velocity.x = 200;
		// set baddie to move on a loop
		baddieLoop = this.game.time.events.loop(Phaser.Timer.SECOND, this.moveBaddie, this);

		// stars
		stars = this.game.add.group();
		stars.enableBody = true;
		for( var i = 0; i < 12; i++ )
		{
			var star = stars.create(i * 70, 0, 'star');
			star.body.gravity.y = 300;
			star.body.bounce.y = 0.7 + Math.random() * 0.2;
		}

		diamonds = this.game.add.group();
		diamonds.enableBody = true;
		var diamond = diamonds.create(this.game.world.width - 100, 100,'diamond')
		diamond.body.immovable = true;


		// score
		scoreText = this.game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#000'});

		// cursors
		cursors = this.game.input.keyboard.createCursorKeys();

	}

	update() {
		// collisons
		this.game.physics.arcade.collide(player, platforms);
		this.game.physics.arcade.collide(stars, platforms);
		this.game.physics.arcade.collide(baddies, platforms);

		// player and star overlap 
		this.game.physics.arcade.overlap(player, stars, collectStar, null, this);
		this.game.physics.arcade.overlap(player, diamonds, this.collectDiamond, null, this);
		this.game.physics.arcade.overlap(player, baddies, this.killPlayer, null, this);

		// cursor
		player.body.velocity.x = 0;
		if( cursors.left.isDown )
		{
			player.body.velocity.x = -200;
			player.animations.play('left');
		}
		else if( cursors.right.isDown )
		{
			player.body.velocity.x = 200;
			player.animations.play('right');
		}
		else
		{
			player.animations.stop();
			player.frame = 4;
		}

		if( cursors.up.isDown && player.body.touching.down )
		{
			player.body.velocity.y = -450;
		}

	}

	function incScore( x ) {
		score += x;
		scoreText.text = 'Score: ' + score;
	}

	function collectStar( player, star ) {
		// removes star from screen
		star.kill();

		this.incScore(10);
	}

	function collectDiamond( player, diamond ) {
		// remove diamond from screen
		diamond.kill();

		this.incScore(50);
	}

	function moveBaddie() {
		// moves the baddie
		baddies.children[0].body.velocity.x *= -1;
		if( baddies.children[0].body.velocity.x > 0 )
			baddies.children[0].animations.play('right');
		else
			baddies.children[0].animations.play('left');
	}

	function killPlayer( player, enemy ) {
		player.kill();
		// must remove loop before .kill() or game will crash
		game.time.events.remove(baddieLoop);
		enemy.kill();
		scoreText.text = "Game over!";
	}


}

export default Main;
