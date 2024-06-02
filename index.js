let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
function home1() {
    let res = + homeScore.textContent + 1
    homeScore.textContent = res 
}
function home2() {
    let res = + homeScore.textContent + 2
    homeScore.textContent = res 
}
function home3() {
    let res = + homeScore.textContent + 3
    homeScore.textContent = res 
}
function guest1() {
    let res = + guestScore.textContent + 1
    guestScore.textContent = res 
}
function guest2() {
    let res = + guestScore.textContent + 2
    guestScore.textContent = res 
}
function guest3() {
    let res = + guestScore.textContent + 3
    guestScore.textContent = res 
}

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}