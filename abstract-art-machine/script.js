var time = 0
var lineControls = []

// file:///Users/philipandersen/abstract-art-machine/index.html?preset=eyJsaW5lQ29udHJvbHMiOlt7InBoYXNlU2xpZGVyIjoiMTAwMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiIxNDUiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiI1ODMiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMTAwMCIsImNvbG9yU2xpZGVyIjoiMTY5IiwiYnJpZ2h0bmVzc1NsaWRlciI6IjEwMDAiLCJmcmVxdWVuY3lTbGlkZXIiOiIwIiwiZGlzdG9ydGlvblNsaWRlciI6IjAifSx7InBoYXNlU2xpZGVyIjoiNjUxIiwid2F2ZUxlbmd0aFNsaWRlciI6IjU3IiwiY29sb3JTbGlkZXIiOiI4MDMiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6Ijk0NiIsImRpc3RvcnRpb25TbGlkZXIiOiIyNjcifSx7InBoYXNlU2xpZGVyIjoiNTUxIiwid2F2ZUxlbmd0aFNsaWRlciI6IjI0NSIsImNvbG9yU2xpZGVyIjoiMzE3IiwiYnJpZ2h0bmVzc1NsaWRlciI6IjEwMDAiLCJmcmVxdWVuY3lTbGlkZXIiOiIwIiwiZGlzdG9ydGlvblNsaWRlciI6IjQyOCJ9LHsicGhhc2VTbGlkZXIiOiI4NTYiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMTk0IiwiY29sb3JTbGlkZXIiOiI3NDIiLCJicmlnaHRuZXNzU2xpZGVyIjoiNzg0IiwiZnJlcXVlbmN5U2xpZGVyIjoiNyIsImRpc3RvcnRpb25TbGlkZXIiOiI1MzQifV19
//"eyJsaW5lQ29udHJvbHMiOlt7InBoYXNlU2xpZGVyIjoiMTAwMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiIxNDUiLCJicmlnaHRuZXNzU2xpZGVyIjoiNzM5IiwiZnJlcXVlbmN5U2xpZGVyIjoiMCIsImRpc3RvcnRpb25TbGlkZXIiOiIwIn0seyJwaGFzZVNsaWRlciI6IjU4MyIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiIxNjkiLCJicmlnaHRuZXNzU2xpZGVyIjoiODc0IiwiZnJlcXVlbmN5U2xpZGVyIjoiMCIsImRpc3RvcnRpb25TbGlkZXIiOiIwIn0seyJwaGFzZVNsaWRlciI6IjY1MSIsIndhdmVMZW5ndGhTbGlkZXIiOiI1NyIsImNvbG9yU2xpZGVyIjoiNjgxIiwiYnJpZ2h0bmVzc1NsaWRlciI6IjEwMDAiLCJmcmVxdWVuY3lTbGlkZXIiOiI5NDYiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMjI4In0seyJwaGFzZVNsaWRlciI6IjU1MSIsIndhdmVMZW5ndGhTbGlkZXIiOiIyNDUiLCJjb2xvclNsaWRlciI6IjAiLCJicmlnaHRuZXNzU2xpZGVyIjoiODc0IiwiZnJlcXVlbmN5U2xpZGVyIjoiMCIsImRpc3RvcnRpb25TbGlkZXIiOiIwIn1dfQ=="
//"eyJsaW5lQ29udHJvbHMiOlt7InBoYXNlU2xpZGVyIjoiMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiI2NjIiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiIxMDAwIiwid2F2ZUxlbmd0aFNsaWRlciI6IjEwMDAiLCJjb2xvclNsaWRlciI6IjE2MiIsImJyaWdodG5lc3NTbGlkZXIiOiIxMDAwIiwiZnJlcXVlbmN5U2xpZGVyIjoiMCIsImRpc3RvcnRpb25TbGlkZXIiOiIwIn0seyJwaGFzZVNsaWRlciI6IjUyMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiI2NjgiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMjgwIn0seyJwaGFzZVNsaWRlciI6IjQ3NSIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiIxMjQiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiI5ODMiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNjgiLCJjb2xvclNsaWRlciI6IjU0NyIsImJyaWdodG5lc3NTbGlkZXIiOiIwIiwiZnJlcXVlbmN5U2xpZGVyIjoiOTY4IiwiZGlzdG9ydGlvblNsaWRlciI6IjM1MyJ9LHsicGhhc2VTbGlkZXIiOiI5NTgiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNzgzIiwiY29sb3JTbGlkZXIiOiI2MTgiLCJicmlnaHRuZXNzU2xpZGVyIjoiMCIsImZyZXF1ZW5jeVNsaWRlciI6IjUwMyIsImRpc3RvcnRpb25TbGlkZXIiOiIxMzcifV19"
// "eyJsaW5lQ29udHJvbHMiOlt7InBoYXNlU2xpZGVyIjoiMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiI2NjIiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiIxMDAwIiwid2F2ZUxlbmd0aFNsaWRlciI6IjEwMDAiLCJjb2xvclNsaWRlciI6IjE2MiIsImJyaWdodG5lc3NTbGlkZXIiOiIxMDAwIiwiZnJlcXVlbmN5U2xpZGVyIjoiMCIsImRpc3RvcnRpb25TbGlkZXIiOiIwIn0seyJwaGFzZVNsaWRlciI6IjUyMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiI2NjgiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMjgwIn0seyJwaGFzZVNsaWRlciI6IjQ3NSIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiIxMjQiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiI5ODMiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNzAiLCJjb2xvclNsaWRlciI6Ijk0IiwiYnJpZ2h0bmVzc1NsaWRlciI6IjAiLCJmcmVxdWVuY3lTbGlkZXIiOiI0MjgiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMzQxIn0seyJwaGFzZVNsaWRlciI6Ijk1OCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxOTIiLCJjb2xvclNsaWRlciI6IjkwIiwiYnJpZ2h0bmVzc1NsaWRlciI6IjAiLCJmcmVxdWVuY3lTbGlkZXIiOiIwIiwiZGlzdG9ydGlvblNsaWRlciI6IjEzNyJ9LHsicGhhc2VTbGlkZXIiOiI3MDUiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNzM2IiwiY29sb3JTbGlkZXIiOiI2ODgiLCJicmlnaHRuZXNzU2xpZGVyIjoiOTE5IiwiZnJlcXVlbmN5U2xpZGVyIjoiNDM0IiwiZGlzdG9ydGlvblNsaWRlciI6IjYzNyJ9LHsicGhhc2VTbGlkZXIiOiI1ODAiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNDkzIiwiY29sb3JTbGlkZXIiOiI2MzciLCJicmlnaHRuZXNzU2xpZGVyIjoiOTcwIiwiZnJlcXVlbmN5U2xpZGVyIjoiNTcyIiwiZGlzdG9ydGlvblNsaWRlciI6IjY0MiJ9LHsicGhhc2VTbGlkZXIiOiIxODciLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMzcyIiwiY29sb3JTbGlkZXIiOiI2NjQiLCJicmlnaHRuZXNzU2xpZGVyIjoiODQyIiwiZnJlcXVlbmN5U2xpZGVyIjoiODY1IiwiZGlzdG9ydGlvblNsaWRlciI6Ijc4MCJ9LHsicGhhc2VTbGlkZXIiOiI1NzEiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiOTQ0IiwiY29sb3JTbGlkZXIiOiI4NDkiLCJicmlnaHRuZXNzU2xpZGVyIjoiNjMyIiwiZnJlcXVlbmN5U2xpZGVyIjoiNDg5IiwiZGlzdG9ydGlvblNsaWRlciI6IjY5OCJ9LHsicGhhc2VTbGlkZXIiOiI0MDciLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiOTEwIiwiY29sb3JTbGlkZXIiOiI4MzciLCJicmlnaHRuZXNzU2xpZGVyIjoiNDUzIiwiZnJlcXVlbmN5U2xpZGVyIjoiNDk2IiwiZGlzdG9ydGlvblNsaWRlciI6IjY1MCJ9LHsicGhhc2VTbGlkZXIiOiI2MDUiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMzM5IiwiY29sb3JTbGlkZXIiOiI1NzYiLCJicmlnaHRuZXNzU2xpZGVyIjoiNTMyIiwiZnJlcXVlbmN5U2xpZGVyIjoiMjQxIiwiZGlzdG9ydGlvblNsaWRlciI6IjI5NCJ9LHsicGhhc2VTbGlkZXIiOiI5NTIiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMTM4IiwiY29sb3JTbGlkZXIiOiI4NDciLCJicmlnaHRuZXNzU2xpZGVyIjoiNTg3IiwiZnJlcXVlbmN5U2xpZGVyIjoiNzc1IiwiZGlzdG9ydGlvblNsaWRlciI6Ijc5NyJ9LHsicGhhc2VTbGlkZXIiOiI3MjEiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNzc0IiwiY29sb3JTbGlkZXIiOiI4MzQiLCJicmlnaHRuZXNzU2xpZGVyIjoiOTUwIiwiZnJlcXVlbmN5U2xpZGVyIjoiNjEzIiwiZGlzdG9ydGlvblNsaWRlciI6IjI4MiJ9LHsicGhhc2VTbGlkZXIiOiI3NzciLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMTc3IiwiY29sb3JTbGlkZXIiOiIyMzgiLCJicmlnaHRuZXNzU2xpZGVyIjoiNDMxIiwiZnJlcXVlbmN5U2xpZGVyIjoiODMxIiwiZGlzdG9ydGlvblNsaWRlciI6IjUwMCJ9LHsicGhhc2VTbGlkZXIiOiI5NTkiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiMzE1IiwiY29sb3JTbGlkZXIiOiI4NzciLCJicmlnaHRuZXNzU2xpZGVyIjoiNTE1IiwiZnJlcXVlbmN5U2xpZGVyIjoiODcyIiwiZGlzdG9ydGlvblNsaWRlciI6Ijk5NiJ9LHsicGhhc2VTbGlkZXIiOiIzMjMiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNjYxIiwiY29sb3JTbGlkZXIiOiI0NjYiLCJicmlnaHRuZXNzU2xpZGVyIjoiMzI5IiwiZnJlcXVlbmN5U2xpZGVyIjoiNTgxIiwiZGlzdG9ydGlvblNsaWRlciI6Ijk2NiJ9LHsicGhhc2VTbGlkZXIiOiI4MDkiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNTcxIiwiY29sb3JTbGlkZXIiOiI1NDYiLCJicmlnaHRuZXNzU2xpZGVyIjoiMCIsImZyZXF1ZW5jeVNsaWRlciI6IjMyOCIsImRpc3RvcnRpb25TbGlkZXIiOiIzOTQifSx7InBoYXNlU2xpZGVyIjoiNDE0Iiwid2F2ZUxlbmd0aFNsaWRlciI6IjcyMyIsImNvbG9yU2xpZGVyIjoiNjY2IiwiYnJpZ2h0bmVzc1NsaWRlciI6IjAiLCJmcmVxdWVuY3lTbGlkZXIiOiI3NjYiLCJkaXN0b3J0aW9uU2xpZGVyIjoiNTA3In0seyJwaGFzZVNsaWRlciI6Ijc4NSIsIndhdmVMZW5ndGhTbGlkZXIiOiI0NTciLCJjb2xvclNsaWRlciI6IjU3MiIsImJyaWdodG5lc3NTbGlkZXIiOiIwIiwiZnJlcXVlbmN5U2xpZGVyIjoiMzk2IiwiZGlzdG9ydGlvblNsaWRlciI6IjY0NCJ9LHsicGhhc2VTbGlkZXIiOiI2NjAiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNzk0IiwiY29sb3JTbGlkZXIiOiI2NDciLCJicmlnaHRuZXNzU2xpZGVyIjoiMCIsImZyZXF1ZW5jeVNsaWRlciI6IjQ3OCIsImRpc3RvcnRpb25TbGlkZXIiOiI3NzMifSx7InBoYXNlU2xpZGVyIjoiMjM2Iiwid2F2ZUxlbmd0aFNsaWRlciI6IjcyNyIsImNvbG9yU2xpZGVyIjoiODQ2IiwiYnJpZ2h0bmVzc1NsaWRlciI6IjAiLCJmcmVxdWVuY3lTbGlkZXIiOiIzNTIiLCJkaXN0b3J0aW9uU2xpZGVyIjoiNzk0In0seyJwaGFzZVNsaWRlciI6IjY3NyIsIndhdmVMZW5ndGhTbGlkZXIiOiI4ODMiLCJjb2xvclNsaWRlciI6IjgyNCIsImJyaWdodG5lc3NTbGlkZXIiOiIwIiwiZnJlcXVlbmN5U2xpZGVyIjoiNjcwIiwiZGlzdG9ydGlvblNsaWRlciI6IjI0OCJ9LHsicGhhc2VTbGlkZXIiOiI5NjAiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNjMzIiwiY29sb3JTbGlkZXIiOiIzMjEiLCJicmlnaHRuZXNzU2xpZGVyIjoiMCIsImZyZXF1ZW5jeVNsaWRlciI6Ijk2MSIsImRpc3RvcnRpb25TbGlkZXIiOiI5MjkifV19"
const defaultPreset = "eyJsaW5lQ29udHJvbHMiOlt7InBoYXNlU2xpZGVyIjoiMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiI2NjIiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiIxMDAwIiwid2F2ZUxlbmd0aFNsaWRlciI6IjEwMDAiLCJjb2xvclNsaWRlciI6IjE2MiIsImJyaWdodG5lc3NTbGlkZXIiOiIxMDAwIiwiZnJlcXVlbmN5U2xpZGVyIjoiMCIsImRpc3RvcnRpb25TbGlkZXIiOiIwIn0seyJwaGFzZVNsaWRlciI6IjUyMCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiI2NjgiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMjgwIn0seyJwaGFzZVNsaWRlciI6IjQ3NSIsIndhdmVMZW5ndGhTbGlkZXIiOiIxMDAwIiwiY29sb3JTbGlkZXIiOiIxMjQiLCJicmlnaHRuZXNzU2xpZGVyIjoiMTAwMCIsImZyZXF1ZW5jeVNsaWRlciI6IjAiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMCJ9LHsicGhhc2VTbGlkZXIiOiI5ODMiLCJ3YXZlTGVuZ3RoU2xpZGVyIjoiNzAiLCJjb2xvclNsaWRlciI6Ijk0IiwiYnJpZ2h0bmVzc1NsaWRlciI6IjAiLCJmcmVxdWVuY3lTbGlkZXIiOiI0MjgiLCJkaXN0b3J0aW9uU2xpZGVyIjoiMzQxIn0seyJwaGFzZVNsaWRlciI6Ijk1OCIsIndhdmVMZW5ndGhTbGlkZXIiOiIxOTIiLCJjb2xvclNsaWRlciI6IjkwIiwiYnJpZ2h0bmVzc1NsaWRlciI6IjAiLCJmcmVxdWVuY3lTbGlkZXIiOiIwIiwiZGlzdG9ydGlvblNsaWRlciI6IjEzNyJ9XX0="

