/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Game_1 = __webpack_require__(1);
	window.onload = function () { return new Game_1.Game; };


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Bootstrap_1 = __webpack_require__(2);
	var LaunchSite_1 = __webpack_require__(3);
	var Game = (function (_super) {
	    __extends(Game, _super);
	    function Game(selector) {
	        if (selector === void 0) { selector = 'game'; }
	        _super.call(this, '100%', '100%', Phaser.AUTO, selector, null);
	        this.state.add('bootstrap', Bootstrap_1.Bootstrap, false);
	        this.state.add('launch-site', LaunchSite_1.LaunchSite, false);
	        this.state.start('bootstrap');
	    }
	    return Game;
	}(Phaser.Game));
	exports.Game = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Bootstrap = (function (_super) {
	    __extends(Bootstrap, _super);
	    function Bootstrap() {
	        _super.apply(this, arguments);
	    }
	    Bootstrap.prototype.preload = function () {
	        this.load.image('background', '../assets/background.png');
	        this.load.image('glow-directed', '../assets/glow-directed.png');
	        this.load.image('glow', '../assets/glow.png');
	    };
	    Bootstrap.prototype.create = function () {
	        // Input
	        this.input.maxPointers = 1;
	        // Scaling
	        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	        // Physics
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);
	        this.game.physics.arcade.gravity = new Phaser.Point(0, 175);
	        // Start launch site scene
	        this.game.state.start('launch-site');
	    };
	    return Bootstrap;
	}(Phaser.State));
	exports.Bootstrap = Bootstrap;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FireworkLauncher_1 = __webpack_require__(4);
	var LaunchSite = (function (_super) {
	    __extends(LaunchSite, _super);
	    function LaunchSite() {
	        _super.apply(this, arguments);
	    }
	    LaunchSite.prototype.create = function () {
	        this.background = this.add.sprite(0, 0, 'background');
	        this.background.alpha = 0.5;
	        this.fireworkLauncher = new FireworkLauncher_1.FireworkLauncher(this.game);
	    };
	    return LaunchSite;
	}(Phaser.State));
	exports.LaunchSite = LaunchSite;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var FireworkLauncher = (function () {
	    function FireworkLauncher(game) {
	        this.game = game;
	        this.bindEvents();
	    }
	    FireworkLauncher.prototype.bindEvents = function () {
	        this.game.input.onTap.add(this.launch, this);
	    };
	    FireworkLauncher.prototype.launch = function (pointer) {
	        var _this = this;
	        // Make firework
	        var firework = this.game.add.sprite(pointer.x, this.game.world.height, 'glow-directed');
	        firework.setScaleMinMax(0.5);
	        firework.anchor.set(0.5);
	        firework.tint = Phaser.Color.getRandomColor(200);
	        // Launch upwards, with gravity affecting it
	        this.game.physics.arcade.enableBody(firework);
	        firework.body.velocity.setTo(Phaser.Math.between(-20, 20), Phaser.Math.between(-500, -400));
	        // Explode after timer
	        var fuseTime = 1500;
	        var fuseTimeWithMarginOfError = Phaser.Math.between(fuseTime - 150, fuseTime + 150);
	        setTimeout(function () {
	            _this.explode(new Phaser.Point(firework.position.x, firework.position.y));
	            firework.kill();
	        }, fuseTimeWithMarginOfError);
	    };
	    FireworkLauncher.prototype.explode = function (point) {
	        var emitter = new Phaser.Particles.Arcade.Emitter(this.game, point.x, point.y, 100);
	        // Set graphic, tint, scale, motion
	        emitter.makeParticles('glow');
	        var color = Phaser.Color.getRandomColor(50);
	        emitter.forEach(function (p) { return p.tint = color; }, emitter);
	        emitter.minParticleScale = emitter.maxParticleScale = 0.2;
	        emitter.setXSpeed(-175, 175);
	        emitter.setYSpeed(-275, 125);
	        // Explode!
	        emitter.start(true, 0, 0, Phaser.Math.between(20, 30));
	    };
	    return FireworkLauncher;
	}());
	exports.FireworkLauncher = FireworkLauncher;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map