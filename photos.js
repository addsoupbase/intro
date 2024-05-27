'use strict';
class Avatar extends Image {
    static all = []
    constructor(src, text) {
        super()
        this.src = 'img/avatars/' + src + '.png'
        this.preload = true;
        this.text = text ?? src.charAt(0).toUpperCase() + src.slice(1)
        Avatar.all.push(this)
    }
}
let aya = new Avatar('aya', 'Aya'),
    ghostie = new Avatar('ghostie', ),
    retro = new Avatar('retro', ),
    cunder = new Avatar('cunder', ),
    lorex = new Avatar('lorex', ),
    fourche = new Avatar('fourche', ),
    rogue = new Avatar('rogue', ),
    indie = new Avatar('indie',),
    apollo = new Avatar('apollo',),
    casey = new Avatar('casey',),
    chlo = new Avatar('chlo',),
    crazy = new Avatar('crazy',),
    drifter = new Avatar('drifter'),
    gilly = new Avatar('gilly'),
    bugs = new Avatar('ilikebugs2','i_likebugs2'),
    lunza = new Avatar('lunza'),
    may = new Avatar('may'),
    mmaddie = new Avatar('mothmaddie'),
    neboola = new Avatar('neboola'),
    znx = new Avatar('znsxxe')

let gorebyss = new Image();
gorebyss.src = 'img/gorebyssspritesheet.png'
gorebyss.preload = true
gorebyss.frames = 9
let phione = new Image();
phione.src = "img/phionesprite.png"
phione.frames = 10
let sharpedo = new Image()
sharpedo.frames = 8;
sharpedo.src = 'img/sharpedospritesheet.png'
let kyogre = new Image()
kyogre.frames = 10;
kyogre.src = 'img/kyogrespritesheet.png'
let manaphy = new Image()
manaphy.src = 'img/manaphysprite.png'
manaphy.frames = 8
let seadra = new Image()
seadra.src = 'img/seadrasprite.png'
seadra.frames = 5
let huntail = new Image()
huntail.src = 'img/huntailsprite.png'
huntail.frames = 4
let carvanha = new Image()
carvanha.src = 'img/carvanhasprite.png'
carvanha.frames = 4
let lanturn = new Image()
lanturn.src = 'img/lanturnsprite.png'
lanturn.frames = 4
let lanturnShiny = new Image()
lanturnShiny.src = 'img/lanturnshinysprite.png'
lanturnShiny.frames = lanturn.frames;
let corsola = new Image()
corsola.src = 'img/corsolasprite.png'
corsola.frames = 4
let wailord = new Image()
wailord.src = 'img/wailordsprite.png'
wailord.frames = 12




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