function loadPresetFromURL() {
    const urlParams = new URLSearchParams(window.location.search)
    const preset = urlParams.get('preset')
    loadPreset(preset)
}

function loadPreset(preset) {
    if (preset) {
        const presetJSON = JSON.parse(atob(preset))
        console.log("Preset JSON", presetJSON)
        const _lineControls = presetJSON.lineControls
        for (var i = 0; i < _lineControls.length; i++) {
            console.log("Preset - adding line", _lineControls[i])
            const lineControl = _lineControls[i]
            addLineClicked()
            const newLineControl = lineControls[lineControls.length - 1]
            newLineControl.phaseSlider.value = lineControl.phaseSlider
            newLineControl.waveLengthSlider.value = lineControl.waveLengthSlider
            newLineControl.colorSlider.value = lineControl.colorSlider
            newLineControl.brightnessSlider.value = lineControl.brightnessSlider
            newLineControl.frequencySlider.value = lineControl.frequencySlider
            newLineControl.distortionSlider.value = lineControl.distortionSlider
        }
    }
}

function resetClicked() {
    const controls = document.getElementById('lineControls')
    controls.innerHTML = ''
    lineControls = []
}

function generateShareLinkClicked() {
    const _lineControls = []
    for (var i = 0; i < lineControls.length; i++) {
        const lineControl = lineControls[i]
        _lineControls.push({
            "phaseSlider": lineControl.phaseSlider.value,
            "waveLengthSlider": lineControl.waveLengthSlider.value,
            "colorSlider": lineControl.colorSlider.value,
            "brightnessSlider": lineControl.brightnessSlider.value,
            "frequencySlider": lineControl.frequencySlider.value,
            "distortionSlider": lineControl.distortionSlider.value,
        })
    }
    const presetJSON = {
        "lineControls": _lineControls
    }
    console.log("Preset JSON generating", presetJSON)
    const presetJSONString = JSON.stringify(presetJSON)
    const presetBase64 = btoa(presetJSONString)
    console.log("Preset Base64", presetBase64)
    console.log("Preset decoded: ", atob(presetBase64))
    const url = window.location.origin + window.location.pathname + "?preset=" + presetBase64
    console.log(url)

    // Copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
        console.log('Copied to clipboard')
    }).catch((error) => {
        console.error('Failed to copy to clipboard', error)
    })
}

