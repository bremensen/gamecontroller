input.onButtonPressed(Button.A, function () {
    voeding += 1
})
input.onButtonPressed(Button.B, function () {
    knuffel += 1
})
let dood = 0
let knuffel = 0
let voeding = 20
basic.forever(function () {
    if ((knuffel && voeding) >= 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (voeding < 10) {
        basic.showIcon(IconNames.Sad)
    }
    if (voeding && 0 == 0) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    if (knuffel == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel == dood) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    voeding += -1
    basic.pause(1000)
})
basic.forever(function () {
    dood = 0
})
basic.forever(function () {
    knuffel += -1
    basic.pause(1000)
})
