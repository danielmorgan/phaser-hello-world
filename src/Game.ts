import { Bootstrap } from './Bootstrap';
import { FireworkDesigner } from './FireworkDesigner';
import { LaunchSite } from './LaunchSite';

export class Game extends Phaser.Game {
    private game: Phaser.Game;

    public constructor(selector: string = 'game') {
        super('100%', '100%', Phaser.AUTO, selector, null);

        this.state.add('bootstrap', Bootstrap, false);
        this.state.add('firework-designer', FireworkDesigner, false);
        this.state.add('launch-site', LaunchSite, false);

        this.state.start('bootstrap');
    }
}