function urlHasPreset() {
    const urlParams = new URLSearchParams(window.location.search)
    const preset = urlParams.get('preset')
    return preset != null
}

function main() {
    if (urlHasPreset()) {
        loadPresetFromURL()
    } else {
        loadPreset(defaultPreset)
    }

    const timer = setInterval(() => {
        renderCanvas()
        time += 1
    }, 1)
}

function randomizeSliderValue(slider, distribution = (x)=>{return x}) {
    var random = Math.random()
    var guard = 0
    while (Math.random() > distribution(random) && guard < 1000) {
        random = Math.random()
        guard += 1
    }
    slider.value = random * (slider.max - slider.min) + parseInt(slider.min)
}

function addLineClicked() {
    const controls = document.getElementById('lineControls')

    const controlBox = document.createElement('div')
    controlBox.classList.add('control-box')

    const newLineDeleteWrapper = document.createElement('div')
    newLineDeleteWrapper.classList.add('delete-wrapper')
    controlBox.appendChild(newLineDeleteWrapper)

    const newLineDeleteButton = document.createElement('button')
    newLineDeleteButton.innerHTML = '-'
    newLineDeleteButton.classList.add('delete-button')
    const id = lineControls.length
    newLineDeleteButton.onclick = () => {
        controlBox.remove()
        lineControls = lineControls.filter((lineControl) => {
            return lineControl.id != id
        })
    }
    newLineDeleteWrapper.appendChild(newLineDeleteButton)

    const newLinePhaseSlider = document.createElement('input')
    newLinePhaseSlider.type = 'range'
    newLinePhaseSlider.min = 0
    newLinePhaseSlider.max = 1000
    randomizeSliderValue(newLinePhaseSlider)
    newLinePhaseSlider.classList.add('slider')
    controlBox.appendChild(newLinePhaseSlider)

    const newLineWaveLengthSlider = document.createElement('input')
    newLineWaveLengthSlider.type = 'range'
    newLineWaveLengthSlider.min = 10
    newLineWaveLengthSlider.max = 1000
    randomizeSliderValue(newLineWaveLengthSlider)
    newLineWaveLengthSlider.classList.add('slider')
    controlBox.appendChild(newLineWaveLengthSlider)

    const newLineFrequencySlider = document.createElement('input')
    newLineFrequencySlider.type = 'range'
    newLineFrequencySlider.min = 0
    newLineFrequencySlider.max = 1000
    randomizeSliderValue(newLineFrequencySlider)
    newLineFrequencySlider.classList.add('slider')
    controlBox.appendChild(newLineFrequencySlider)

    const newLineColorSlider = document.createElement('input')
    newLineColorSlider.type = 'range'
    newLineColorSlider.min = 0
    newLineColorSlider.max = 1000
    randomizeSliderValue(newLineColorSlider)
    newLineColorSlider.classList.add('slider')
    controlBox.appendChild(newLineColorSlider)

    const newLineBrightnessSlider = document.createElement('input')
    newLineBrightnessSlider.type = 'range'
    newLineBrightnessSlider.min = 0
    newLineBrightnessSlider.max = 1000
    if (lineControls.length == 0) {
        newLineBrightnessSlider.value = 1000
    } else {
        randomizeSliderValue(newLineBrightnessSlider)
    }
    newLineBrightnessSlider.classList.add('slider')
    controlBox.appendChild(newLineBrightnessSlider)

    const newLineDistortionSlider = document.createElement('input')
    newLineDistortionSlider.type = 'range'
    newLineDistortionSlider.min = 0
    newLineDistortionSlider.max = 1000
    randomizeSliderValue(newLineDistortionSlider)
    newLineDistortionSlider.classList.add('slider')
    controlBox.appendChild(newLineDistortionSlider)

    controls.appendChild(controlBox)

    lineControls.push({
        "id": id,
        "phaseSlider": newLinePhaseSlider,
        "waveLengthSlider": newLineWaveLengthSlider,
        "colorSlider": newLineColorSlider,
        "brightnessSlider": newLineBrightnessSlider,
        "frequencySlider": newLineFrequencySlider,
        "distortionSlider": newLineDistortionSlider,
    })

}

