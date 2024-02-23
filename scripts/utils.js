export let option = {
    themeIndex: 1,
    playerIndex: 1
}

export function randomThemeIndex(){
   option.themeIndex = Phaser.Math.Between(1, 5);
}

export function getCenterX(scene){
    return scene.sys.canvas.width / 2;
}

export function getCenterY(scene){
    return scene.sys.canvas.height / 2;
}

export function getWidth(scene){
    return scene.sys.canvas.width;
}

export function getHeight(scene){
    return scene.sys.canvas.height;
}

