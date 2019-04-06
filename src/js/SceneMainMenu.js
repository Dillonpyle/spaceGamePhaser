import sprBtnPlay from '../assets/sprBtnPlay.png';
import sprBtnPlayHover from "../assets/sprBtnPlayHover.png";
import sprBtnPlayDown from "../assets/sprBtnPlayDown.png";
import prBtnRestart from "../assets/sprBtnRestart.png";
import sprBtnRestartHover from "../assets/sprBtnRestartHover.png";
import sprBtnRestartDown from "../assets/sprBtnRestartDown.png";
import ScrollingBackground from './ScrollingBackground';
import sprBg0 from '../assets/sprBg0.png';
import sprBg1 from "../assets/sprBg1.png";



export default class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMainMenu" });
    }
    preload() {
        this.load.image("sprBg0", sprBg0);
        this.load.image("sprBg1", sprBg1);
        this.load.image("sprBtnPlay", sprBtnPlay);
        this.load.image("sprBtnPlayHover", sprBtnPlayHover);
        this.load.image("sprBtnPlayDown", sprBtnPlayDown);
        this.load.image("sprBtnRestart", prBtnRestart);
        this.load.image("sprBtnRestartHover", sprBtnRestartHover);
        this.load.image("sprBtnRestartDown", sprBtnRestartDown);
        //this.load.audio("sndBtnOver", "../assets/sndBtnOver.wav");
        //this.load.audio("sndBtnDown", "../assets/sndBtnDown.wav");
    }
    create() {


        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprBtnPlay"
        );
        this.btnPlay.setInteractive();
        this.btnPlay.on("pointerover", function () {
            this.btnPlay.setTexture("sprBtnPlayHover"); // set the button texture to sprBtnPlayHover
            // this.sfx.btnOver.play(); // play the button over sound
        }, this);
        this.btnPlay.on("pointerout", function () {
            this.setTexture("sprBtnPlay");
        });
        this.btnPlay.on("pointerdown", function () {
            this.btnPlay.setTexture("sprBtnPlayDown");
            //this.sfx.btnDown.play();
        }, this);
        this.btnPlay.on("pointerup", function () {
            this.btnPlay.setTexture("sprBtnPlay");
            this.scene.start("SceneMain");
        }, this);

        this.title = this.add.text(this.game.config.width * 0.5, 128, "SPACE SHOOTER", {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5);
        this.backgrounds = [];
        for (var i = 0; i < 5; i++) {
            var keys = ["sprBg0", "sprBg1"];
            var key = keys[Phaser.Math.Between(0, keys.length - 1)];
            var bg = new ScrollingBackground(this, key, i * 10);
            this.backgrounds.push(bg);
        }
    }
    update() {
        for (var i = 0; i < this.backgrounds.length; i++) {
            this.backgrounds[i].update();
        }
    }
}