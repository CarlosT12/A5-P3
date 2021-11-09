let CantidadAgua = 0
let ValorDado = 0
input.onButtonPressed(Button.A, function () {
    CantidadAgua = 0
    for (let index = 0; index < 30; index++) {
        CantidadAgua += randint(0, 6)
    }
    basic.showNumber(CantidadAgua)
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        ValorDado = randint(1, 6)
    }
    basic.showNumber(ValorDado)
})
