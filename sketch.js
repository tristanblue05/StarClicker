// Variables
let clicks = 0

let mult = 1
let mass = 0
let temp = 0
let lum = 0

// HTML Query Selectors
const clickButton = document.querySelector("button#click-button")
const clickBox = document.querySelector("input#click-box")

const multBox = document.querySelector("input#mult-box")
const multButton = document.querySelector("button#mult-button")
const multPriceSpan = document.querySelector("span#mult-price")

const massBox = document.querySelector("input#mass-box")
const massButton = document.querySelector("button#mass-button")
const massPriceSpan = document.querySelector("span#mass-price")

const tempBox = document.querySelector("input#temp-box")
const tempButton = document.querySelector("button#temp-button")
const tempPriceSpan = document.querySelector("span#temp-price")

const lumBox = document.querySelector("input#lum-box")
const lumButton = document.querySelector("button#lum-button")
const lumPriceSpan = document.querySelector("span#lum-price")

// HTML Interactives
clickBox.value = clicks
multBox.value = mult
massBox.value = mass
tempBox.value = temp
lumBox.value = lum

let multPrice = multPriceSpan.innerHTML
let massPrice = massPriceSpan.innerHTML
let tempPrice = tempPriceSpan.innerHTML
let lumPrice = lumPriceSpan.innerHTML

// Click Button onClick
clickButton.onclick = () => {
  clicks += mult
  update()
}

// Upgrade Button onClicks
multButton.onclick = () => {
  clicks -= multPrice
  multPrice *= 2
  mult *= 2
  update()
}
massButton.onclick = () => {
  clicks -= massPrice
  massPrice *= 2
  mass += 1000
  update()
}
tempButton.onclick = () => {
  clicks -= tempPrice
  tempPrice *= 2
  temp += 1000
  update()
}
lumButton.onclick = () => {
  clicks -= lumPrice
  lumPrice *= 2
  lum += 1000
  update()
}

function update() {
  if (clicks < multPrice) {
    multButton.disabled = true
  }
  else {
    multButton.disabled = false
  }
  if (clicks < massPrice) {
    massButton.disabled = true
  }
  else {
    massButton.disabled = false
  }
  if (clicks < tempPrice) {
    tempButton.disabled = true
  }
  else {
    tempButton.disabled = false
  }
  if (clicks < lumPrice) {
    lumButton.disabled = true
  }
  else {
    lumButton.disabled = false
  }
  clickBox.value = clicks
  
  multBox.value = mult
  massBox.value = mass
  tempBox.value = temp
  lumBox.value = lum
  
  multPriceSpan.innerHTML = multPrice
  massPriceSpan.innerHTML = massPrice
  tempPriceSpan.innerHTML = tempPrice
  lumPriceSpan.innerHTML = lumPrice
}