export class Game {
    private game: Phaser.Game;
    private emitter: any;

    public constructor(selector: string = 'game') {
        const resolution = { width: window.innerWidth,
                            height: window.innerHeight,
                            ratio: window.innerWidth / window.innerHeight };

        this.game = new Phaser.Game('100%',
                                    '100%',
                                    Phaser.AUTO,
                                    selector,
                                    { preload: this.preload,
                                      create: this.create,
                                      update: this.update,
                                      render: this.render });
    }

    public fire(pointer) {
        console.log('firing', pointer);
        const firework = this.game.add.sprite(pointer.worldX, pointer.worldY, 'firework');
        this.game.physics.arcade.enable(firework);
        firework.body.collideWorldBounds = true;
    }

    private preload() {
        console.log('preload');
    }

    private create() {
        console.log('create');

        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        this.game.physics.arcade.gravity.y = -100;
        this.game.input.onTap.add(this.fire.bind(this), this);
    }

    private update() {
        console.log('update');

        this.emitter.renderer.clear(0.05);
    }

    private render() {
      this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }
}
