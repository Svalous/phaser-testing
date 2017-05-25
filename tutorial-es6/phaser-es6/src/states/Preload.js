class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		game.load.image('sky', 'assets/sky.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('star', 'assets/star.png');
		game.load.image('diamond', 'assets/diamond.png');
		game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
