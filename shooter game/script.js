const $shooter = document.querySelector('.shooter')
const $score = $shooter.querySelector('.score .value')
const $targets = $shooter.querySelector('.targets')
let score = 0

const createTarget = () =>
{
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 88}%`
    $target.style.left = `${Math.random() * 88}%`
    $target.addEventListener('mouseenter', () =>
    {
        score++
        $score.textContent = score
        $targets.removeChild($target)
        window.clearTimeout(timeoutId)
    })
    $targets.appendChild($target)
    window.setTimeout(createTarget, Math.random() * 1000)
    const timeoutId = window.setTimeout(() =>
    {
        $targets.removeChild($target)
    }, 1000)
}

createTarget()