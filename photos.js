'use strict';
/*let rainmint = new Image()
rainmint.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241423603216678992/rainmint.png?ex=664a2553&is=6648d3d3&hm=9b177d1159b01970ccee04d971f2b471a7f85884e50987d3f4c9204527975e03&=&format=webp&quality=lossless&width=281&height=281'
rainmint.preload = true;*/
let gorebyss = new Image();
gorebyss.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241442920943587431/gorebyssspritesheet.png?ex=664a3751&is=6648e5d1&hm=91e5571b1af7a3cc291cedf192ce2f76a721bd36d2f49a741da8fef47dffabc8&=&format=webp&quality=lossless&width=475&height=70'
gorebyss.preload = true
gorebyss.frames = 9
let phione = new Image();
phione.src = 'https://cdn.discordapp.com/attachments/1152315845784117339/1241449599802150912/phionesprite.png?ex=664a3d89&is=6648ec09&hm=517553152cefb6a680b2a9620b97622a4fc9fb052c0be9ab880ebf3e334fcfc6&'
phione.frames = 10
let sharpedo = new Image()
sharpedo.frames = 8;
sharpedo.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241451958364274839/sharpedospritesheet.png?ex=664a3fbb&is=6648ee3b&hm=b3ccaf782cbc86d40e24656e5f9e37c4efd6a9f28301506f63a85d37524466d8&=&format=webp&quality=lossless&width=281&height=61'
let kyogre = new Image()
kyogre.frames = 10;
kyogre.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241453236364513393/kyogrespritesheet.png?ex=664a40ec&is=6648ef6c&hm=f6a9142d9ef0fb9a4adae1317d0ca932ac88ff1c7960a390bf341cacf8b3338d&=&format=webp&quality=lossless&width=704&height=79'
let manaphy = new Image()
manaphy.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241756853608644718/manaphysprite.png?ex=664b5bb0&is=664a0a30&hm=b1acf3c184475599d12dbd0432540a929801382358db2a57d9432fc813382f34&=&format=webp&quality=lossless&width=352&height=52'
manaphy.frames = 8
let seadra = new Image()
seadra.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241756425483718826/seadrasprite.png?ex=664b5b4a&is=664a09ca&hm=7ce86e7fde1668e9cc9c8c1115bcbde3b91e90fccfd28bfdb8d4309e482ac6a8&=&format=webp&quality=lossless&width=220&height=61'
seadra.frames = 5
let huntail = new Image()
huntail.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241757232417345636/huntailsprite.png?ex=664b5c0a&is=664a0a8a&hm=f4234b1ac04d1c5b744d2d9bcadfb5185bf5b305c537189b608f604c52963a2e&=&format=webp&quality=lossless&width=176&height=61'
huntail.frames = 4
let carvanha = new Image()
carvanha.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241757605135909044/carvanhasprite.png?ex=664b5c63&is=664a0ae3&hm=cb72610118b2f2659789b7b580ee5a0eb4b82b3d77575bd75d75368c6aff2690&=&format=webp&quality=lossless&width=140&height=52'
carvanha.frames = 4
let lanturn = new Image()
lanturn.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241764651037888593/lanturnsprite.png?ex=664b62f3&is=664a1173&hm=9b8406433c28246a4ffe0637c0fd03599cd091311d6fc078b829190f8a7e84e6&=&format=webp&quality=lossless&width=140&height=52'
lanturn.frames = 4
let lanturnShiny = new Image()
lanturnShiny.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241764651583406130/lanturnshinysprite.png?ex=664b62f3&is=664a1173&hm=bd98af2f6a21dc33a074adac7bedbdee5a7830c5166fc6bb091027db866284cd&=&format=webp&quality=lossless&width=140&height=52'
lanturnShiny.frames = lanturn.frames;
let corsola = new Image()
corsola.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241764651335811113/corsolasprite.png?ex=664b62f3&is=664a1173&hm=d60ac7865c2bb29a0985786062cb198a9212ba1a50ef43e547a99e81603411cb&=&format=webp&quality=lossless&width=105&height=35'
corsola.frames = 4
let wailord = new Image()
wailord.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241771562798026773/wailordsprite.png?ex=664b6963&is=664a17e3&hm=c2ac2d655aa609e02cd39d1e36ff083455ef67a60ebe12dc9f9ed8b817ea9568&=&format=webp&quality=lossless&width=950&height=114'
wailord.frames = 12




let MIS = new Image()
MIS.src = 'https://cdn.discordapp.com/attachments/1200323297745834066/1200753060314632232/misdreavus-export.png?ex=6649d7ee&is=6648866e&hm=9adca5a7d90a21cf19236e24f9df2123e1ab581dd6d671d8827849e1717c3986&'
let art1 = new Image()
art1.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241478402616197291/lurantis.png?ex=664a585c&is=664906dc&hm=a60fb407afdabe8d1b1302b99f7956e06abfa99a1aecae61292bd8b541d8bcec&=&format=webp&quality=lossless&width=300&height=190'
let art2 = new Image()
art2.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241478402805071994/nosepass.png?ex=664a585c&is=664906dc&hm=686bc55d12be4c2883b6acc587da61e4f81b2de9cd79012ef77025b5b27380f5&=&format=webp&quality=lossless&width=452&height=174'
let art3 = new Image()
art3.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241478403001946232/suicune.png?ex=664a585c&is=664906dc&hm=a8defa3fb501f073c9fa2382e1d9f18a8bc6a361fb1811431a3aaf2b5aac3312&=&format=webp&quality=lossless&width=195&height=149'
let art4 = new Image()
art4.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241478403266314362/bleh.png?ex=664a585c&is=664906dc&hm=995407c28ec1032dffa02f9b8a36072f5a0f139e5f09eb57031c4bf86a6eca62&=&format=webp&quality=lossless&width=389&height=468'
let art5 = new Image()
art5.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241478403526492191/wynaut4_cropped.png?ex=664a585c&is=664906dc&hm=f0f437099dc2afc72f3be6f68fb1d5215ec9c41c1ef064f47b3a5c3360a76926&=&format=webp&quality=lossless&width=206&height=206'
let art6 = new Image()
art6.src = 'https://media.discordapp.net/attachments/1152315845784117339/1241478403744469043/sprigatto.png?ex=664a585d&is=664906dd&hm=74048000847315fa283c6be25da712c5124c5e09f576f8475499bb08f4b79c2d&=&format=webp&quality=lossless&width=181&height=147'
