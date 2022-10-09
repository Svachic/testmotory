function driveForward () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.analogWritePin(AnalogPin.P2, 800)
}
basic.forever(function () {
	
})
