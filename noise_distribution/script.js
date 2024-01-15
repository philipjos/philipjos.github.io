const noiseViewCanvasWidth = 300
const noiseViewCanvasHeight = 200
const noiseViewPointSize = 4

function drawNoiseViewPoint(x, y, displacement) {
    const point = document.createElement("div")
    point.style.backgroundColor = "#303030"
    point.style.width = noiseViewPointSize.toString() + "px"
    point.style.height = noiseViewPointSize.toString() + "px"
    point.style.borderRadius = (noiseViewPointSize / 2).toString() + "px"
    point.style.position = "relative"
    point.style.top = (y - displacement).toString() + "px"
    point.style.left = x.toString() + "px"
    //point.style["boxShadow"] = "0 0 2px 1px #BFFBFF inset";
    const noiseViewCanvas = document.getElementById("noiseViewCanvas")
    noiseViewCanvas.appendChild(point)
}

const sample_rate = 44100
const signal_length = 0.01
const sample_count = sample_rate * signal_length

function update() {
    const noiseViewCanvas = document.getElementById("noiseViewCanvas")
    noiseViewCanvas.innerHTML = ""

    var displacement = 0
    for (var i = 0; i < sample_count; i++) {
        const x = i / sample_count
        
        var found = false
        var safetyLimit = 1000
        var j = 0
        while ((!found) && j < safetyLimit) {    
            var candidate = Math.random()
            var prevPoint = -1
            for (var j = 0; j < points.length && prevPoint == -1; j++) {
                if(points[j][0] > candidate) {
                    prevPoint = j - 1 
                }
                //console.log(points[j][0])
                //console.log(candidate)
            }
            //TODO: fix in line-ui
            const invertedY_point = 1 - points[prevPoint + 1][1]
            const invertedY_prev = 1 -points[prevPoint][1]

            const xDif = points[prevPoint + 1][0] - points[prevPoint][0]
            const yDif = invertedY_point - invertedY_prev
            const probability = invertedY_prev + yDif * (candidate - points[prevPoint][0])
            
            //console.log("debug a1")
            //console.log(probability)
            /*
            console.log(candidate)
            console.log(invertedY_prev)
            console.log(yDif)
            console.log(yDif * candidate)
            console.log(segmentAreas[segment])
            console.log(segmentScale)
            console.log(probability)*/
            const permitter = Math.random()
            if (permitter < probability) {
                found = true
                //console.log("Found!!")
            }

            j += 1
        }

        const y = candidate

        const uiX = x * noiseViewCanvasWidth
        const uiY = noiseViewCanvasHeight - y * noiseViewCanvasHeight
        drawNoiseViewPoint(uiX, uiY, displacement)
        displacement += noiseViewPointSize
    }
}

//const timer = setInterval(update, 500)
//oncurveChangeCallback = update