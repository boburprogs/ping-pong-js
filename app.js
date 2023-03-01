const playerOne = document.querySelector(".player-one")
const playerTwo = document.querySelector(".player-two")
const select = document.querySelector(".select")

let player1Score = 0
let player2Score = 0
let gameFinish = 4
let gameOver = true 
let audio = new Audio("./sounds/clap.mp3");

function imgRandom() {
    let random = Math.ceil(Math.random() * 5)
    document.querySelector(".image").src = `images/ping-pong-${random}.jpg`
}

imgRandom()
select.addEventListener("change", () => {
    gameFinish = select.value

    player1Score = 0
    player2Score = 0
    playerOne.textContent = player1Score
    playerTwo.textContent = player2Score
    playerOne.style.color = "#123456"
    playerTwo.style.color = "#123456"
    gameOver = true
    imgRandom()
})

document.querySelector(".player-one-btn").addEventListener("click", () => {
    if (gameOver) {{   player1Score++
            playerOne.textContent = player1Score
    } if (gameFinish == player1Score) {
            audio.play()
            playerOne.style.color = "green"
            playerTwo.style.color = "red"
            gameOver = false
         }
    }
})

document.querySelector(".player-two-btn").addEventListener("click", () => {
    if (gameOver) {
         {
            player2Score++
            playerTwo.textContent = player2Score
        } if (gameFinish == player2Score) {
            audio.play()
            playerTwo.style.color = "green"
            playerOne.style.color = "red"
            gameOver = false
         }
    }
})

document.querySelector(".reset-btn").addEventListener("click", () => {
    player1Score = 0
    player2Score = 0
    playerOne.textContent = player1Score
    playerTwo.textContent = player2Score
    playerOne.style.color = "#123456"
    playerTwo.style.color = "#123456"
    gameOver = true
    audio.volume = 0
    imgRandom()
})

