input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let Javier = game.createSprite(0, 2)
let Andrea = game.createSprite(randint(1, 4), randint(0, 4))
let Pedrito = game.createSprite(randint(1, 4), randint(0, 4))
let Man = game.createSprite(randint(1, 4), randint(0, 4))
Andrea.set(LedSpriteProperty.Brightness, 100)
Pedrito.set(LedSpriteProperty.Brightness, 110)
Man.set(LedSpriteProperty.Brightness, 120)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        Javier.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        Javier.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        Javier.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    while (input.pinIsPressed(TouchPin.P2)) {
        Javier.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (Javier.isTouching(Andrea)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        Andrea.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.gameOver()
        basic.clearScreen()
    }
})
loops.everyInterval(3000, function () {
	
})
