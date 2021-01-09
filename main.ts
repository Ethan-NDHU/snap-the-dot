let sprite = game.createSprite(2, 2)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
    
})
basic.forever(function on_forever() {
    sprite.move(1)
    basic.pause(200)
    sprite.ifOnEdgeBounce()
})
