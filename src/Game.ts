export class Game {
    private game: Phaser.Game;
    private text: Phaser.Text;

    public constructor(selector: string = 'game') {
        this.game = new Phaser.Game(800, 600,
                                    Phaser.AUTO,
                                    selector,
                                    { preload: this.preload,
                                      create: this.create,
                                      update: this.update,
                                      render: this.render });
    }

    private preload() {
        console.log('preload');
    }

    private create() {
        console.log('create');

        this.text = this.game.add.text(this.game.width / 2,
            this.game.height / 2,
            'Hello World', 
            { font: '32px Arial',
              fill: '#ffffff',
              align: 'center' });

        this.text.anchor = new Phaser.Point(0.5, 0.5);
    }

    private update() {
        console.log('update');

        this.text.rotation += 0.03;
    }

    private render() {
    }
}
