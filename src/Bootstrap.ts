export class Bootstrap extends Phaser.State {
    preload() {
        this.load.image('background', '../assets/background.png');
        this.load.spritesheet('rocket', '../assets/rocket.png', 185, 180, 4);
    }

    create() {
        this.input.maxPointers = 1;
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 480;
        this.scale.forcePortrait = true;
        this.scale.pageAlignVertically = true;

        this.game.state.start('launch-site');
    }
}
