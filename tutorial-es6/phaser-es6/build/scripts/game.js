(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesGameOver = require('states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 800, 600, Phaser.AUTO, '');

		this.state.add('Boot', _statesBoot2['default'], false);
		this.state.add('Preload', _statesPreload2['default'], false);
		this.state.add('GameTitle', _statesGameTitle2['default'], false);
		this.state.add('Main', _statesMain2['default'], false);
		this.state.add('GameOver', _statesGameOver2['default'], false);

		this.state.start('Boot');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":3,"states/GameOver":4,"states/GameTitle":5,"states/Main":6,"states/Preload":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleObject = function ExampleObject(game) {
	_classCallCheck(this, ExampleObject);
};

//Do something
exports["default"] = ExampleObject;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		_get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {}
	}, {
		key: "create",
		value: function create() {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.state.start("Preload");
		}
	}]);

	return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
	_inherits(GameOver, _Phaser$State);

	function GameOver() {
		_classCallCheck(this, GameOver);

		_get(Object.getPrototypeOf(GameOver.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameOver, [{
		key: "create",
		value: function create() {}
	}, {
		key: "restartGame",
		value: function restartGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameOver;
})(Phaser.State);

exports["default"] = GameOver;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
	_inherits(GameTitle, _Phaser$State);

	function GameTitle() {
		_classCallCheck(this, GameTitle);

		_get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameTitle, [{
		key: "create",
		value: function create() {}
	}, {
		key: "startGame",
		value: function startGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsExampleObject = require('objects/ExampleObject');

var _objectsExampleObject2 = _interopRequireDefault(_objectsExampleObject);

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

var Main = (function (_Phaser$State) {
	_inherits(Main, _Phaser$State);

	function Main() {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Main, [{
		key: 'create',
		value: function create() {

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
			var testMan = baddies.create(32, 150, 'baddie');
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
			for (var i = 0; i < 12; i++) {
				var star = stars.create(i * 70, 0, 'star');
				star.body.gravity.y = 300;
				star.body.bounce.y = 0.7 + Math.random() * 0.2;
			}

			diamonds = this.game.add.group();
			diamonds.enableBody = true;
			var diamond = diamonds.create(this.game.world.width - 100, 150, 'diamond');
			diamond.body.immovable = true;

			// score
			scoreText = this.game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

			// cursors
			cursors = this.game.input.keyboard.createCursorKeys();
		}
	}, {
		key: 'update',
		value: function update() {
			// collisons
			this.game.physics.arcade.collide(player, platforms);
			this.game.physics.arcade.collide(stars, platforms);
			this.game.physics.arcade.collide(baddies, platforms);

			// player and star overlap
			this.game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
			this.game.physics.arcade.overlap(player, diamonds, this.collectDiamond, null, this);
			this.game.physics.arcade.overlap(player, baddies, this.killPlayer, null, this);

			// cursor
			player.body.velocity.x = 0;
			if (cursors.left.isDown) {
				player.body.velocity.x = -200;
				player.animations.play('left');
			} else if (cursors.right.isDown) {
				player.body.velocity.x = 200;
				player.animations.play('right');
			} else {
				player.animations.stop();
				player.frame = 4;
			}

			if (cursors.up.isDown && player.body.touching.down) {
				player.body.velocity.y = -450;
			}
		}
	}, {
		key: 'incScore',
		value: function incScore(x) {
			score += x;
			scoreText.text = 'Score: ' + score;
		}
	}, {
		key: 'collectStar',
		value: function collectStar(player, star) {
			// removes star from screen
			star.kill();

			this.incScore(10);
		}
	}, {
		key: 'collectDiamond',
		value: function collectDiamond(player, diamond) {
			// remove diamond from screen
			diamond.kill();

			this.incScore(50);
		}
	}, {
		key: 'moveBaddie',
		value: function moveBaddie() {
			// moves the baddie
			baddies.children[0].body.velocity.x *= -1;
			if (baddies.children[0].body.velocity.x > 0) baddies.children[0].animations.play('right');else baddies.children[0].animations.play('left');
		}
	}, {
		key: 'killPlayer',
		value: function killPlayer(player, enemy) {
			player.kill();
			// must remove loop before .kill() or game will crash
			this.game.time.events.remove(baddieLoop);
			enemy.kill();
			scoreText.text = "Game over!";
		}
	}]);

	return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"objects/ExampleObject":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
	_inherits(Preload, _Phaser$State);

	function Preload() {
		_classCallCheck(this, Preload);

		_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Preload, [{
		key: 'preload',
		value: function preload() {
			/* Preload required assets */
			this.game.load.image('sky', 'assets/sky.png');
			this.game.load.image('ground', 'assets/platform.png');
			this.game.load.image('star', 'assets/star.png');
			this.game.load.image('diamond', 'assets/diamond.png');
			this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
			this.game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
		}
	}, {
		key: 'create',
		value: function create() {
			//NOTE: Change to GameTitle if required
			this.game.state.start("Main");
		}
	}]);

	return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
