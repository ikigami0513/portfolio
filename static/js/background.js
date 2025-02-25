class SkyBackgroundScene extends Phaser.Scene {
    constructor() {
        super({ key: "SkyBackgroundScene" });
        this.sky = []; // Initialiser le tableau ici
    }

    preload() {
        const data = JSON.parse(document.getElementById("phaser-data").textContent);
        for (let i = 0; i < data.sky.length; i++) {
            this.load.image(`sky_${i}`, data.sky[i]);
        }
    }

    create() {
        for (let i = 0; i < 4; i++) {
            const sky_texture = this.textures.get(`sky_${i}`);
            const frame = sky_texture.getSourceImage();
            const sky_width = frame.width;
            const sky_height = frame.height;
            const scale_width = this.scale.width > 900 ? this.scale.width : 900;
            const sky = this.add.tileSprite(scale_width / 2, this.scale.height / 2, sky_width, sky_height, `sky_${i}`);
            sky.setScale(scale_width / sky_width, this.scale.height / sky_height);
            sky.setScrollFactor(0);
            this.sky.push(sky);
        }
    }

    update(time, delta) {
        this.sky.forEach(tileSprite => {
            tileSprite.tilePositionX += 0.2;
        });
    }

    resize() {
        this.sky.forEach(sky => {
            const sky_texture = sky.texture;
            const frame = sky_texture.getSourceImage();
            const sky_width = frame.width;
            const sky_height = frame.height;
            const scale_width = this.scale.width > 900 ? this.scale.width : 900;
            sky.setScale(scale_width / sky_width, this.scale.height / sky_height);
            sky.setPosition(scale_width / 2, this.scale.height / 2);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    scale: {
        parent: 'phaser-game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth,
        height: window.innerHeight,
        mode: Phaser.Scale.RESIZE,
    },
    scene: [SkyBackgroundScene],
};

const game = new Phaser.Game(config);

window.addEventListener("resize", () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
    const scene = game.scene.getScene("SkyBackgroundScene");
    if (scene) {
        scene.resize();
    }
});
