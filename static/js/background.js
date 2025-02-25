class SkyBackgroundScene extends Phaser.Scene {
    constructor() {
        super("SkyBackgroundScene");
    }

    preload() {
        const data = JSON.parse(document.getElementById("phaser-data").textContent);
        for (let i = 0; i < data.sky.length; i++) {
            this.load.image(`sky_${i}`, data.sky[i]);
        }
    }

    create() {
        this.sky = [];
        for (let i = 0; i < 4; i++) {
            const sky_texture = this.textures.get(`sky_${i}`);
            const frame = sky_texture.getSourceImage();
            const sky_width = frame.width;
            const sky_height = frame.height;
            const sky = this.add.tileSprite(this.scale.width / 2, this.scale.height / 2, sky_width, sky_height, sky_texture);
            sky.setScale(this.scale.width / sky_width, this.scale.height / sky_height);
            sky.setScrollFactor(0);
            this.sky.push(sky);
        }
    }

    update(time, delta) {
        this.sky.forEach(tileSprite => {
            tileSprite.tilePositionX += 0.2;
        });
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight
    },
    scene: [SkyBackgroundScene],
}

const game = new Phaser.Game(config);

window.addEventListener("resize", () => {
    console.log("resize");
    game.scale.resize(window.innerWidth, window.innerHeight);
});
