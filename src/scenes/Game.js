import Player from '../objects/Player.js';
import Coin from '../objects/Coin.js';
import Goomba from '../objects/Goomba.js';
import Flag from '../objects/Flag.js';

import generateAnimations from '../objects/animations.js';

class Game extends Phaser.Scene {

    constructor() {
        super('Game');
    }

    preload() {
        this.load.tilemapTiledJSON('map', './assets/map.json');
        this.load.image('tiles', './assets/tiles.png');

        this.load.atlas('atlas', './assets/mario.png', './assets/mario_atlas.json');

        this.load.on('complete', () => {
            generateAnimations(this);
        });
    }

    create() {
        const tiles = {
            EMPTY: -1,
            FLAG_LEFT: 443,
        };

        const noCollisionTiles = [
            tiles.EMPTY,
            tiles.FLAG_LEFT
        ];

        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('tiles', 'tiles');
        this.platform = this.map.createStaticLayer('platform', this.tileset, 0, 0);
        this.map.createStaticLayer('background', this.tileset, 0, 0);


        this.player = new Player(this, 25, 25);
        this.coins = new Coin(this);
        this.goombas = new Goomba(this);

        this.flag = new Flag(this);


        this.platform.setCollisionByExclusion(noCollisionTiles, true);
    }

    update() {
        this.inputs = this.input.keyboard.createCursorKeys();
        this.player.update(this.inputs);
        this.coins.update();
        this.goombas.update();
    }
}

export default Game;