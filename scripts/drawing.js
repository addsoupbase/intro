import { ctx, miniCanvas } from './script.js'
import { Avatar, Sprite } from "./photos.js";
const username = $('#user')[0]
export let frame = 0; let otherTime,
    rgb = {
        r: 255,
        g: 0,
        b: 0
    }, time = setInterval(() => {
        if (username.innerHTML === '&nbsp;') {
            username.innerHTML = '_'
        }
        else if (username.innerHTML === '_') {
            username.innerHTML = '&nbsp;'
        }
    }, 300), addLetters = function* () {
        yield username.innerHTML = 'a'
        for (let i of 'ddsoupbase') {
            yield username.innerHTML += i

        }

        for (let i = 0; i < 2; i++) {
            yield
        }
        username.innerHTML = '→' + username.innerHTML

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
export const Update = () => {
  
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
        o.draw()
    })
    for (let o of Object.keys(everyFrame)) {
        if (!(frame % +o)) {
            everyFrame[o]()
        }
    }

    if (frame < 50) {
        everyFrame[60]()
    }

    ctx.fillStyle = 'rgb(14, 132, 228,0.25)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    miniCanvas.update()

}

export const Shape = class {
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
        this.offset = Math.random() * 4000
        let n = Avatar.current.next()
        if (!n.done) {
            this.img = n.value

        }
        else {
            Avatar.current = Avatar.cycle()
            this.img = Avatar.current.next().value
        }
        this.text = text ?? Math.choose(...Shape.phrases)
        // this.x = Math.choose(0 - this.size, canvas.width + this.size)
        this.rot = 0;
        this.opacity = 0.5
        this.font = `${this.size - 10}px ${Math.choose(...Shape.fonts)}`
        this.color = Math.choose(...Shape.colors)
        this.velocity = 2
        this.velocity *= Math.choose(1, -1)
        this.velocityY = 0
        this.frame = 1
        this.scaleX = 1
        this.t = Math.choose(1, 2)
        if (this.velocity > 0) {
            this.x = 0 - this.size - 300
        }
        else {
            this.x = canvas.width + this.size + 300
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
        if (this.x + this.size < -300 || this.x - this.size > canvas.width + 300 || this.y < -this.size - 20) {
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
                    ctx.strokeStyle = 'white'
                }
                break;
            case 'bubble': {
                ctx.lineWidth = 3
                ctx.globalAlpha = this.opacity * 2
                ctx.beginPath()
                ctx.save()
                ctx.translate(this.x, this.y)

                if (this.img) {
                    //   ctx.imageSmoothingEnabled=false
                    ctx.save()
                    ctx.arc(0, 0, this.img.width / 3, 0, Math.PI * 2)
                    ctx.clip()

                    ctx.drawImage(this.img, (-this.img.width / 2) / 1.5, (-this.img.height / 2) / 1.5, this.img.width / 1.5, this.img.height / 1.5)
                    ctx.restore()
                }
                ctx.beginPath()
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
                this.t === 1 ? this.velocityY = Math.sin((frame + this.offset) / 60) * 2 : this.velocityY = Math.cos((frame + this.offset) / 60) * 2

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
                this.t === 1 ? this.velocity = Math.sin((frame + this.offset) * 6) * 2 : this.velocity = Math.cos((frame + this.offset) * 6) * 2

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
                //       ctx.imageSmoothingEnabled=false
                ctx.globalAlpha = 1
                this.velocityY = -1;
                this.velocity = 0
                this.size = 30
                ctx.font = '20px Lexend'
                ctx.textAlign = 'center'
                ctx.save()
                ctx.beginPath()
                ctx.translate(this.x, this.y)


                ctx.fillText(this.img.text, 0, this.size * 1.5)
                /// ctx.strokeStyle='grey'
                ///  ctx.lineWidth=1
                //  ctx.strokeText(this.img.text,0,this.size*1.5)
                ctx.arc(0, 0, this.img.height / 2, 0, Math.PI * 2)

                ctx.clip()
                ctx.drawImage(this.img,
                    (-this.img.width / 2),
                    (-this.img.height / 2),
                    this.img.width,
                    this.img.height)


                ctx.restore()
            }
                break;
            case 'sparkle': {
                this.opacity -= 0.02
                this.velocity = 0
                if (this.opacity < 0) {
                    this.kill()
                    this.opacity = 0
                }
                ctx.save()
                ctx.globalAlpha = this.opacity
                ctx.translate(this.x, this.y)
                ctx.beginPath()
                ctx.moveTo(this.size, 0)
                ctx.lineTo(-this.size, 0)
                ctx.moveTo(0, this.size)
                ctx.lineTo(0, -this.size)
                ctx.strokeStyle = 'yellow'
                ctx.stroke()
                ctx.restore()
            }
                break;
            case 'poke':
                ctx.imageSmoothingEnabled = true
                this.unpoppable = true
                ctx.globalAlpha = 1
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.scale(this.scaleX, 1)

                this.velocityY = 0
                let crop = {
                    x: 75,
                    y: 75,
                }
                crop = Sprite.crops[this.img.name]?.call?.(this) || crop
                {
                    if (this.frame > this.img?.frames - 1) {
                        this.frame = 0
                    }


                    ctx.drawImage(this.img, (this.img.width / this.img.frames) * this.frame, 0, this.img.width / this.img.frames, this.img.height, 0, 0, crop.x, crop.y)
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
const everyFrame = {
    60: () => {
        let f = new Shape('bubble2')
        f.y = canvas.height
        f.x = Math.floor(Math.random() * canvas.width)
        f.size = Math.choose(6, 8);
    },
    80: () => {
        new Shape('bubble')
    },
    100: () => {
        let nn = new Shape('poke')
        nn.img = Math.choose(...Sprite.all);
        nn.velocity *= 0.7
    },
    8: () => {
        Shape._.forEach(o => {
            o.frame++
        })
    }
}

function cycleColour() {
    if (rgb.r === 255 && rgb.g !== 255 && rgb.b === 0) {
        rgb.g += 2 //increase
    }
    if (rgb.r !== 0 && rgb.g === 255 && rgb.b === 0) {
        rgb.r -= 2 //increase
    }
    if (rgb.r === 0 && rgb.g === 255 & rgb.b !== 255) {
        rgb.b += 2 //increase
    }
    if (rgb.r === 0 && rgb.g !== 0 && rgb.b === 255) {
        rgb.g -= 2 //increase
    }
    if (rgb.r !== 255 && rgb.g === 0 && rgb.b === 255) {
        rgb.r += 2 //increase
    }
    if (rgb.r === 255 && rgb.g === 0 && rgb.b !== 0) {
        rgb.b -= 2 //increase
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
function toRad(ang) {
    return ang * Math.PI / 180
}