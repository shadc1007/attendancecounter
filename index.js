// create three function increment(), decrement() and save
// when students joins the class +1 to the value of people entered
// else if student disconnect to the class -1 to the value of people entered
// if save button has been clicked, display the number people entered without removing the previous value
// when a new class starts reset the value of people entered

let peopleEntered = document.getElementById("people-entered")
console.log(peopleEntered)
let saveEl = document.getElementById("paragraph-el")
console.log(saveEl)

let count = 0

function increment() {
    count += 1
    peopleEntered.textContent = count
}
function decrement() {
    count -= 1
    peopleEntered.textContent = count
}
function save() {
    saveEl.textContent += count + " - "
    peopleEntered.textContent = 0
    count = 0


}