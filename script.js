'use strict';
console.log("%cHII", "color:teal;font-size:30px");
let radius = 1;
const canvas = document.getElementById('canvas'),
    username = document.getElementById('user'),
    ctx = canvas.getContext('2d'),
    pfp = document.getElementById('pfp');
let frame = 0;
Math.choose = (...a) => a[Math.floor(Math.random() * a.length)];
const preset = document.getElementById('preset')
function loadPage(page) {
    switch (page) {
        case 'about': {
            preset.textContent = ''
            let holder = document.createElement('div')
            holder.className = 'contain3'
            preset.appendChild(holder)
            let ms = document.createElement('img')
            ms.src = MIS.src
            ms.width = 150
            ms.title = "Misdreavus, Drawn by Indie"
            ms.className = 'contain2'
            holder.appendChild(document.createElement('p'))

            holder.appendChild(ms)
            let texx = document.createElement('p')
            texx.className = 'subtext'
            texx.style.fontSize = '15px'
            texx.innerHTML = 'HII i really like misdreavus and the colour teal. IM REALLY HYPER AND SILLY SOMETIMES So if i just like type random stuff in chat that makes no sense just ignore it!! i try to be nice to everyone when i can and try not to argue with people. i like doing software development like this website, i made it myself and worked really hard on it so i hope you like it! i know theres not much yet though'
            holder.appendChild(texx)

        }
            break;
        case 'love': {
            preset.textContent = ''
            let holder = document.createElement('div')
            holder.className = 'contain3'
            preset.appendChild(holder)

            let texx = document.createElement('p')
            texx.className = 'subtext'
            texx.style.fontSize = '15px'
            texx.innerHTML = 'there are SO MANY PEOPLE but thank you all <3 i will put everyone on here eventually so please be patient as it takes a lot of work'
            holder.appendChild(texx)

        }
            break;
        case 'made': {
            preset.textContent = ''
            let holder = document.createElement('div')
            holder.className = 'contain3'
            preset.appendChild(holder)
            let ms = document.createElement('img')
            ms.src = art1.src
            ms.width = 300
            ms.id = 'imagee'
            ms.className = 'contain2'

            holder.appendChild(document.createElement('p'))
            holder.appendChild(ms)
            let mac = document.createElement('div')
            holder.appendChild(mac)
            for (let i = 0; i < 2; i++) {
                let btnn = document.createElement('button')
                btnn.className = 'btn'
                btnn.innerHTML = i ? '>' : '<'
                btnn.style.position = 'relative'
                btnn.style.bottom = '-5px'
                btnn.onclick = i ? function () {
                    cu++
                    if (cu > sources.length - 1) {
                        cu = 0
                    }
                    let IMG = document.getElementById('imagee')
                    IMG.src = sources[cu].src

                } : function () {
                    cu--
                    if (cu < 0) {
                        cu = sources.length - 1
                    }
                    let IMG = document.getElementById('imagee')
                    IMG.src = sources[cu].src



                }
                mac.appendChild(btnn)
            }
            let texx = document.createElement('p')
            texx.className = 'subtext'
            texx.style.fontSize = '15px'
            texx.innerHTML = 'the above is pokemon art i made using sprites from the games (i only made the scene)'
            holder.appendChild(texx)
            let xnbhy = document.createElement('p')
            xnbhy.className = 'main'
            xnbhy.innerHTML = 'Online Stuff'
            holder.appendChild(xnbhy)
            {
                let runningOutOfNameIdeas = document.createElement('a')
                runningOutOfNameIdeas.href = 'https://addsoupbase.github.io/whatever'
                runningOutOfNameIdeas.innerHTML = 'Recursive Shape Thing'
                holder.appendChild(runningOutOfNameIdeas)

            }
            {
                let texx2 = document.createElement('p')
                texx2.className = 'subtext'
                texx2.style.fontSize = '15px'
                texx2.innerHTML = 'I\'m honestly not really sure what this is but i like what i made and i learned a lot'
                holder.appendChild(texx2)
            }
            let iiii = document.createElement('a')
            iiii.href = 'https://addsoupbase.github.io/twehg'
            iiii.innerHTML = 'World\'s even harderest game'
            holder.appendChild(iiii)

            {
                let texx2 = document.createElement('p')
                texx2.className = 'subtext'
                texx2.style.fontSize = '15px'
                texx2.innerHTML = 'A remake of the old flash game "The world\'s hardest game". It\'s not done and only has a few levels but its kewl i guess!! (music by i_likebugs2)'
                holder.appendChild(texx2)
            }
            {
                let runningOutOfNameIdeas = document.createElement('a')
                runningOutOfNameIdeas.href = 'https://addsoupbase.github.io/sort'
                runningOutOfNameIdeas.innerHTML = 'Sorting thing'
                holder.appendChild(runningOutOfNameIdeas)

            }
            {
                let texx2 = document.createElement('p')
                texx2.className = 'subtext'
                texx2.style.fontSize = '15px'
                texx2.innerHTML = 'its one of those sorting algorithm things'
                holder.appendChild(texx2)
            }

        }
            break;
    }

}
function darkenPage() {
    canvas.style.backgroundColor = `rgb(${14 - (window.scrollY / 100)}, ${132 - (window.scrollY / 100)}, ${228 - (window.scrollY / 100)})`
}
let sources = [art1, art2, art3, art4, art5, art6], cu = 0;
let addLetters = function* () {
    yield username.innerHTML = 'a'
    yield username.innerHTML += 'd'
    yield username.innerHTML += 'd'
    yield username.innerHTML += 's'
    yield username.innerHTML += 'o'
    yield username.innerHTML += 'u'
    yield username.innerHTML += 'p'
    yield username.innerHTML += 'b'
    yield username.innerHTML += 'a'
    yield username.innerHTML += 's'
    yield username.innerHTML += 'e'
    for (let i = 0; i < 2; i++) {
        yield
    }
    username.innerHTML = '>' + username.innerHTML

    yield username.style.fontFamily = 'OCR A Std, monospace'
    for (let i = 0; i < 2; i++) {
        yield
    }
    yield username.style.fontFamily = 'Cursive'
    for (let i = 0; i < 2; i++) {
        yield
    }
    yield username.style.fontFamily = 'lexend'

}()
let mousepos = {
    x: 0,
    y: 0
},
    rgb = {
        r: 255,
        g: 0,
        b: 0
    }
