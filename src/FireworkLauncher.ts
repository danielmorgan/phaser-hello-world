export class FireworkLauncher {
    game: Phaser.Game;

    constructor(game: Phaser.Game) {
        this.game = game;

        this.bindEvents();
    }

    bindEvents() {
        this.game.input.onTap.add(this.launch, this);
    }

    launch(pointer: Phaser.Pointer) {
        // Make firework
        const firework = this.game.add.sprite(pointer.x, this.game.world.height, 'glow-directed');
        firework.setScaleMinMax(0.5);
        firework.anchor.set(0.5);
        firework.tint = Phaser.Color.getRandomColor(200);

        // Launch upwards, with gravity affecting it
        this.game.physics.arcade.enableBody(firework);
        (<Phaser.Physics.Arcade.Body>firework.body).velocity.setTo(
            Phaser.Math.between(-20, 20),
            Phaser.Math.between(-500, -400)
        );

        // Explode after timer
        const fuseTime = 1500;
        const fuseTimeWithMarginOfError = Phaser.Math.between(fuseTime - 150, fuseTime + 150);
        setTimeout(() => {
            this.explode(new Phaser.Point(firework.position.x, firework.position.y));
            firework.kill();
        }, fuseTimeWithMarginOfError);
    }

    explode(point: Phaser.Point) {
        const emitter = new Phaser.Particles.Arcade.Emitter(this.game, point.x, point.y, 100);
        
        // Set graphic, tint, scale, motion
        emitter.makeParticles('glow');
        const color = Phaser.Color.getRandomColor(50);
        emitter.forEach(p => p.tint = color, emitter);
        emitter.minParticleScale = emitter.maxParticleScale = 0.2;
        emitter.setXSpeed(-175, 175);
        emitter.setYSpeed(-275, 125);

        // Explode!
        emitter.start(true, 0, 0, Phaser.Math.between(20, 30));
    }
}
