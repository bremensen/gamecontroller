input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let voeding = 20
let knuffel = 20
let dood = 1
basic.forever(function () {
	
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel <= 0 && voeding <= 0) {
        basic.showIcon(IconNames.Asleep)
    }
    if (knuffel <= 10 && voeding <= 10 && (voeding < 0 && knuffel > 0)) {
        basic.showIcon(IconNames.Sad)
    }
    if ((knuffel && voeding) <= 10 && (knuffel && voeding) > 0) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    voeding += -1
    basic.pause(1000)
    knuffel += -1
    basic.pause(1000)
})
