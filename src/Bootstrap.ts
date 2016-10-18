export class Bootstrap extends Phaser.State {
    preload() {
        this.load.image('background', '../assets/background.png');
        this.load.image('glow-directed', '../assets/glow-directed.png');
        this.load.image('glow', '../assets/glow.png');
    }

    create() {
        // Input
        this.input.maxPointers = 1;
        
        // Scaling
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity = new Phaser.Point(0, 175);

        // Start launch site scene
        this.game.state.start('launch-site');
    }
}
