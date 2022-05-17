// Variables
let currentLevel = 0

let clicks = 0

let mult = 1
let mass = 0
let temp = 0
let lum = 0

let massthresh = 0.10
let tempthresh = 2000
let lumthresh = 10

const classes = [
  {
    name: 'protostar',
    threshs: {
      mass: 0.5,
      temp: 20000,
      lum: 40
    },
    mult: 2
  },
  {
    name: 's'
  }
]

// HTML Query Selectors
const clickButton = document.querySelector("button#click-button")
const clickBox = document.querySelector("input#click-box")

const multBox = document.querySelector("input#mult-box")

const massBox = document.querySelector("input#mass-box")
const massButton = document.querySelector("button#mass-button")
const massPriceSpan = document.querySelector("span#mass-price")

const tempBox = document.querySelector("input#temp-box")
const tempButton = document.querySelector("button#temp-button")
const tempPriceSpan = document.querySelector("span#temp-price")

const lumBox = document.querySelector("input#lum-box")
const lumButton = document.querySelector("button#lum-button")
const lumPriceSpan = document.querySelector("span#lum-price")

const starButton = document.querySelector("button#star-button")
const starPriceSpan = document.querySelector("span#star-price")

// HTML Interactives
clickBox.value = clicks

multBox.value = mult
massBox.value = mass
tempBox.value = temp
lumBox.value = lum

let massPrice = massPriceSpan.innerHTML
let tempPrice = tempPriceSpan.innerHTML
let lumPrice = lumPriceSpan.innerHTML

let starPrice = starPriceSpan.innerHTML

// Click Button onClick
clickButton.onclick = () => {
  clicks += mult
  update()
}

// Upgrade Button onClicks
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

// Star Button onClick
starButton.onclick = () => {
  clicks -= starPrice
  starPrice *= 2
  levelUp()
  update()
}

// Define Update Function
function update() {
  
  // Button Status Updates
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
  if (mass < massthresh || temp < tempthresh || lum < lumthresh || clicks < starPrice) {
    starButton.disabled = true
  }
  else {
    starButton.disabled = false
  }
  
  // Box Values Updates
  clickBox.value = clicks
  
  multBox.value = mult
  massBox.value = mass
  tempBox.value = temp
  lumBox.value = lum
  
  // Button Price Updates
  massPriceSpan.innerHTML = massPrice
  tempPriceSpan.innerHTML = tempPrice
  lumPriceSpan.innerHTML = lumPrice
 
  starPriceSpan.innerHTML = starPrice
}

// Define Level Up Function
function levelUp() {
  currentLevel ++
  mult = 
}