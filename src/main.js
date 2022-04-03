import 'phaser';

import Game from './scenes/Game.js';
import GameOver from './scenes/GameOver.js';


import './scss/styles.scss';

// class PlayGame extends Phaser.Scene {
//     constructor() {
//         super("PlayGame");
//     }
//     preload() {
//         this.load.image('logo', 'assets/tiles.png');
//     }
//     create() {
//         this.image = this.add.image(400, 300, 'logo');
//     }
//     update() {
//         this.image.rotation += 0.01;
//     }
// }



let config = {
    width: 640,
    height: 480,
    parent: 'mario',
    backgroundColor: '#FFFFAC',
    title: 'Tilemap',
    url: 'webtips.dev',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true, // Set it to true if you want debugger enabled by default
            gravity: {
                y: 1000
            }
        }
    },
    scene: [
        Game,
        GameOver,
    ]
};

new Phaser.Game(config);