import { option } from "../utils.js";

export class PipeContainer extends Phaser.GameObjects.Container {

    constructor(scene, x, y, pipeGroup){
        super(scene, x, y);
        this.scene.add.existing(this);

        let pipeTop = this.scene.physics.add.image(0, -250, `pipe-${option.themeIndex}`).setScale(0.5).setAngle(-180);
        pipeTop.body.allowGravity = false;
        let pipeBottom = this.scene.physics.add.image(0, 250, `pipe-${option.themeIndex}`).setScale(0.5);
        pipeBottom.body.allowGravity = false;

        this.add([pipeTop, pipeBottom]);

        pipeTop.body.setVelocityX(-200);
        pipeBottom.body.setVelocityX(-200);

        pipeGroup.add(pipeTop);
        pipeGroup.add(pipeBottom);


    }
}