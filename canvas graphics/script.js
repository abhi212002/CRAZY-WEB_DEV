const $canvas = document.querySelector('canvas')
const context = $canvas.getContext('2d')
const mouse = { x: 0, y: 0 }

document.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX
    mouse.y = event.clientY
})

const ballCoords = { x: 0, y: 0 }

const loop = () =>
{
    window.requestAnimationFrame(loop)
    ballCoords.x += (mouse.x - ballCoords.x) / 10
    ballCoords.y += (mouse.y - ballCoords.y) / 10
    context.fillStyle = 'rgba(0, 0, 0, 0.2)'
    context.fillRect(0, 0, $canvas.width, $canvas.height)
    context.beginPath()
    context.arc(ballCoords.x, ballCoords.y, 50, 0, Math.PI * 2)
    context.fillStyle = 'Tomato'
    context.fill()
}
loop()
