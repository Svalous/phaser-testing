var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.image('diamond', 'assets/diamond.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

var platforms;
var player;
var cursors;

var stars;
var diamonds;
var score = 0;
var scoreText;

var baddies;
var baddieLoop;

function create() {
	// level setup
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, 0, 'sky');
	platforms = game.add.group();
	platforms.enableBody = true;
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// player setup
	player = game.add.sprite(150, game.world.height - 150, 'dude');
	game.physics.arcade.enable(player);
	// I don't like the bounce!
	//player.body.bounce.y = 0.2;
	// I want more gravity
	player.body.gravity.y = 500;
	player.body.collideWorldBounds = true;
	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);

	// baddie setup
	baddies = game.add.group();
	baddies.enableBody = true;
	var testMan = baddies.create(32, game.world.height - 400, 'baddie');
	game.physics.arcade.enable(testMan);
	testMan.body.gravity.y = 500;
	testMan.body.collideWorldBounds = true;
	testMan.animations.add('left', [0, 1], 10, true);
	testMan.animations.add('right', [2, 3], 10, true);
	testMan.body.velocity.x = 200;
	// set baddie to move on a loop
	baddieLoop = game.time.events.loop(Phaser.Timer.SECOND, moveBaddie, this);

	// stars
	stars = game.add.group();
	stars.enableBody = true;
	for( var i = 0; i < 12; i++ )
	{
		var star = stars.create(i * 70, 0, 'star');
		star.body.gravity.y = 300;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

	diamonds = game.add.group();
	diamonds.enableBody = true;
	var diamond = diamonds.create(game.world.width - 100, 100,'diamond')
	diamond.body.immovable = true;


	// score
	scoreText = game.add.text(16, 16, 'Score: 0', {fontSize: '32px', fill: '#000'});

	// cursors
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	// collisons
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.collide(baddies, platforms);

	// player and star overlap 
	game.physics.arcade.overlap(player, stars, collectStar, null, this);
	game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this);
	game.physics.arcade.overlap(player, baddies, killPlayer, null, this);

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
	
	incScore(10);
}

function collectDiamond( player, diamond ) {
	// remove diamond from screen
	diamond.kill();

	incScore(50);
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

