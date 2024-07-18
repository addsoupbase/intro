
import { Update, Shape } from './drawing.js'
import {AvatarStack} from './names.js'
console.log("%cHII", "color:teal;font-size:30px");
let radius = 1;
const canvas = $('#canvas')[0],

    date = new Date(),
    //day = new Audio(),
    //night = new Audio(),
    pfp = $('#pfp')[0];
export const ctx = canvas.getContext('2d');
//day.src = 'day.mp3'
//night.src = 'night.mp3'
//day.preload = true
//night.preload = true
//day.loop = night.loop = true;
//day.volume = night.volume = 0.5;
let mood = $('#mood')[0];
let playing = false;
window.hide = () => {
    $('#main').fadeOut()
}
Math.choose = (...a) => a[Math.floor(Math.random() * a.length)];
const preset = $('#preset')[0]
$('.contain').css({ left: '-300px', opacity: 0 })
    .animate({ left: 0, opacity: 1 }, 'slow')
window.load = (page) => {
    /*  $.when($('.parent').fadeOut()).then(()=>{
          $('#' + page).fadeIn()
      })*/
    $('.parent').hide()
    $('#' + page).fadeIn()
}
function darkenPage() {
    canvas.style.backgroundColor = `rgb(${14 - (window.scrollY / 80)}, ${132 - (window.scrollY / 80)}, ${228 - (window.scrollY / 80)})`
}
let cu = 0;

let mousepos = {
    x: 0,
    y: 0
}

ctx.imageSmoothingQuality = 'high';
(async () => {
    let text = await (await fetch('mood.txt?t=' + Date.now())).text()
    mood.innerHTML = text[0].toUpperCase() + text.slice(1)
    if (text.match(/sad|depressed|lonely|empty|worthless|weak/)) {
        mood.style.color = 'blue'
    }
    if (text.match(/hyper|happy|excited|euphoric|silly/)) {
        mood.style.color = 'yellow'
    }
    if (text.match(/calm|content|normal/)) {
        mood.style.color = 'cyan'
    }
    if (text.match(/angry|mad|frustrated/)) {
        mood.style.color = 'red'
    }
    if (text.match(/sick|injured/)) {
        mood.style.color = 'green'
    }
    if (text === 'bored') {
        mood.style.color = 'grey'
    }
})()

$(document).on({
    click: function (c) {
        for (let o of Shape._) {
            if (o.unpoppable) {
                continue
            }

            if (Math.abs(o.x - c.clientX) < o.size && Math.abs(o.y - c.clientY) < o.size && !o.popped) {
                o.popped = true
                if (o.img) {
                    let n = new Shape('image')
                    n.unpoppable = true
                    n.x = o.x;
                    n.y = o.y
                    n.img = o.img
                    o.img = null
                }

            }
        }
    }
})

Update()
