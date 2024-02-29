scene.set_background_color(7)
scene.set_background_image(assets.image("""Background"""))

spacePlane = sprites.create(assets.image("""Grandma"""), SpriteKind.player)
spacePlane.set_stay_in_screen(True)
info.set_life(3)
controller.player1.move_sprite(spacePlane, 200, 200)

def on_a_pressed():
    dart = sprites.create_projectile_from_sprite(assets.image("""myImage3"""), spacePlane, 200, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED,on_a_pressed)

def on_update_interval():
    bogey = sprites.create(assets.image("""bogey3"""), SpriteKind.enemy)
    bogey.set_velocity(-100, 0)
    bogey.left = scene.screen_width()
    bogey.y = randint(0, scene.screen_height())
    bogey.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(500, on_update_interval)
def on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap)
def on_on_overlap2(sprite, otherSprite):
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

Gramps = sprites.create(assets.image("""Gramps"""), SpriteKind.player)
controller.player2.move_sprite(Gramps, 200, 200)

def on_b_pressed():
    Axe = sprites.create_projectile_from_sprite(assets.image("""Axe"""), Gramps, 200, 0)
controller.player2.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_event_connected():
    controller.player1.move_sprite(spacePlane)
controller.player1.on_event(ControllerEvent.CONNECTED, on_event_connected)

def on_event_connected2():
    controller.player2.move_sprite(Gramps)
controller.player2.on_event(ControllerEvent.CONNECTED, on_event_connected2)

def on_score():
    bogey2 = sprites.create(img("""
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
    """),
            SpriteKind.enemy)
    bogey2.set_velocity(-100, 0)
    bogey2.left = scene.screen_width()
    bogey2.y = randint(0, scene.screen_height())
    bogey2.set_flag(SpriteFlag.AUTO_DESTROY, True)
    game.on_update_interval(300, on_update_interval)
    def on_on_overlap(sprite, otherSprite):
        otherSprite.destroy()
        info.change_life_by(-1)
    sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)
    def on_on_overlap2(sprite, otherSprite):
        otherSprite.destroy()
        sprite.destroy(effects.fire, 100)
        info.change_score_by(1)
    sprites.on_overlap(SpriteKind. projectile, SpriteKind.enemy, on_on_overlap2)
info.on_score(15, on_score)