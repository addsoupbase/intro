'use strict';
let Text = ''
export class Avatar extends Image {
    static all = []
    static cycle = function* () {
        yield* Avatar.all
    }
    static current = Avatar.cycle()
    constructor(src, text) {
        super(50, 50)
        this.src = 'img/avatars/' + src + '.png'
        this.preload = true;
        this.name = src
        this.named = true
        this.text = text ?? ((this.named = false), src.charAt(0).toUpperCase() + src.slice(1))
        this.onload = () => {
            Avatar.all.push(this);
            Text += '["' + this.name + `${this.named ? '", "' + this.text : ''}` + '"], '
            //   console.log(this.src + ' Loaded :)') 
        }
        this.onerror = () => {
            if (this.src.includes('.png')) {
                console.warn(this.text + ' did not use .png format, so i used .jpg instead')

                this.src = this.src.replace('.png', '.jpg')
            }
        }
    }
}
export class Sprite extends Image {
    static all = []
    static crops = {
        gorebyssspritesheet: function () {
            return {
                x: 70,
                y: 75,
            }
        },
        phionesprite: function () {
            return {
                x: 40,
                y: 50
            }
        },
        sharpedospritesheet: function () {
            this.velocity = 2 * Math.sign(this.velocity)
            return {
                x: 50,
                y: 75,
            }
        },
        kyogrespritesheet: function() {
            return {
                x: 130,
                y: 130
            }
        },
        wailordsprite: function() {
            this.velocity = 0.5 * Math.sign(this.velocity)
            return {
                x: 285,
                y: 320
            }
        },
        lanturnsprite: function() {
            return {
                x: 50,
                y: 70
            }
        },
        corsolasprite: function() {
            return {
                x: 25,
                y: 30
            }
        },
        seadrasprite: function() {
            return {
                x: 55,
                y: 60
            }
        },
        carvanhasprite: function() {
            return {
                x: 40,
                y: 50
            }
        },
        manaphysprite: function() {
            return { 
                x: 65,
                y: 60
            }
        }
    }
    constructor(src, frames) {
        super()
        this.name = src
        this.src = 'img/' + src + '.png';
        this.frames = frames;
        this.preload = true;
        this.onload = () => {
            Sprite.all.push(this);
            //     console.log(this.src + ' Loaded :)')   
        }
    }
}


for (let i = 0; i < 4; i++) {
    Sprite.all.push(
        new Sprite('gorebyssspritesheet', 9),
        new Sprite('phionesprite', 10),
        new Sprite('sharpedospritesheet', 8),
        new Sprite('manaphysprite', 8),
        new Sprite('gorebyssspritesheet', 9),
        new Sprite('manaphysprite', 8),
        new Sprite('seadrasprite', 5),
        new Sprite('huntailsprite', 4),
        new Sprite('carvanhasprite', 4),
        new Sprite('carvanhasprite', 4),
        new Sprite('lanturnsprite', 4),
        new Sprite('corsolasprite', 4))
}
new Sprite('kyogrespritesheet', 4)
new Sprite('wailordsprite', 12)
