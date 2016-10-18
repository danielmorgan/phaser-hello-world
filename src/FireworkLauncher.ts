export class FireworkLauncher {
    game: Phaser.Game;
    emitter: Phaser.Particles.Arcade.Emitter;

    constructor(game: Phaser.Game) {
        this.game = game;
        this.emitter = new Phaser.Particles.Arcade.Emitter(game, game.world.centerX, game.world.height);

        this.bindEvents();
    }

    bindEvents() {
        this.game.input.onTap.add(this.launch, this);
    }

    launch(pointer: Phaser.Pointer) {
        this.emitter.minParticleScale = 0.03;
        this.emitter.maxParticleScale = 0.06;
        this.emitter.setXSpeed(-100,100);
        this.emitter.setYSpeed(-400,-700);
        this.emitter.gravity = 175;
        this.emitter.makeParticles('rocket', [1, 2, 3, 4], 10);
        this.emitter.start(true, 0, 100, 1);
    }
}
