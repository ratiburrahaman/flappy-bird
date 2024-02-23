import { getWidth, getCenterX, option } from "./utils.js";

export class MenuScene extends Phaser.Scene {
    constructor(){
        super("MenuScene");
    }


    init() {

    }

    create() {


        this.add
        .bitmapText(
          this.sys.canvas.width / 2,
         180,
          'font',
          "CAPTAIN $CULO"
        )
        .setDepth(2)
        .setOrigin(0.5);


        this.add
        .tileSprite(0, 0, 1068, 600, `bg_2`)
        .setOrigin(0, 0);



        let playerIndex = 1;

        let player = this.add.image(getCenterX(this), 300, "player_1").setScale(0.25).setDepth(4);

        // mask
        let shape = this.add.rectangle(getCenterX(this), 300, 150, 100, 0xffffff);
        shape.visible = false;
        let mask = shape.createBitmapMask(shape);
        player.setMask(mask);

        let isMoveable = true;


        this.add.image(100, 300, "prev").setScale(0.7).setInteractive({cursor: "pointer"})
        .on("pointerup", ()=>{
            if(isMoveable){
                isMoveable = false;
                this.tweens.add({
                    targets: player,
                    x:  50,
                    duration: 500,
                    onComplete: ()=>{
                        player.x = getCenterX(this) + 150;
                        playerIndex--;

                        if(playerIndex == 0){
                            playerIndex = 7;
                        }

                        player.setTexture(`player_${playerIndex}`);
                        this.tweens.add({
                            targets: player,
                            x:  getCenterX(this),
                            duration: 500,
                            onComplete: ()=>{
                                isMoveable = true;
                            }
                        })
                    }
                })
            }
        })

        this.add.image(getWidth(this) - 100, 300, "prev").setScale(0.7).setAngle(180).setInteractive({cursor: "pointer"})
        .on("pointerup", ()=>{
            if(isMoveable){
                isMoveable = false;
                this.tweens.add({
                    targets: player,
                    x:  50,
                    duration: 500,
                    onComplete: ()=>{
                        player.x = getCenterX(this) + 150;
                        playerIndex++;
                        if(playerIndex == 8){
                            playerIndex = 1;
                        }
                        console.log(playerIndex);
                        player.setTexture(`player_${playerIndex}`);
                        this.tweens.add({
                            targets: player,
                            x:  getCenterX(this),
                            duration: 500,
                            onComplete: ()=>{
                                isMoveable = true;
                            }
                        })
                    }
                })
            }
        })


        this.add.image(getCenterX(this), 420, "start").setScale(1).setInteractive({cursor: "pointer"})
        .on("pointerup", ()=>{
            option.playerIndex = playerIndex;
            this.scene.start("GameScene");
        })

    }
}