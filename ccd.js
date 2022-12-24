var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    console.log("ArviS#0011 - Discord Özel RPC => RPC'niz Hazır, iyi Günlerde Kullanın"),

client.request('SET_ACTIVITY', { 
pid: process.pid, 
activity : {
timestamps: { start: Date.now() },
details : "❤️・Software",  // Başlığın altında gözüken ince fontlu yazı kısmı.
assets : {

large_image : "arvislogo",  // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.
small_image : "bluetik", // Rich Presence kısmına koyduğunuz fotoğrafın adını yazın.

large_text : "Made by ❤️ ArviS#0011", //Büyük Resim Text
small_text: "Discorder", //Küçük Resim Text
},

buttons : [{label : "Mi' Amor", url: "https://github.com/ArviSlayer"}]

}
})
})

client.login({ clientId : "1030947981492502598" }).catch(console.error); //clientID bölümüne kendi Bot (Application) ID'ni yazacaksınız.