export class FireworkDesigner extends Phaser.State {
    background: Phaser.Sprite;
    firework: Phaser.Sprite;
    emitter: Phaser.Particles.Arcade.Emitter;

    create() {
        // Physics
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity = new Phaser.Point(0, 175);
        this.physics.arcade.setBounds(0, 0, this.world.width, 500);

        // Graphics
        this.background = this.add.sprite(0, 0, 'worktop');
        this.firework = this.add.sprite(this.world.centerX, this.world.centerY, 'firework');
        this.physics.arcade.enable(this.firework);
        this.firework.body.immovable = true;

        // Particle emitter
        this.emitter = new Phaser.Particles.Arcade.Emitter(this.game, this.world.centerX, 50, 100);
        this.emitter.makeParticles('grain');
        this.emitter.minParticleScale = this.emitter.maxParticleScale = 0.15;
        this.emitter.setXSpeed(0, 0);
        this.emitter.setYSpeed(0, 0);
        this.emitter.setRotation(0, 0);
        this.emitter.bounce.setTo(0.5);
        this.emitter.enableBody = this.emitter.enableBodyDebug = true;
        this.physics.arcade.enable(this.emitter);

        // Bind inputs
        this.input.onDown.add(this.pour, this);
    }

    pour(pointer: Phaser.Pointer) {
        this.emitter.start(false, 0, 250, 1);
    }

    update() {
        console.log('designer update');
        this.game.debug.body(this.firework);
        this.emitter.forEachAlive(p => this.game.debug.body(p), this.emitter);
        this.physics.arcade.collide(this.emitter, this.firework, (foo, bar) => console.log('collide', foo, bar), (foo, bar) => ('process', foo, bar), this);
    }
}