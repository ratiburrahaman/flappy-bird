import { Bird } from "./prefabs/bird.js";
import { Pipe } from "./prefabs/pipe.js";
import { PipeContainer } from "./prefabs/pipeContainer.js";
import { getCenterX, getCenterY, getHeight, getWidth, option, randomThemeIndex } from "./utils.js";

export class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    init() {

        
    }


    create() {


        this.pipeGroup = this.add.group();

        this.score = 0;
        this.isGameOver =  false;

        this.gameScene = this;

        this.pipes = this.add.group({});

        this.scoreText = this.add
        .bitmapText(
          this.sys.canvas.width / 2 - 14,
          30,
          'font',
          this.score
        )
        .setDepth(2);

        this.background = this.add
        .tileSprite(0, 0, 1068, getHeight(this), `bg_${option.themeIndex}`)
        .setOrigin(0, 0);

     //   this.background.displayHeight = getHeight(this);
     
        this.bird = new Bird(this, 50, 100, `player_${option.playerIndex}`);

          this.time.addEvent({
            delay: 1500,
            callback: ()=>{
              this.addPipe(getWidth(this) + 100, Phaser.Math.FloatBetween(200, 400));
            },
            repeat: -1
        })



        this.physics.add.overlap(this.pipeGroup, this.bird, ()=>{
          if(!this.isGameOver){
            this.bird.setDead(true);
            this.gameScene.sound.play("hit");
            this.isGameOver = true;
            this.addGameOver();
          }

        });


    }

    update(){
        if (!this.bird.getDead()) {
            this.background.tilePositionX += 4;
            this.bird.update();
          } 

      
            if (this.bird.y > this.sys.canvas.height) {
              //this.scene.start('MainMenuScene');
                if(!this.isGameOver){
                    this.addGameOver();
                    this.isGameOver = true;

              }
          }


    }
    
     addPipe(x, y) {
      
        new PipeContainer(this, x, y, this.pipeGroup);

        if(!this.isGameOver){
           
          this.scoreText.setText(`${this.score}`);
          this.score += 1;
         // this.sound.play("sfx_point");
      }

    }

      addGameOver() {

        this.sound.play("die");


        this.add
        .bitmapText(
          this.sys.canvas.width / 2,
         ( this.sys.canvas.height / 2) - 50,
          'font',
          "GAME OVER"
        )
        .setDepth(2)
        .setOrigin(0.5);


        this.add
        .bitmapText(
          this.sys.canvas.width / 2,
         ( this.sys.canvas.height / 2) + 20,
          'font',
          "RETRY"
        )
        .setDepth(2)
        .setOrigin(0.5)
        .setInteractive({cursor: "pointer"})
        .on("pointerup", ()=>{
            randomThemeIndex();
            this.scene.start("GameScene");
        })

        this.add
        .bitmapText(
          this.sys.canvas.width / 2,
         ( this.sys.canvas.height / 2) + 80,
          'font',
          "HOME"
        )
        .setDepth(2)
        .setOrigin(0.5)
        .setInteractive({cursor: "pointer"})
        .on("pointerup", ()=>{
            randomThemeIndex();
            this.scene.start("MenuScene");
        })

      }

}

