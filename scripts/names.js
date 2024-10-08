import { Avatar } from "./photos.js"

export let AvatarStack = [
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
    ['random', "random_userlol"],
    ["gib"],
    ["rurikuu"],
    ['Regs', 'Regs_s'],
    ["lemmy"],
    ['mila'],
    ["na22","N/A22"],
    ["frannie4u"],
    ["schpun"],
    ['son_yukio']
]
let newest = AvatarStack[AvatarStack.length - 1][0],
    alias = AvatarStack[AvatarStack.length - 1][1] ?? newest;
$('#new').attr('src', 'img/avatars/' + newest + '.png')
$('#newestName')[0].innerHTML = alias[0].toUpperCase() + alias.slice(1)
let x = new Image()
x.src = 'img/avatars/' + newest + '.png'
x.onerror = function () {
    $('#new').attr('src', this.src.replace('png', 'jpeg'))
}
for (let [file, name] of AvatarStack) {
    if (name) {
        new Avatar(file, name)
    }
    else {
        new Avatar(file)
    }
}
