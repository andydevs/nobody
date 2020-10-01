const chance = 0.09
let warning = document.getElementById('warning-content')
if (Math.random() < chance) {
    warning.innerHTML = `<p>It's evil... stay away</p>`
}