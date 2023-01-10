const dino = document.getElementById('dino')
const kamen = document.getElementById('kamen')

function skok() {
    if (dispatchEvent.classList != 'skok') {
        dino.classList.add('skok')
        setTimeout(function() {
            dino.classList.remove('skok')
        }, 300)
    }
}

let da_li_je_ziv = setInterval(function() {
    let dinoGore = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'))
    let kamenLevo = parseInt(window.getComputedStyle(kamen).
    getPropertyValue('left'))
    
    if (kamenLevo > 0 && kamenLevo <70 && dinoGore >= 130) {
        dino.style.animationPlayState = 'paused'
        kamen.style.animationPlayState = 'paused'
        alert("Zao mi je ali igra je gotova!")
        window.location.reload()
    }
}, 10)

document.addEventListener('keydown', function (event) {
    skok()
})