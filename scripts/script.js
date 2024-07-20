
import { Update, Shape, frame } from './drawing.js'
import { AvatarStack } from './names.js'
console.log("%cHII", "color:teal;font-size:30px");
let radius = 1;

const canvas = $('#canvas')[0];
let regexes = {
    sad: /sad|depressed|lonely|empty|worthless|weak/,
    happy: /hyper|happy|excited|euphoric|silly/,
    calm: /calm|content|normal/,
    angry: /angry|mad|frustrated|annoyed/,
    sick: /sick|injured/,
    bored: /bored|sleepy/
}
export const miniCanvas = {
    canvas: $('#miniCanvas')[0],
    text: null,
    color: null,
    all: [],
    update: function a(color, regex) {
       // setTimeout(a, 10)
        // miniCanvas.text ??= text.slice(0, text.length - 1)
        miniCanvas.regex ??= regex
        miniCanvas.color ??= color
        let w = miniCanvas.width,
            h = miniCanvas.height
        let c = miniCanvas.context
        c.clearRect(0, 0, 1000, 1000)
        c.fillStyle = color
        c.font = `bold 40px lexend`
        c.textBaseline = 'middle'
        c.textAlign = 'center'
        c.lineWidth = 2
        let moods = new Map()
        moods.set(regexes.sad, () => {
            c.font = `bold ${40 + Math.abs(Math.cos(frame / 200) * 30)}px lexend`
            c.rotate(Math.cos(frame / 20) / 10)

        })
        moods.set(regexes.angry, () => {
            c.translate(Math.cos(frame / 2) * 5, 0)

        })
        moods.set(regexes.calm, () => {
            c.translate(Math.cos(frame / 10) * 10, Math.sin(frame / 10) * 10)

        })
        moods.set(regexes.happy, () => {
            c.translate(0, -Math.abs(Math.sin(frame / 10)) * 20)

        })
        moods.set(regexes.bored, () => {
            c.translate(0, -Math.abs(Math.sin(frame / 1000)) * 20)

        })
        moods.set(regexes.sick, () => {
            c.translate(Math.cos(frame / 40) * 50, 0)
            c.rotate(frame / 300)

        })
        // Set the fill style and draw a rectangle
        //   c.fillStyle = miniCanvas.color;
        c.save()
        c.translate(w / 2, h / 2)
        // c.shadowColor = miniCanvas.color
        //  c.shadowBlur = 15
        moods.get(miniCanvas.regex)?.()
        c.strokeText(miniCanvas.text?.[0]?.toUpperCase() + miniCanvas.text?.slice(1), 0, 0)
        c.fillText(miniCanvas.text?.[0]?.toUpperCase() + miniCanvas.text?.slice(1), 0, 0)
        c.restore()

        /*            c.beginPath()
                    c.moveTo(w/2,0)
                    c.lineTo(w/2,h)
                    c.stroke()
                    c.beginPath()
                    c.moveTo(0,h/2)
                    c.lineTo(w,h/2)
                    c.stroke()*/

    }
};

const date = new Date(),
    //day = new Audio(),
    //night = new Audio(),
    pfp = $('#pfp')[0];
miniCanvas.context = miniCanvas.canvas.getContext('2d')
miniCanvas.width = miniCanvas.canvas.width
miniCanvas.height = miniCanvas.canvas.height
window.ing = miniCanvas
export const ctx = canvas.getContext('2d');
//day.src = 'day.mp3'
//night.src = 'night.mp3'
//day.preload = true
//night.preload = true
//day.loop = night.loop = true;
//day.volume = night.volume = 0.5;
let mood = $('#mood')[0];
let running = true;
window.hide = () => {
    $('#main').fadeOut()
}
export let toLoad = false
Math.choose = (...a) => a[Math.floor(Math.random() * a.length)];
const preset = $('#preset')[0]
$('.contain').css({ left: '-300px', opacity: 0 })
    .animate({ left: 0, opacity: 1 }, 'slow')
window.load = async (page) => {
    if (!running) {
        return
    }
    /*  $.when($('.parent').fadeOut()).then(()=>{
          $('#' + page).fadeIn()
      })*/
    cancelAnimationFrame(frame)



    running=false
    await $('.parent').hide().promise()
     $('#' + page).fadeIn()
    requestAnimationFrame(Update)
    running = true

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
    //mood.innerHTML = text[0].toUpperCase() + text.slice(1)
    let color = 'black'
    let regex = regexes.sad
    if (text.match(regexes.sad)) {
        color = 'blue'
    }
    if (text.match(regexes.happy)) {
        color = 'yellow'
        regex = regexes.happy
    }
    if (text.match(regexes.calm)) {
        color = 'cyan'
        regex = regexes.calm
    }
    if (text.match(regexes.angry)) {
        color = 'red'
        regex = regexes.angry
    }
    if (text.match(regexes.sick)) {
        color = 'green'
        regex = regexes.sick
    }
    if (text.match(regexes.bored)) {
        color = '#454545'
        regex = regexes.bored
    }
    miniCanvas.text = text
    miniCanvas.update(color, regex)
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