function hueToRGB(hue) {
    const kr = (5 + hue * 6) % 6
    const kg = (3 + hue * 6) % 6
    const kb = (1 + hue * 6) % 6

    const r = Math.max(0, Math.min(kr, 4 - kr, 1))
    const g = Math.max(0, Math.min(kg, 4 - kg, 1))
    const b = Math.max(0, Math.min(kb, 4 - kb, 1))

    return [r, g, b]
}

function renderCanvas() {
    const height = 400
    const width = 400

    const canvas = document.getElementById('canvas')
    canvas.innerHTML = ''
    
    for (var i = 0; i < height; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (var j = 0; j < 1; j++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')

            /*
            var red = (Math.sin(i * Math.PI * 2 * (parameter_1 * 1)) + 1) / 2 * 255
            const greenY = (i + time / 1000 / 0.01) % height
            var green = ((Math.sin(greenY / height * Math.PI * 2 * 8) + 1) * 255 / 2) % 256
            var blue = parameter_2 * 255
            const color = "rgb(" + red + ", " + green + ", " + blue + ")"
            */
/*
            const wave = (Math.sin(i * Math.PI * 2 * parameter_1) + 1) / 2
            
            var lowRed = parameter_2 / 1000 * 255
            var lowGreen = 255 - (Math.sin((parameter_2 / 1000 - 0.25) * Math.PI * 2) + 1) / 2 * 255
            var lowBlue = 255 - (Math.sin((parameter_2 / 1000 - 0.25) * Math.PI * 2 * 2) + 1) / 2 * 255

            var highRed = parameter_3 / 1000 * 255
            var highGreen = 255 - (Math.sin((parameter_3 / 1000 - 0.25) * Math.PI * 2) + 1) / 2 * 255
            var highBlue = 255 - (Math.sin((parameter_3 / 1000 - 0.25) * Math.PI * 2 * 2) + 1) / 2 * 255

            const wavePointRed = lowRed + wave * (highRed - lowRed)
            const wavePointGreen = lowGreen + wave * (highGreen - lowGreen)
            const wavePointBlue = lowBlue + wave * (highBlue - lowBlue)

            const greenY = (i + time / 1000 / 0.01) % height
            var green = ((Math.sin(greenY / height * Math.PI * 2 * 8) + 1) * 255 / 2) % 256
            green = green + wavePointGreen
            var red = wavePointRed
            var blue = wavePointBlue
            */
            /*
            for (var k = 0; k < lineControls.length; k++) {
                const lineControl = lineControls[k]
                const waveLength = lineControl.waveLengthSlider.value / 100
                const waveY = (i + time / 1000 / 0.01) % height
                const wave = (Math.sin(waveY * Math.PI * 2 / (height * waveLength)) + 1) / 2
                const lowRed = lineControl.slider.value / 1000 * 255
                const lowGreen = 255 - (Math.sin((lineControl.slider.value / 1000 - 0.25) * Math.PI * 2) + 1) / 2 * 255
                const lowBlue = 255 - (Math.sin((lineControl.slider.value / 1000 - 0.25) * Math.PI * 2 * 2) + 1) / 2 * 255

                const wavePointRed = lowRed + wave * (highRed - lowRed)
                const wavePointGreen = lowGreen + wave * (highGreen - lowGreen)
                const wavePointBlue = lowBlue + wave * (highBlue - lowBlue)
                green = green + wavePointGreen
                red = red + wavePointRed
                blue = blue + wavePointBlue
            }
                */

            var red = 0
            var green = 0
            var blue = 0

            for (var k = 0; k < lineControls.length; k++) {
                const lineControl = lineControls[k]
                const waveLength = lineControl.waveLengthSlider.value / 1000 * 2
                const frequency = lineControl.frequencySlider.value / 1000
                const phase = lineControl.phaseSlider.value / 1000
                
                const phaseStart = 0.25
                const phasePercentage = 1
                const phaseTerm = phaseStart + phasePercentage * phase
                
                const y = (i / height)
                const yInWave = y / waveLength
                const timeInWave = time / 1000 * frequency / waveLength
                var wave = (Math.sin((yInWave + phaseTerm + timeInWave) * Math.PI * 2) + 1) / 2
               
                if (time % 1000 == 0 && i == 0) {
                    console.log(wave)
                }
                
                // Distortion
                const distortion = Math.pow(lineControl.distortionSlider.value / 1000 * 2, 4) + 1
                
                // Old effects to save
                //wave = (Math.min(1 - distortion, Math.max(0, wave)) + distortion) / (1 - distortion)
                
                //wave = Math.min(1, Math.max(0, wave * distortion * 10))

                // --------
                wave = Math.min(0.5, Math.max(-0.5, (wave - 0.5) * distortion)) + 0.5

                const colorSliderValue = lineControl.colorSlider.value / 1000
                const brightnessSliderValue = lineControl.brightnessSlider.value / (1000 / 2) - 1

                /*
                // Fade between red, green, and blue
                var peakRed = 0
                var peakGreen = 0
                var peakBlue = 0

                if (colorSliderValue < 1/2) {
                    peakRed = (1 - colorSliderValue / (1/2)) * 255
                    peakGreen = 255 - peakRed
                    peakBlue = 0
                } else {
                    peakRed = 0
                    peakGreen = (1 - (colorSliderValue - 1/2) / (1/2)) * 255
                    peakBlue = 255 - peakGreen
                }
*/
                const peakColor = hueToRGB(colorSliderValue)
                var peakRed = peakColor[0] * 255
                var peakGreen = peakColor[1] * 255
                var peakBlue = peakColor[2] * 255

                const wavePointRed = wave * peakRed
                const wavePointGreen = wave * peakGreen
                const wavePointBlue = wave * peakBlue
                green = green + wavePointGreen * brightnessSliderValue
                red = red + wavePointRed * brightnessSliderValue
                blue = blue + wavePointBlue * brightnessSliderValue
            }

            const color = "rgb(" + red + ", " + green + ", " + blue + ")"

            cell.style.backgroundColor = color
            cell.style.width = '400px'
            cell.style.height = '1px'
            row.appendChild(cell)
        }
        canvas.appendChild(row)
    }
}

main();