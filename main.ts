input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let heroe = game.createSprite(0, 2)
let villano = game.createSprite(randint(1, 4), randint(0, 4))
let villano2 = game.createSprite(randint(1, 4), randint(0, 4))
let villano3 = game.createSprite(randint(1, 4), randint(0, 4))
heroe.set(LedSpriteProperty.Brightness, 120)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        heroe.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.A)) {
        heroe.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    while (input.buttonIsPressed(Button.B)) {
        heroe.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        heroe.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (heroe.isTouching(villano3)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        villano.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.addScore(1)
    }
    if (heroe.isTouching(villano2)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        villano2.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.addScore(2)
    }
    if (heroe.isTouching(villano3)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.OnceInBackground)
        villano3.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        }
        game.addScore(3)
    }
    if (game.score() == 3) {
        basic.pause(100)
        game.gameOver()
    }
})
loops.everyInterval(3000, function () {
    villano.change(LedSpriteProperty.X, randint(1, 4))
    villano2.change(LedSpriteProperty.X, randint(1, 4))
    villano3.change(LedSpriteProperty.X, randint(1, 4))
    villano.change(LedSpriteProperty.Y, randint(0, 4))
    villano2.change(LedSpriteProperty.Y, randint(0, 4))
    villano3.change(LedSpriteProperty.Y, randint(0, 4))
})
