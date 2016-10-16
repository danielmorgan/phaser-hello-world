export class FireworkLauncher {
    private emitter: Phaser.Particles.Arcade.Emitter;

    public constructor(game: Phaser.Game) {
        this.emitter = game.add.emitter(game.world.centerX, game.world.height, 1);
        this.emitter.width = 1;
        this.emitter.makeParticles(['rocket', 'rocket2']);
        this.emitter.minParticleScale = this.emitter.maxParticleScale = 1;
        this.emitter.setYSpeed(-400, -200);
        this.emitter.setXSpeed(-20, 20);
        this.emitter.minRotation = -20;
        this.emitter.maxRotation = 20;
        this.emitter.start(false, 750);
    }

    public launch(target: Phaser.Pointer) {
        console.log('launching', this, target);
    }
}