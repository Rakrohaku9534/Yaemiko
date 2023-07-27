//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285786539008', 'Fahrul', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285786539008' //Ganti
global.packname = '© Sticker by'
global.author = 'Fahrul.me'
global.namebot = 'Yaemiko - MD'
global.wm = '© Yaemiko MD By fahrul'
global.stickpack = '© Sticker by'
global.stickauth = 'Fahrul.me'
// Link Sosmed
global.sig = 'https://instagram.com/fahrul_mt'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/KCKmFhPhSzV1zmTys8mmrT'
// Donasi
global.psaweria = '-'
global.ptrakterr = '-'
global.povo = '0857-8653-9008'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'kZHaABfTe6'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "kZHaABfTe6",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})