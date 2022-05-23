// Variables
let currentLevel = 0

let clicks = 0

let mult = 1
let mass = 0.002
let temp = 1000
let lum = 0.25

const classes = [
  {
    name: 'Protostar',
    imagesrc: 'protostar.jpg',
    threshes: {
      mass: 0.1,
      temp: 3000,
      lum: 15
    },
    mult: 2,
    color: '#EF2A08'
  },
  {
    name: 'Main Sequence Star',
    imagesrc: 'mainsequence.jpg',
    threshes: {
      mass: 4,
      temp: 3500,
      lum: 50
    },
    mult: 5,
    color: '#FFFF84 '
  },
  {
    name: 'Red Giant',
    imagesrc: 'redgiant.jpg',
    threshes: {
      mass: 4.5,
      temp: 4000,
      lum: 75
    },
    mult: 15,
    color: '#D40B0B'
  },
  {
    name: 'White Dwarf',
    imagesrc: 'whitedwarf.jpg',
    threshes: {
      mass: 256,
      temp: 16384,
      lum: 256
    },
    mult: 40,
    color: '#C2FFF7'
  },
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

const starupgrade = document.getElementById("star-upgrade")
const starButton = document.querySelector("button#star-button")
const starPriceSpan = document.querySelector("span#star-price")
const massThreshSpan = document.querySelector("span#mass-thresh")
const tempThreshSpan = document.querySelector("span#temp-thresh")
const lumThreshSpan = document.querySelector("span#lum-thresh")
const starClassSpan = document.querySelector("span#star-class")

const finalMessage = document.querySelector("span#final-message")

// HTML Interactives Initialization 
clickBox.value = clicks

multBox.value = mult
massBox.value = mass
tempBox.value = temp
lumBox.value = lum

let massPrice = massPriceSpan.innerHTML
let tempPrice = tempPriceSpan.innerHTML
let lumPrice = lumPriceSpan.innerHTML

let starPrice = starPriceSpan.innerHTML
let massthresh = massThreshSpan.innerHTML
let tempthresh = tempThreshSpan.innerHTML
let lumthresh = lumThreshSpan.innerHTML

// Click Button onClick
clickButton.onclick = () => {
  clicks += mult
  update()
}

// Upgrade Button onClicks
massButton.onclick = () => {
  clicks -= massPrice
  massPrice *= 2
  mass *= 5
  update()
}
tempButton.onclick = () => {
  clicks -= tempPrice
  tempPrice *= 2
  temp += 500
  update()
}
lumButton.onclick = () => {
  clicks -= lumPrice
  lumPrice *= 2
  lum *= 4
  update()
}

// Star Button onClick
starButton.onclick = () => {
  clicks -= starPrice
  starPrice = Math.floor(2.2 * starPrice)
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
  
  // Variable Updates
  name = classes[currentLevel].name
  massthresh = classes[currentLevel].threshes.mass
  tempthresh = classes[currentLevel].threshes.temp
  lumthresh = classes[currentLevel].threshes.lum
  mult = classes[currentLevel].mult
  color = classes[currentLevel].color
  
  // Span Updates
  massThreshSpan.innerHTML = massthresh
  tempThreshSpan.innerHTML = tempthresh
  lumThreshSpan.innerHTML = lumthresh
  starClassSpan.innerHTML = name
  document.getElementById("class-image").src=classes[currentLevel].imagesrc
  if (name == 'White Dwarf') {
    starupgrade.parentNode.removeChild(starupgrade);
    finalMessage.innerHTML = "You Win!"; 
  }
  
  // Other Updates
  currentLevel ++
  starClassSpan.style.color = color
}