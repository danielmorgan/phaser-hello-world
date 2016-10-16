export class FireworkLauncher {
    private game: Phaser.Game;
    private emitter: Phaser.Particles.Arcade.Emitter;

    public constructor(game: Phaser.Game) {
        this.game = game;
        this.emitter = this.game.add.emitter();

        this.emitter.width = 1;
        this.emitter.makeParticles(['rocket', 'rocket2']);
        this.emitter.minParticleScale = this.emitter.maxParticleScale = 1;
        this.emitter.setYSpeed(-800, -500);
        this.emitter.setXSpeed(-20, 20);
        this.emitter.minRotation = -20;
        this.emitter.maxRotation = 20;
        this.emitter.lifespan = 500;
    }

    public launch(target: Phaser.Pointer) {
        console.log('launching', this, target);

        this.emitter.emitParticle(target.worldX, this.game.world.height);
    }
}