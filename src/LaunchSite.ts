import { FireworkLauncher } from './FireworkLauncher';

export class LaunchSite extends Phaser.State {
    background: Phaser.Sprite;
    fireworkLauncher: FireworkLauncher;

    create() {
        this.background = this.add.sprite(0, 0, 'background');

        this.fireworkLauncher = new FireworkLauncher(this.game);
    }
}
