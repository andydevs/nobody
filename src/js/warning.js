document.addEventListener("DOMContentLoaded", function () {
    // Warning page
    var chance = 0.09
    var warning = document.getElementById('warning-content')
    if (Math.random() < chance) {
        warning.innerHTML = '<p>It\'s evil... stay away</p>'
    }
});