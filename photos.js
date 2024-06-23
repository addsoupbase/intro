'use strict';
class Avatar extends Image {
    static all = []
    static cycle = function* () {
        yield* Avatar.all
    }
    static current = Avatar.cycle()
    constructor(src, text) {
        super()
        this.src = 'img/avatars/' + src + '.png'
        this.preload = true;
        this.text = text ?? src.charAt(0).toUpperCase() + src.slice(1)
        this.onload = () =>     
            { 
                Avatar.all.push(this); 
                console.log(this.src + ' Loaded :)') 
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
        this.onload = () =>     
            {
                 Sprite.all.push(this); 
                 console.log(this.src + ' Loaded :)')   
            }
    }
}
let aya = new Avatar('aya', 'Aya'),
    ghostie = new Avatar('ghostie',),
    retro = new Avatar('retro',),
    cunder = new Avatar('cunder',),
    lorex = new Avatar('lorex',),
    fourche = new Avatar('fourche',),
    rogue = new Avatar('rogue',),
    indie = new Avatar('indie',),
    apollo = new Avatar('apollo',),
    casey = new Avatar('casey',),
    chlo = new Avatar('chlo',),
    crazy = new Avatar('crazy',),
    drifter = new Avatar('drifter'),
    gilly = new Avatar('gilly'),
    bugs = new Avatar('ilikebugs2', 'i_likebugs2'),
    lunza = new Avatar('lunza'),
    may = new Avatar('may'),
    mmaddie = new Avatar('mothmaddie'),
    neboola = new Avatar('neboola'),
    znx = new Avatar('znsxxe'),
    vio = new Avatar('vio'),
    khaotic = new Avatar("khaotic", "khaotic good"),
    kae = new Avatar("kae"),
    rohan = new Avatar("rohan"),
    bbg = new Avatar("bbg", "bbg.avarice"),
    rainmint = new Avatar("rainmint"),
    rue = new Avatar("rue"),
    copy = new Avatar('copy', 'CopyID'),
    valerie = new Avatar('valerie'),
    nova = new Avatar('nova',"supernova"),
    mr_clownette = new Avatar('mr_clownette'),
    stuella = new Avatar('stu',"Stuella"),
    stu = new Avatar('stu2','Stu'),
    ashley = new Avatar('ashley'),
    lexi = new Avatar("lexi"),
    babs = new Avatar("babs"),
    elipoopsrainbows= new Avatar("elipoopsrainbows")

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
