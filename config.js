// BY GABIMARU 
require("./lib/module")

// SETTINGS
global.owner = "2349026256561"
global.ownername = "*Ølâñßkky🥀🫀*"
global.nomorbot = "2349026256561"
global.namaCreator = "*ᴅᴇᴀᴛʜ-ᴠ1 ʙᴜɢ ʙᴏᴛ ʙʏ Ølâñßkky🥀🫀"
global.Dec = "Ølâñßkky🥀🫀"
global.autoJoin = false
global.antilink = false

// THUMBNAIL 
global.imageurl = 'https://imgur.com/6tMwDx2'
global.channel = 'https://whatsapp.com/channel/0029VaioNMmADTOAj0T6Yw2s'

// STICKER
global.packname = "ᴅᴇᴀᴛʜɢʀɪᴍ"
global.author = "Olanskkyᴛᴇᴄʜ"
global.jumlah = "5"



// 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘
global.onlyprem = `*THIS IS ONLY AVAILABLE FOR THOSE WHO ARE OWNERS ALREADY*`
global.onlyown = `*THIS IS ONLY AVAILABLE FOR THOSE WHO ARE OWNERS ALREADY*`
global.onlygroup = `*THIS IS ONLY AVAILABLE FOR THOSE WHO ARE OWNERS ALREADY*`
global.onlyadmin = `*RESERVED FOR ADMINS ONLY*`
global.notext = `*𝘔𝘢𝘯𝘢 𝘵𝘦𝘬𝘴𝘯𝘺𝘢*`
global.noadmin = `*MAKE ME AN ADMIN AND I WONT KILL YOU *`
global.succes = `*𝗗𝗢𝗡𝗘*`
global.invalid = `*𝗦𝗢𝗥𝗥𝗬 𝗜𝗡𝗩𝗔𝗟𝗜𝗗 𝗡𝗨𝗠𝗕𝗘𝗥*`
global.bugrespon = `*HEY 👋 THIS IS ᴅᴇᴀᴛʜ-ᴠ1 ʙᴜɢ ʙᴏᴛ AND THE VICTIM HAS BEEN ELIMINATED 💀✅*`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})