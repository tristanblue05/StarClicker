let clicks = 0
let ppc = 1
let price = 50
const button = document.querySelector("button#click")
const textBox = document.querySelector("input")
const upgrade = document.querySelector("button#upgrade")
const priceTag = document.querySelector("span#price")

textBox.value = clicks

button.onclick = () => {
  clicks += ppc
  textBox.value = clicks
  if (clicks >= price) {
    upgrade.disabled = false
    upgrade.style.backgroundColor = "lime"
  }
}

upgrade.onclick= () => {
  clicks -= price
  ppc *= 2
  price *= 2
  textBox.value = clicks
  priceTag.innerHTML = price
  upgrade.disabled = true
  upgrade.style.backgroundColor = "red"
}