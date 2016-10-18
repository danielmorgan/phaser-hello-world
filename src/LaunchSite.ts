import { FireworkLauncher } from './FireworkLauncher';

export class LaunchSite extends Phaser.State {
    background: Phaser.Sprite;
    fireworkLauncher: FireworkLauncher;

    create() {
        this.background = this.add.sprite(0, 0, 'background');
        this.background.alpha = 0.5;
        this.fireworkLauncher = new FireworkLauncher(this.game);
    }
}
