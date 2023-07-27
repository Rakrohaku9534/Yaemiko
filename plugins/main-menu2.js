let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/212883841b1c73bafc92c.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah Yaemiko MD, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n*.allmenu* [Menampilkan Semua Perintah]\n\n_2023 © YaemikoMD_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
