let menu = document.querySelector('.mobile-menu')
let collapse = document.querySelector('.close')

menu.addEventListener('click', hamburger) 
collapse.addEventListener('click', close) 

function hamburger() {
    document.querySelector('.mobile-menu').classList.add('hide')
    document.querySelector('.close').classList.add('hide1')
    document.querySelector('.navigation').classList.add('active')
    document.querySelector('.opaque').classList.add('active')
}

function close() {
    document.querySelector('.mobile-menu').classList.remove('hide')
    document.querySelector('.close').classList.remove('hide1')
    document.querySelector('.navigation').classList.remove('active')
    document.querySelector('.opaque').classList.remove('active')

}

let drop = document.querySelector('.drop')

drop.addEventListener('click', show);

function show() {
    // document.querySelector('.service').classList.toggle('hide1')
}

let drops = document.querySelector('.drops')

drops.addEventListener('click', shows);

function shows() {
    // document.querySelector('.services').classList.toggle('hide1')
}

// MISSION
let mission = document.querySelector('.bullet-1')
let vision = document.querySelector('.bullet-2')


vision.addEventListener('click', () => {
    document.querySelector('.mission').classList.add('hide')
    document.querySelector('.vision').classList.add('hide1')
})

mission.addEventListener('click', () => {
    document.querySelector('.mission').classList.remove('hide')
    document.querySelector('.vision').classList.remove('hide1')
})