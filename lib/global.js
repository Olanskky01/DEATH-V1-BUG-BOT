require("./module")
require("./color")
require("../config")
require("./spinner")
require("./upload")
require("./exif")
require("./button")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})