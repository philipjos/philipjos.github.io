let outputBuffer = []
let length = 400

let timedSignalQuantum = 1
let timedSignalX = 0

let modulatorAmplitude = document.getElementById("modulatorAmplitude").value / 100

let oscilloscope = document.getElementsByClassName("oscilloscope")[0]
let oscilloscopeHeight = 100

const onModulatorAmplitudeSliderChange = (event) => {
	modulatorAmplitude = event.target.value / 100
	updateOscilloscope()
}

function updateOscilloscope() {
	timedSignalQuantum = 1
	timedSignalX = 0
	outputBuffer = []
	oscilloscope.innerHTML = ""
	
	for (let i = 0; i < length; i++) {
		let output = 0
	
		let modulatorFrequency = 1
		let pitchRange = 15
		let pitchRangeHalf = pitchRange / 2
		
		let modulationValue = (
			(
				Math.sin(modulatorFrequency * i / length * 2 * Math.PI)
				* pitchRangeHalf + pitchRangeHalf
			)
			* modulatorAmplitude
		)
	
		output = Math.sin(timedSignalX / length * 2 * Math.PI)
	
		outputBuffer.push(output)
	
		timedSignalQuantum = modulationValue
		timedSignalX += timedSignalQuantum
	}

	for (let i = 0; i < length; i++) {
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

updateOscilloscope()