import { FireworkLauncher } from './FireworkLauncher';

export class Game {
    private game: Phaser.Game;
    private fireworkLauncher: FireworkLauncher;

    public constructor(selector: string = 'game') {
        this.game = new Phaser.Game('100%',
                                    '100%',
                                    Phaser.AUTO,
                                    selector,
                                    { preload: this.preload,
                                      create: this.create,
                                      update: this.update,
                                      render: this.render });
    }

    private preload() {
        console.log('preload');

        this.game.load.image('rocket', 'assets/particle.png');
        this.game.load.image('rocket2', 'assets/particle2.png');
    }

    private create() {
        console.log('create');

        // World
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        this.game.physics.arcade.gravity.y = -100;

        // Firework Launcher
        this.fireworkLauncher = new FireworkLauncher(this.game);

        // Input
        this.game.input.onDown.add(this.fireworkLauncher.launch, this.fireworkLauncher);
    }

    private update() {
        console.log('update');
    }

    private render() {
      this.game.debug.cameraInfo(this.game.camera, 32, 32);
    }
}
