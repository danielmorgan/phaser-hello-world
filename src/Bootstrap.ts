export class Bootstrap extends Phaser.State {
    preload() {
        this.load.image('worktop', 'assets/worktop.jpg');
        this.load.image('firework', 'assets/firework.png');
        this.load.image('grain', 'assets/grain.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('glow-directed', 'assets/glow-directed.png');
        this.load.image('glow', 'assets/glow.png');
    }

    create() {
        // Input
        this.input.maxPointers = 1;
        
        // Scaling
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Start launch site scene
        this.game.state.start('firework-designer');
    }
}
