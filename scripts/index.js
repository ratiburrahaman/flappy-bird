import { GameScene } from './gameScene.js'
import { LoadScene } from './loadScene.js';
import { MenuScene } from './MenuScene.js';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#98d687',
    pixelArt: false,
    width: 390,
    height: 600,
    physics: {
        default: 'arcade',
		arcade: {
			gravity: { y: 300 },
            debug: false
		}
    },
    scale: {
        mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [LoadScene, MenuScene, GameScene]
};

const game = new Phaser.Game(config);
