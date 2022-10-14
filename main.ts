let heroe = game.createSprite(0, 2)
let villano = game.createSprite(2, 4)
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        heroe.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    while (input.logoIsPressed()) {
        heroe.change(LedSpriteProperty.Y, -1)
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
    if (heroe.isTouching(villano)) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("C5 G B A F A C5 B ", 300)
        game.gameOver()
    }
})
