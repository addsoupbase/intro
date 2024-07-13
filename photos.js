'use strict';
let Text = ''
class Avatar extends Image {
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
            console.error(this.src)
            if (this.src.includes('.png')) {
                this.src = this.src.replace('.png', '.jpg')
            }
        }
    }
}
class Sprite extends Image {
    static all = []
    constructor(src, frames) {
        super()
        this.src = 'img/' + src + '.png';
        this.frames = frames;
        this.preload = true;
        this.onload = () => {
            Sprite.all.push(this);
            //     console.log(this.src + ' Loaded :)')   
        }
    }
}
let AvatarStack = [
    ["aya", "Aya"],
    ["ghostie"],
    ["cunder"],
    ["lorex"],
    ["fourche", 'fourche7'],
    ["rogue"],
    ["indie"],
    ["casey"],
    ["chlo"],
    ["crazy"],
    ["drifter"],
    ["gilly"],
    ["ilikebugs2", "i_likebugs2"],
    ["lunza"],
    ["may"],
    ["mothmaddie"],
    ["neboola"],
    ["znsxxe"],
    ["vio"],
    ["khaotic", "khaotic good"],
    ["kae"],
    ["rohan"],
    ["rainmint"],
    ["rue"],
    ["copy", "CopyID"],
    ["valerie"],
    ["nova", "supernova"],
    ["mr_clownette"],
    ["stu", "Stuella"],
    ["stu2", "Stu"],
    ["ashley"],
    ["lexi"],
    ["babs"],
    ["elipoopsrainbows"],
    ["birdie"],
    ["elenfnf1"],
    ["ledan"],
    ["luna"],
    ['mephistopheles73', 'God ruheub'],
    ['lazy'],
    ['zoozi'],
    ['glente'],
    ['morrfie'],
    ['random',"random_userlol"],
    ["gib"]
]
for (let [file, name] of AvatarStack) {
    if (name) {
        new Avatar(file, name)
    }
    else {
        new Avatar(file)
    }
}

let gorebyss = new Sprite('gorebyssspritesheet', 9),
    phione = new Sprite('phionesprite', 10),
    sharpedo = new Sprite('sharpedospritesheet', 8),
    kyogre = new Sprite('kyogrespritesheet', 10),
    manaphy = new Sprite('manaphysprite', 8),
    seadra = new Sprite('seadrasprite', 5),
    huntail = new Sprite('huntailsprite', 4),
    carvanha = new Sprite('carvanhasprite', 4),
    lanturn = new Sprite('lanturnsprite', 4),
    // lanturnShiny = new Sprite('lanturnshinysprite', 4),
    corsola = new Sprite('corsolasprite', 4),
    wailord = new Sprite('wailordsprite', 12)





let MIS = new Image()
MIS.src = "img/misdreavus-export.png"
let art1 = new Image()
art1.src = 'img/lurantis.png'
let art2 = new Image()
art2.src = 'img/nosepass.png'
let art3 = new Image()
art3.src = 'img/suicune.png'
let art4 = new Image()
art4.src = 'img/bleh.png'
let art5 = new Image()
art5.src = 'img/wynaut4_cropped.png'
let art6 = new Image()
art6.src = 'img/sprigatto.png'
