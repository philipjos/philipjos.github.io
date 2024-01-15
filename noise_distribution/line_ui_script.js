const pointRadius = 10
const lineWidth = 8
const canvasPadding = 2
const canvasWidth = 300
const canvasHeight = 200
const canvasBorderRadius = 5

const pointSpaceWidth = canvasWidth - pointRadius * 2 - canvasPadding * 2
const pointSpaceHeight = canvasHeight - pointRadius * 2 - canvasPadding * 2

var points = [[0, 1], [1, 0]]
var zoom_level = 50
var draggingPoint = -1

var canvasDisplacement = 0
var curveCanvasContent

var oncurveChangeCallback = () => {
    update()
}

function addCanvasBackground() {
    const background = document.createElement("div")

    background.style.backgroundColor = "#FFFFFF"
    background.style.width = canvasWidth
    background.style.height = canvasHeight
    background.style.borderRadius = canvasBorderRadius.toString() + "px"

    background.onmousedown = canvasPress

    canvas = document.getElementById("curve_canvas")
    canvas.appendChild(background)
}

function drawPoint(point, pointIndex) {
    var pointElement = document.createElement("div")
    pointElement.style.backgroundColor = "#D9D9D9"
    pointElement.style.position = "relative"
    pointElement.style.left = point[0].toString() + "px"
    pointElement.style.top = point[1].toString() + "px"
    pointElement.style.width = (pointRadius * 2).toString() + "px"
    pointElement.style.height = (pointRadius * 2).toString() + "px"
    pointElement.style.borderRadius = (pointRadius).toString() + "px"
    //pointElement.style["boxShadow"] = "0 0 4px  2px #999999";
    curveCanvasContent.appendChild(pointElement)

    pointElement.addEventListener("mousedown", ()=>{pressPoint(pointIndex)})
    pointElement.addEventListener("touchstart", ()=>{pressPoint(pointIndex)})
    pointElement.addEventListener("click", ()=>{clickPoint(pointIndex)})
}

// Returns the added displacement for the html-'relative'-positioning
function drawLine(from, to, displacement) {
    const distanceY = to[1] - from[1]
    const distanceX = to[0] - from[0]
    const distance = Math.sqrt(distanceY * distanceY + distanceX * distanceX)
    const angle = Math.atan(distanceY / distanceX)

    var lineElement = document.createElement("div")
    lineElement.style.backgroundColor = "#FFFFFF"
    lineElement.style.opacity = 0.5
    lineElement.style["boxShadow"] = "0 0 5px 1px #19F1FF";
    lineElement.style.position = "relative"
    lineElement.style.left = from[0].toString() + "px"
    lineElement.style.top = (from[1] - displacement - lineWidth / 2).toString()  + "px"
    lineElement.style.width = distance.toString() + "px"
    lineElement.style.height = lineWidth.toString() + "px"
    lineElement.style.borderRadius = (lineWidth / 2).toString() + "px"
    lineElement.style.transformOrigin = "center left"
    lineElement.style.transform = "rotate(" + angle.toString() + "rad)"
    lineElement.style.pointerEvents = "none"

    curveCanvasContent.appendChild(lineElement)

    return distanceY
}

var updateThrottle = 3
function updateCurveUI() {
    curveCanvasContent.innerHTML = ""

    //Initial displacement from the background view
    canvasDisplacement = canvasHeight

    var lastPoint
    for(var i = 0; i < points.length; i++) {
        const point = points[i]

        var x = point[0] * pointSpaceWidth + canvasPadding
        var y = point[1] * pointSpaceHeight + canvasPadding
        const displacedPoint = [x, y - canvasDisplacement]
        
        drawPoint(displacedPoint, i)
        canvasDisplacement += pointRadius * 2

        const centerPoint = [
            x + pointRadius,
            y + pointRadius
        ]

        if(i > 0) {
            drawLine(
                lastPoint, 
                centerPoint,
                canvasDisplacement
            )
            canvasDisplacement += 8
        }

        lastPoint = centerPoint
    }

    updateThrottle += 1
    if (updateThrottle >= 3) {
        updateThrottle = 0
        oncurveChangeCallback()
    }
    
}

