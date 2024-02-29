scene.setBackgroundColor(7)
scene.setBackgroundImage(assets.image`Background`)
let spacePlane = sprites.create(assets.image`Grandma`, SpriteKind.Player)
spacePlane.setStayInScreen(true)
info.setLife(3)
controller.player1.moveSprite(spacePlane, 200, 200)
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    let dart = sprites.createProjectileFromSprite(assets.image`myImage3`, spacePlane, 200, 0)
})
function on_update_interval() {
    let bogey = sprites.create(assets.image`bogey3`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
}

game.onUpdateInterval(500, on_update_interval)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
let Gramps = sprites.create(assets.image`Gramps`, SpriteKind.Player)
controller.player2.moveSprite(Gramps, 200, 200)
controller.player2.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    let Axe = sprites.createProjectileFromSprite(assets.image`Axe`, Gramps, 200, 0)
})
controller.player1.onEvent(ControllerEvent.Connected, function on_event_connected() {
    controller.player1.moveSprite(spacePlane)
})
controller.player2.onEvent(ControllerEvent.Connected, function on_event_connected2() {
    controller.player2.moveSprite(Gramps)
})
info.onScore(15, function on_score() {
    let bogey2 = sprites.create(img`
        . . . . . . . . . b 5 b . . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 b c 5 5 d 4 c . .
        . b b b b 5 5 5 b f d d 4 4 4 b
        . b d 5 b 5 5 b c b 4 4 4 4 b .
        . . b 5 5 b 5 5 5 4 4 4 4 b . .
        . . b d 5 5 b 5 5 5 5 5 5 b . .
        . b d b 5 5 5 d 5 5 5 5 5 5 b .
        b d d c d 5 5 b 5 5 5 5 5 5 b .
        c d d d c c b 5 5 5 5 5 5 5 b .
        c b d d d d d 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `, SpriteKind.Enemy)
    bogey2.setVelocity(-100, 0)
    bogey2.left = scene.screenWidth()
    bogey2.y = randint(0, scene.screenHeight())
    bogey2.setFlag(SpriteFlag.AutoDestroy, true)
    game.onUpdateInterval(300, on_update_interval)
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy()
        info.changeLifeBy(-1)
    })
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy()
        sprite.destroy(effects.fire, 100)
        info.changeScoreBy(1)
    })
})
