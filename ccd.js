var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    console.log("ArviS - Discord Özel RPC => RPC'niz Hazır, iyi Günlerde Kullanın."),
client.request('SET_ACTIVITY', { 
pid: process.pid, 
activity : {
details : "❤️・Stranger Things Türkiye",  // Başlığın altında gözüken ince fontlu yazı kısmı.
assets : {
large_image : "arvis",  // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.
small_image : "alkan", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.
large_text : "ArviS", // Botu oluştururken girdiğiniz ismi yazın.
},
buttons : [{label : "Stranger Things (Discord)" , url : "https://discord.gg/yYbFZPhJmg"},{label : "Stranger Things (İnstagram)" , url : "https://instagram.com/strangerturkiyedc"}]
}
})
})
client.login({ clientId : "966313719023943741" }).catch(console.error); //clientID bölümüne kendi Bot (Application) ID'ni yazacaksınız.
