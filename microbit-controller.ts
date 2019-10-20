// Requires:
//   https://github.com/KittenBot/pxt-joyfrog

function Omni() {
    w1 = x + y
    w2 = x - y
    radio.sendValue("w2", w2)
    radio.sendValue("w1", w1)
}
function joyStick() {
    x = joyfrog.joystick_value(joyfrog.JoyDirection.X)
    y = joyfrog.joystick_value(joyfrog.JoyDirection.Y)
}
function Drift() {
    radio.sendValue("a1", x)
    if (y > 0) {
        if (x > 0) {
            radio.sendValue("a2", Math.map(y, 0, 255, 0, -100))
        } else {
            radio.sendValue("a2", Math.map(y, 0, 255, 0, 100))
        }
    } else {
        radio.sendValue("a2", 0)
    }
}
function carTurn() {
    if (x > 0) {
        if (y < -50 || y > 50) {
            radio.sendValue("rw1", 0)
            radio.sendValue("rw2", y)
        } else {
            radio.sendValue("rw1", -1 * x)
            radio.sendValue("rw2", -1 * x)
        }
    } else if (x < 0) {
        if (y < -50 || y > 50) {
            radio.sendValue("rw1", -1 * y)
            radio.sendValue("rw2", 0)
        } else {
            radio.sendValue("rw1", -1 * x)
            radio.sendValue("rw2", -1 * x)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
let w2 = 0
let w1 = 0
let x = 0
let y = 0
radio.setGroup(1)
joyfrog.joyfrog_init()

basic.forever(function () {
    joyStick()
    if (input.buttonIsPressed(Button.A)) {
        carTurn()
    } else if (input.buttonIsPressed(Button.B)) {
        Drift()
    } else {
        Omni()
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        . . . . .
        . . . . .
        `)
})
