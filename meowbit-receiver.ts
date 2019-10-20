// Requires:
//   https://github.com/KittenBot/pxt-sdwireless/
//   https://github.com/KittenBot/meowbit-robotbit/

namespace SpriteKind {
    export const Eyes = SpriteKind.create()
}
function closeRightEye () {
    rightEye = sprites.create(img`
        . . . . . . 4 4 . . . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . 4 4 4 1 1 4 4 4 . . . . .
        . . . 4 1 1 1 1 1 1 4 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 4 1 4 4 4 4 1 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . . . 4 4 . . . . . . . .
    `, SpriteKind.Eyes)
    rightEye.x += 50
}
sdwireless.sdw_onmbit_value(function (name, value) {
    if (name == rw1) {
        robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            value,
            robotbit.Motors.M1B,
            value
        )
    } else if (name == rw2) {
        robotbit.MotorRunDual(
            robotbit.Motors.M2A,
            value,
            robotbit.Motors.M2B,
            value
        )
    } else if (name == a1) {
        robotbit.MotorRunDual(
            robotbit.Motors.M1B,
            value,
            robotbit.Motors.M2A,
            value
        )
    } else if (name == a2) {
        robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            value,
            robotbit.Motors.M2B,
            value
        )
    } else if (name == w1) {
        robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            -1 * value,
            robotbit.Motors.M2A,
            value
        )
    } else if (name == w2) {
        robotbit.MotorRunDual(
            robotbit.Motors.M1B,
            value,
            robotbit.Motors.M2B,
            -1 * value
        )
    }
})
function winkRightEye () {
    openRightEye()
    pause(100)
    closeRightEye()
    pause(100)
    openRightEye()
}
function openBothEyes () {
    leftEye = sprites.create(img`
        . . . . . . 1 1 . . . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . . 1 1 . . . . . . . .
    `, SpriteKind.Eyes)
    leftEye.x += -50
    rightEye = sprites.create(img`
        . . . . . . 1 1 . . . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . . 1 1 . . . . . . . .
    `, SpriteKind.Eyes)
    rightEye.x += 50
}
function closeBothEyes () {
    leftEye = sprites.create(img`
        . . . . . . 4 4 . . . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . 4 4 4 1 1 4 4 4 . . . . .
        . . . 4 1 1 1 1 1 1 4 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 4 1 4 4 4 4 1 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . . . 4 4 . . . . . . . .
    `, SpriteKind.Eyes)
    leftEye.x += -50
    rightEye = sprites.create(img`
        . . . . . . 4 4 . . . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . 4 4 4 1 1 4 4 4 . . . . .
        . . . 4 1 1 1 1 1 1 4 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 4 1 4 4 4 4 1 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . . . 4 4 . . . . . . . .
    `, SpriteKind.Eyes)
    rightEye.x += 50
}
function winkBothEyes () {
    openBothEyes()
    pause(100)
    closeBothEyes()
    pause(100)
    openBothEyes()
}
function openLeftEye () {
    leftEye = sprites.create(img`
        . . . . . . 1 1 . . . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . . 1 1 . . . . . . . .
    `, SpriteKind.Eyes)
    leftEye.x += -50
}
function closeLeftEye () {
    leftEye = sprites.create(img`
        . . . . . . 4 4 . . . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . 4 4 4 1 1 4 4 4 . . . . .
        . . . 4 1 1 1 1 1 1 4 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 1 1 1 4 4 1 1 1 . . . . .
        . . . 4 1 4 4 4 4 1 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . 4 4 4 4 4 4 4 4 . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 . . . . . .
        . . . . . . 4 4 . . . . . . . .
    `, SpriteKind.Eyes)
    leftEye.x += -50
}
function winkLeftEye () {
    openLeftEye()
    pause(100)
    closeLeftEye()
    pause(100)
    openLeftEye()
}
function openRightEye () {
    rightEye = sprites.create(img`
        . . . . . . 1 1 . . . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . 1 1 1 1 1 1 1 1 . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . . 1 1 . . . . . . . .
    `, SpriteKind.Eyes)
    rightEye.x += 50
}
sdwireless.sdw_onmbit_number(function (num) {
    if (num == 0) {
        winkBothEyes()
    } else if (num == 1) {
        winkLeftEye()
    } else if (num == 2) {
        winkRightEye()
    }
})
let leftEye: Sprite = null
let rightEye: Sprite = null
let rw1 = ""
let rw2 = ""
let a1 = ""
let a2 = ""
let w1 = ""
let w2 = ""
scene.setBackgroundColor(4)
openBothEyes()
w2 = "w2"
w1 = "w1"
a2 = "a2"
a1 = "a1"
rw2 = "rw2"
rw1 = "rw1"
sdwireless.sdw_init()
sdwireless.sdw_set_radiogp(1)
