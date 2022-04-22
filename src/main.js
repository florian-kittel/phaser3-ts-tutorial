import 'phaser';

import Game from './scenes/Game.js';
import GameOver from './scenes/GameOver.js';
import './scss/styles.scss';

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
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  scene: [
    Game,
    GameOver,
  ]
};

new Phaser.Game(config);