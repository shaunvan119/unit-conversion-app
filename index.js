
//Meter to feet
let num1 = 20
let num2 = 3.28084
//feet to meters
let num3 = 20
let num4 = 0.3048
// liters to gallons
let num5 = 20
let num6 = 3.785
//Galllons to liters
let num7 = 20
let num8 = 3.785412
//kilos to pounds 
let num9 = 20
let num10 = 2.20462
//Pounds to Kilos
let num11 = 20
let num12 = 2.205

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
//feet to meters
document.getElementById("num3-el").textContent = num3
document.getElementById("num4-el").textContent = num4

document.getElementById("num5-el").textContent = num5
document.getElementById("num6-el").textContent = num6

document.getElementById("num5-el").textContent = num7
document.getElementById("num6-el").textContent = num8

document.getElementById("num5-el").textContent = num9
document.getElementById("num6-el").textContent = num10

document.getElementById("num5-el").textContent = num11
document.getElementById("num6-el").textContent = num12

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let kilosEl = document.getElementById("kilos-el")
let poundEl = document.getElementById("pounds-el")
let multEl = document.getElementById("mult-el")
let divEl = document.getElementById("div-el")
let mulvEl = document.getElementById("mulv-el")
let mulmEl = document.getElementById("mulm-el")

function massPounds() {
    let result = num11 / num12
    poundEl.textContent = "Sum: " + result
}

function massKilos() {
    let result = num9 * num10
    kilosEl.textContent = "Sum: " + result
}

function multipleVolume() {
    let result = num7 * num8
    multEl.textContent = "Sum: " + result
}

function divideVolume() {
    let result = num5 / num6
    divEl.textContent = "Sum: " + result
}

function multiplyFeet() {
    let result = num3 * num4
    mulvEl.textContent = "Sum: " + result
}

function multiplyMeters() {
    let result = num1 * num2
    mulmEl.textContent = "Sum: " + result
}
