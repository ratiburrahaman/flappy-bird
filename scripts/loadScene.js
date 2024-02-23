
export class LoadScene extends Phaser.Scene
{

	constructor()
	{
		super('LoadScene')
    }

    preload(){


        for(let i = 1; i <= 7; i++){
            this.load.image(`player_${i}`, `assets/images/player_${i}.png`);
        }

        for(let i = 1; i <= 5; i++){
            this.load.image(`bg_${i}`, `assets/images/bg_${i}.png`);
        }


        this.load.image("bird", "assets/images/bird.png");
        this.load.image("background", "assets/images/bg.png");

        for(let i = 1; i <= 5; i++){
            this.load.image(`pipe-${i}`, `assets/images/pipe-${i}.png`);
        }

        this.load.image("prev", "assets/images/prev.png");
        this.load.image("start", "assets/images/start.png");


        this.load.bitmapFont("font", "assets/font/font.png", "assets/font/font.fnt");

        this.load.audio("sfx_point", "assets/sounds/sfx_point.wav");
        this.load.audio("hit", "assets/sounds/sfx_hit.wav");
        this.load.audio("die", "assets/sounds/sfx_die.wav");
        this.load.audio("flap", "assets/sounds/flap.wav");


    }



    create(){
        this.scene.start("MenuScene");
    }

}