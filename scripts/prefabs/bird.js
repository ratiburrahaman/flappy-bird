export class Bird extends Phaser.GameObjects.Image {

   getDead() {
    return this.isDead;
  }

    setDead(dead) {
    this.isDead = dead;
  }

  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    // image
    this.setScale(0.20);
    this.setOrigin(0, 0);

    // variables
    this.isDead = false;
    this.isFlapping = false;

    // physics
    this.scene.physics.world.enable(this);
    this.body.setGravityY(1000);
    this.body.setSize(17, 12);

    // input
    this.jumpKey = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.scene.add.existing(this);

    this.isMouseDown = false;


    this.scene.input.on("pointerup", ()=>{
        this.isMouseDown = true;
    })
  }

  update() {
    // handle angle change
    if (this.angle < 30) {
      this.angle += 2;
    }

    // handle input
    if (this.isMouseDown && !this.isFlapping) {
      this.isFlapping = true;
      this.scene.sound.play("flap");
      this.isFlapping = true;
      this.body.setVelocityY(-350);
      this.scene.tweens.add({
        targets: this,
        props: { angle: -20 },
        duration: 150,
        ease: 'Power0',
        onComplete: ()=>{
            this.isMouseDown = false;
            this.isFlapping = false;
        }
      });
    }
    //  else if (this.isMouseDown && this.isFlapping) {
    //   this.isFlapping = false;
    // }

    // check if off the screen
    if (this.y + this.displayHeight > this.scene.sys.canvas.height) {
      this.isDead = true;
    }
  }
}