let otherTime;
let time = setInterval(() => {
    if (username.innerHTML === '&nbsp;') {
        username.innerHTML = '_'
    }
    else if (username.innerHTML === '_') {
        username.innerHTML = '&nbsp;'
    }
}, 300)
function Update() {
    frame = requestAnimationFrame(Update)
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cycleColour()
    pfp.style.borderColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`
    /* radius *= 1.1;
     if (radius > 1) {
         radius = 1
     }*/
    /*   if (frame === 2000) {
           Shape.phrases.push('i hate myself',
               'wish i was dead',
               'you matter',
               'i was a mistake',
               'i\'m sorry for everything',
               'why am i still alive',
           )
           console.log(2)
       }*/
    if (frame === 100) {
        clearInterval(time)
        otherTime = setInterval(() => {
            if (addLetters.next().done) {
                clearInterval(otherTime)
                setTimeout(() => { username.innerHTML = 'addsoupbase' }, 400)
            }

        }, 150)
    }
    for (let o of Shape.toKill) {
        Shape._.splice(Shape._.indexOf(o), 1)

    }
    Shape.toKill = []
    Shape._.forEach((o) => {
        if (!(frame % 8)) {
            o.frame++
        }
        o.draw()

    })

    if (!(frame % 80)) {
        new Shape('bubble')







    }
    if (!(frame % 60) || frame < 50) {
        let f = new Shape('bubble2')
        f.y = canvas.height
        f.x = Math.floor(Math.random() * canvas.width)
        f.size = Math.choose(6, 8);
    }
    if (!(frame % 200)) {
        let nn = new Shape('poke')
        nn.img = Math.choose(gorebyss, phione, sharpedo, kyogre);
        nn.velocity *= 0.7
    }

}
function cycleColour() {
    if (rgb.r === 255 && rgb.g !== 255 && rgb.b === 0) {
        rgb.g += increase
    }
    if (rgb.r !== 0 && rgb.g === 255 && rgb.b === 0) {
        rgb.r -= increase
    }
    if (rgb.r === 0 && rgb.g === 255 & rgb.b !== 255) {
        rgb.b += increase
    }
    if (rgb.r === 0 && rgb.g !== 0 && rgb.b === 255) {
        rgb.g -= increase
    }
    if (rgb.r !== 255 && rgb.g === 0 && rgb.b === 255) {
        rgb.r += increase
    }
    if (rgb.r === 255 && rgb.g === 0 && rgb.b !== 0) {
        rgb.b -= increase
    }
    if (rgb.r > 255) {
        rgb.r = 255
    }
    if (rgb.r < 0) {
        rgb.r = 0
    }
    if (rgb.g > 255) {
        rgb.g = 255
    }
    if (rgb.g < 0) {
        rgb.g = 0
    }
    if (rgb.b > 255) {
        rgb.b = 255
    }
    if (rgb.b < 0) {
        rgb.b = 0
    }
}
const increase = 2;

class Shape {
    static _ = [];
    static toKill = []

    static fonts = [
        'Gill Sans, sans-serif',
        'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif',
        'lexend',
        'Bookman, URW Bookman L, serif',
        'American Typewriter, serif',
        'OCR A Std, monospace',
        'Apple Chancery, cursive',
        'Brush Script MT, Brush Script Std, cursive',
        'Stencil Std, fantasy', 'Blippo, fantasy',
        'Chalkduster, fantasy', 'Trattatello, fantasy',
        'Cursive',
        'Fantasy',
        'Brush Script MT']

    static colors = [
        '#478eff',
        '#47d1ff',
        '#47ffd7',
        '#47ff9a',
        '#47ff5c',
        '#8eff47',
        '#d7ff47',
        '#ffe647',
        '#ff9a47',
        '#ff6347',
        '#5c47ff',
        '#9747ff',
        '#ce47ff',
        '#ff47ff',
        '#ff47a9']

    static phrases = [
        'ily',
        'hehe',
        '<3',
        ':D',
        'hugs',
        ':3',
        'you>>>',
        ':)',
        ':P',
        'u=epic',
        'heart',
        'xoxo',
        'HIYEE',
        '^v^']

    constructor(type, text) {
        this.shape = Math.floor(Math.random() * 3) + 3
        this.size = Math.floor(Math.random() * 10) + 20
        this.type = type
        this.invuln = false
        this.unpoppable = false
        this.popped = false
        //  this.img = Math.choose(rainmint)
        this.text = text ?? Math.choose(...Shape.phrases)
        // this.x = Math.choose(0 - this.size, canvas.width + this.size)
        this.rot = 0;
        this.opacity = 0.5
        this.font = `${this.size}px ${Math.choose(...Shape.fonts)}`
        this.color = Math.choose(...Shape.colors)
        this.velocity = 2
        this.velocity *= Math.choose(1, -1)
        this.velocityY = 0
        this.frame = 1
        this.scaleX = 1
        this.t = Math.choose(1, 2)
        if (this.velocity > 0) {
            this.x = 0 - this.size
        }
        else {
            this.x = canvas.width + this.size
        }
        this.y = Math.floor(Math.random() * canvas.height - 50) + 50
        Shape._.push(this)
    }
    draw() {
        if (this.velocity < 0) {
            this.scaleX = -1
        }
        if (this.popped) {
            this.opacity -= 0.1;
            this.size++
            if (this.opacity <= 0) {
                this.opacity = 0
                this.kill()
            }
        }
        if (this.x + this.size < -100 || this.x - this.size > canvas.width + 100 || this.y < -this.size) {
            this.kill()
        }
        this.x += this.velocity
        this.y += this.velocityY
        switch (this.type) {
            case 'shape':
                {

                    this.rot += this.velocity / 80
                    ctx.lineWidth = 3
                    ctx.beginPath()
                    ctx.save()
                    ctx.translate(this.x, this.y)
                    ctx.rotate(this.rot)
                    ctx.moveTo(0 + (this.size * 1.4) * Math.cos(0), 0 + (this.size * 1.4) * Math.sin(0));
                    for (var i = 1; i <= +this.shape; i++) {
                        ctx.lineTo(0 + (this.size * 1.4) * Math.cos(i * 2 * Math.PI / +this.shape), 0 + (this.size * 1.4) * Math.sin(i * 2 * Math.PI / +this.shape));
                    }
                    ctx.closePath();
                    ctx.stroke()
                    ctx.fillStyle = this.color
                    ctx.fill()

                    ctx.restore()
                }
                break;
            case 'text':
                {
                    ctx.shadowColor = 'blue';
                    ctx.shadowBlur = 15;
                    ctx.textAlign = "center";
                    ctx.font = this.font
                    ctx.fillStyle = '#550ca8'
                    ctx.fillText(this.text, this.x, this.y)
                }
                break;
            case 'bubble': {
                ctx.lineWidth = 3
                ctx.globalAlpha = this.opacity * 2
                ctx.beginPath()
                ctx.save()
                ctx.translate(this.x, this.y)
                if (this.img) ctx.drawImage(this.img, (-this.size / 2) - 2, (-this.size / 2) - 2, this.size * 1.2, this.size * 1.2)

                ctx.arc(0, 0, this.size, 0, Math.PI * 2)
                ctx.strokeStyle = 'rgb(14, 67, 228)'
                ctx.stroke()
                ctx.fillStyle = 'rgb(17, 23, 212)'
                ctx.globalAlpha = this.opacity
                ctx.fill()
                ctx.beginPath()
                ctx.arc(0, 0, this.size * 0.7, -toRad(90), 0)
                ctx.strokeStyle = 'lightblue'
                ctx.stroke()
                ctx.restore()
                this.t === 1 ? this.velocityY = Math.sin(frame / 60) * 2 : this.velocityY = Math.cos(frame / 60) * 2

            }
                break;
            case 'bubble2': {
                this.unpoppable = true
                this.velocityY = -2
                ctx.lineWidth = 3
                ctx.globalAlpha = this.opacity * 2
                ctx.beginPath()
                ctx.save()
                ctx.translate(this.x, this.y)

                ctx.arc(0, 0, this.size, 0, Math.PI * 2)
                ctx.strokeStyle = 'rgb(14, 67, 228)'
                ctx.stroke()
                ctx.fillStyle = 'rgb(17, 23, 212)'
                ctx.globalAlpha = this.opacity
                ctx.fill()
                ctx.beginPath()
                ctx.arc(0, 0, this.size * 0.7, -toRad(90), 0)
                ctx.strokeStyle = 'lightblue'
                ctx.stroke()
                ctx.restore()
                this.t === 1 ? this.velocity = Math.sin(frame * 6) * 2 : this.velocity = Math.cos(frame * 6) * 2

            }
                break;
            case 'seaweed': {
                this.x = canvas.x / 4
                this.y = 300
                ctx.beginPath()
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.stroke()
                ctx.restore()
            }
                break
            case 'image': {
                this.velocityY = -1;
                this.velocity = 0
                this.size = 30
                ctx.font = '20px Lexend'
                ctx.textAlign = 'center'
                ctx.save()

                ctx.translate(this.x, this.y)

                /*   switch (this.img) {
                       case rainmint:
                           ctx.fillText('Rainmint', 0, this.size * 1.5)
                   }*/
                ctx.drawImage(this.img,
                    (-this.size / 2) - 2,
                    (-this.size / 2) - 2,
                    this.size * 1.2,
                    this.size * 1.2)
                ctx.restore()
            }
                break;
            case 'poke':
                this.unpoppable = true
                this.velocityY = 0
                let crop = {
                    x: 0,
                    y: 0,
                }
                switch (this.img) {
                    case gorebyss:
                        crop.x = 70
                        crop.y = 75
                        break
                    case phione:
                        crop.y = 50;
                        crop.x = 40
                        break
                    case sharpedo:
                        crop.x = 50;
                        crop.y = 75;
                        break;
                    case kyogre:
                        crop.x = 100;
                        crop.y = 100;
                        break
                    default:
                        crop.y = 75;
                        crop.x = 75;
                        break
                }
                {
                    if (this.frame > this.img.frames - 1) {
                        this.frame = 0
                    }
                    ctx.save()

                    ctx.translate(this.x, this.y)
                    ctx.scale(this.scaleX, 1)

                    ctx.drawImage(this.img, (this.img.width / this.img.frames) * this.frame, 0, this.img.width / this.img.frames, this.img.height, 0, 0, crop.x || 100, crop.y || 100)
                    ctx.restore()
                }
                break;
        }

    }
    kill() {
        if (this.invuln) {
            return
        }
        this.invuln = true;
        Shape.toKill.push(this)
    }

}
Update()

/*window.addEventListener('mousemove',(o)=>{
mousepos.x = o.x
mousepos.y = o.y

})
*/
window.addEventListener('mousedown', (c) => {
    for (let o of Shape._) {
        if (o.unpoppable) {
            continue
        }
        if (Math.abs(o.x - c.x) < o.size && Math.abs(o.y - c.y) < o.size && !o.popped) {
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
})
function toRad(ang) {
    return ang * Math.PI / 180
}
/*window.addEventListener('keydown', (o) => {
    if (!o.repeat) {
        switch (o.key) {
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'g':
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                let n = new Shape('text', o.key)
                n.color = `rgb(${rgb.r},${rgb.g},${rgb.b})`
                break;
        }
    }
})*/
