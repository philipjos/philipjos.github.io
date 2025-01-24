let oscilloscopeWidth = 400
let oscilloscopeHeight = 100

let carrierFrequency = getScaledCarrierFrequency(document.getElementById("carrierFrequency").value)
let modulatorFrequency = getScaledModulatorFrequency(document.getElementById("modulatorFrequency").value)
let modulatorAmplitude = getScaledModulatorAmplitude(document.getElementById("modulatorAmplitude").value)

let oscilloscope = document.getElementsByClassName("oscilloscope")[0]

let playingVolume = 0
let playingEnvelopeAttack = 0.02
let playingEnvelopeRelease = 0.1
let playingEnvelopeState = "steady"

function getScaledCarrierFrequency(value) {
	const top = 500
	const bottom = 20
	return value / 1000 * (top - bottom) + bottom
}

function getScaledModulatorFrequency(value) {
	return value / 1000 * 200
}

function getScaledModulatorAmplitude(value) {
	return value / 1000
}

const onCarrierFrequencySliderChange = (event) => {
	carrierFrequency = getScaledCarrierFrequency(event.target.value)
	updateOscilloscope()
}

const onModulatorAmplitudeSliderChange = (event) => {
	modulatorAmplitude = getScaledModulatorAmplitude(event.target.value)
	updateOscilloscope()
}

const onModulatorFrequencySliderChange = (event) => {
	modulatorFrequency = getScaledModulatorFrequency(event.target.value)
	updateOscilloscope()
}

function calculateBuffer(length, scale) {
	let timedSignalQuantum = 1
	let timedSignalX = 0
	let outputBuffer = []
	
	for (let i = 0; i < length; i++) {
		let output = 0
	
		let pitchRange = 400
		let pitchRangeHalf = pitchRange / 2
		
		let modulationValue = (
			Math.max(0,
				Math.sin(modulatorFrequency * i / scale * 2 * Math.PI)
				* pitchRangeHalf
			)
			* modulatorAmplitude
		)
	
		output = Math.sin(timedSignalX * 2 * Math.PI)
	
		outputBuffer.push(output)
	
		timedSignalQuantum = (carrierFrequency + modulationValue) / scale
		timedSignalX += timedSignalQuantum
	}

	return outputBuffer
}

function updateOscilloscope() {
	oscilloscope.innerHTML = ""

	let oscillatorWidthsPerSecond = 50
	let pixelsPerSecond = oscillatorWidthsPerSecond * oscilloscopeWidth
	let outputBuffer = calculateBuffer(oscilloscopeWidth, pixelsPerSecond)

	for (let i = 0; i < oscilloscopeWidth; i++) {
		let line = document.createElement("div")
		line.style.height = ((outputBuffer[i] + 1) / 2) * oscilloscopeHeight + 'px'
		line.style.position = "absolute"
		line.style.bottom = "0px"
		line.style.left = i.toString() + 'px'
		line.style.width = "1px"
		line.style.backgroundColor = "green"
	
		oscilloscope.appendChild(line)
	}
}

function onKeyDown(event) {
	playingEnvelopeState = "attack"
	play()
}

function play() {
	const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

	const volume = 1;
	const volumeSafeGuard = 0.1;
	const duration = 1;
	const sampleRate = audioCtx.sampleRate;
	const length = sampleRate * duration;

	const buffer = audioCtx.createBuffer(1, length, sampleRate);

	const data = buffer.getChannelData(0);

	const calculatedBuffer = calculateBuffer(length, sampleRate)

	for (let i = 0; i < length; i++) {
		let releaseScaled = playingEnvelopeRelease * sampleRate
		if (i >= length - releaseScaled) {
			playingEnvelopeState = "release"
		}

		if (playingEnvelopeState === "attack") {
			playingVolume += 1 / (sampleRate * playingEnvelopeAttack)
		} else if (playingEnvelopeState === "release") {
			playingVolume -= 1 / (sampleRate * playingEnvelopeRelease)
		}
		if (playingVolume <= 0) {
			playingVolume = 0
			playingEnvelopeState = "steady"
		} else if (playingVolume >= 1) {
			playingVolume = 1
			playingEnvelopeState = "steady"
		}

		data[i] = calculatedBuffer[i] * volume * playingVolume * volumeSafeGuard;
	}

	const source = audioCtx.createBufferSource();
	source.buffer = buffer;

	source.connect(audioCtx.destination);

	source.start(audioCtx.currentTime);
}

updateOscilloscope()