function convertMouseXtoPoint(mouseX) {
    canvas = document.getElementById("curve_canvas")
    rect = canvas.getBoundingClientRect();

    const limitLeft = rect.left + pointRadius + canvasPadding
    const limitRight = rect.right - pointRadius - canvasPadding
    const clippedMouseX = Math.max(limitLeft, Math.min(limitRight, mouseX))
    const x = (clippedMouseX - limitLeft) / pointSpaceWidth

    return x
}

function convertMouseYtoPoint(mouseY) {
    canvas = document.getElementById("curve_canvas")
    rect = canvas.getBoundingClientRect();

    const limitTop = rect.top + pointRadius + canvasPadding
    const limitBottom = rect.bottom - pointRadius - canvasPadding
    const clippedMouseY = Math.max(limitTop, Math.min(limitBottom, mouseY))

    const y = (clippedMouseY - limitTop) / pointSpaceHeight

    return y
}

function convertMouseToPoint(mouseX, mouseY) {
    const point = [
        convertMouseXtoPoint(mouseX),
        convertMouseYtoPoint(mouseY)
    ]

    return point
}

// Returns the new index of the point.
function sortPoint(index) {
    var indexToSwap = -1
    var firstLeftCorrect = false
    if (index > 1) {
        var i = index - 1
        var leftCorrect = false
        while (i > 0 && !leftCorrect) {
            if (points[i][0] < points[index][0]) {
                leftCorrect = true
                if (i == (index - 1)) {
                    firstLeftCorrect = true
                }
            } else {
                indexToSwap = i
            }

            i -= 1
        }
    } else {
        firstLeftCorrect = true
    }

    if (firstLeftCorrect && (index < (points.length - 2))) {
        i = index + 1
        var rightCorrect = false
        while (i < (points.length - 1) && !rightCorrect) {
            if (points[i][0] >= points[index][0]) {
                rightCorrect = true
            } else {
                indexToSwap = i
            }

            i += 1
        }
    }

    if(indexToSwap != -1) {
        const pointElement = points.splice(index, 1)[0]
        points.splice(indexToSwap, 0, pointElement)

        return indexToSwap
    }

    return index
}

function canvasPress(event) {
    const point = convertMouseToPoint(event.clientX, event.clientY)

    /* 
     * Add before the last index because the last and first indeces are reserved for the
     * left and right boundary points.
     */
    const newPointIndex = points.length - 2
    points.splice(newPointIndex, 0, point)

    const pointIndex = sortPoint(newPointIndex)

    updateCurveUI()
    draggingPoint = pointIndex
}

function pressPoint(point) {
    draggingPoint = point
}

function mouseUp() {
    draggingPoint = -1
}

function clickPoint(point) {
    if (point != 0 && point != points.length - 1) {
        points.splice(point, 1)
        updateCurveUI()
    }
}

function onMouseMove(event) {
    if (draggingPoint != -1) {
        points[draggingPoint][1] = convertMouseYtoPoint(event.clientY)

        if (draggingPoint != 0 && draggingPoint != (points.length - 1)) {
            points[draggingPoint][0] = convertMouseXtoPoint(event.clientX)
            draggingPoint = sortPoint(draggingPoint)
        }

        updateCurveUI()
    }
}

function onload() {
    const canvas = document.getElementById("curve_canvas")
    canvas.innerHTML = ""

    addCanvasBackground()

    curveCanvasContent = document.createElement("div")
    curveCanvasContent.style.borderRadius = 5
    canvas.appendChild(curveCanvasContent)

    updateCurveUI()
}

document.addEventListener("mousemove", onMouseMove)
document.addEventListener("touchmove", onMouseMove)
document.addEventListener("mouseup", mouseUp)
document.body.onload = onload