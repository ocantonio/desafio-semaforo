function pasosemaforo () {
    basic.clearScreen()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
        basic.pause(200)
    }
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
input.onButtonPressed(Button.A, function () {
    pasosemaforo()
    for (let index = 0; index < 30; index++) {
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    pasosemaforo()
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
	
})
