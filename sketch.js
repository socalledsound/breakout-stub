let ball, paddle
let blocks = []
let score = 0
let gameOver = false

function setup(){
    createCanvas(800, 800)
    ball = new Ball(300, 300, 30)

}

function draw(){
    if(!gameOver){
        background(200)
        ball.update()
        ball.render()
    } else {
        drawgameOverScreen()
    }
}

function drawgameOverScreen(){
    background(200,10,20)
    textSize(60)
    text('GAME', width/2 - 100, 200)
    text('OVER', width/2 - 100, 400)
}