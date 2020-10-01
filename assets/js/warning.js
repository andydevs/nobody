const chance = 0.25
let warning = document.getElementById('warning-content')
if (Math.random() < chance) {
    warning.innerHTML = `
    <p>If you're reading this... I made a mistake</p>
    <p>I should've never joined this evil organization</p>

    <p>These people... these souls... how many souls have</p>
    <p>we reaped... how many lives have we taken... sentenced</p>
    <p>the innocent to a fate worse than death. Don't make the</p>
    <p>same mistakes I did. Don't go down this path.</p>

    <p>Be better than me... Be better than us.</p>
    `
}