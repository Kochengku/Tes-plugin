async function handler(m, { conn, usedPrefix, command, isBotAdmin, isAdmin}) {
switch (command) {

case 'antilink': {
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("gerigi"), key: m.key, }})
conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), fileName: global.kosong, caption: await antitoxicTxt(m), mimetype: 'application', headerType: 9, contextInfo:{mentionedJid: [m.sender], externalAdReply:{title: `￴￴￴￴￴￴     ${customFont('S')}${customFont2('curity')} ${customFont2('group')}     `, body: null, thumbnailUrl: global.imgwarn, renderLargerThumbnail: true, mediaType:1}}}, m)
return antilinkConfirmation[m.sender] = {
sender: m.sender
}}
break
case 'antitoxic': {
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("gerigi"), key: m.key, }})
conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), fileName: global.kosong, caption: await antilinkTxt(m), mimetype: 'application', headerType: 9, contextInfo:{mentionedJid: [m.sender], externalAdReply:{title: `￴￴￴￴￴￴     ${customFont('S')}${customFont2('curity')} ${customFont2('group')}     `, body: null, thumbnailUrl: global.imgwarn, renderLargerThumbnail: true, mediaType:1}}}, m)
return antiToxicConfirmation[m.sender] = {
sender: m.sender
}}
break
case 'adminonly': {
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("gerigi"), key: m.key, }})
conn.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), fileName: global.kosong, caption: await adonlyTxt(m), mimetype: 'application', headerType: 9, contextInfo:{mentionedJid: [m.sender], externalAdReply:{title: `￴￴￴￴￴￴     ${customFont('S')}${customFont2('curity')} ${customFont2('group')}     `, body: null, thumbnailUrl: global.imgwarn, renderLargerThumbnail: true, mediaType:1}}}, m)
return adminOnlyConfirmation[m.sender] = {
sender: m.sender
}}
break
}
}
handler.before = async(m, { usedPrefix }) => {
let chat = getChatData(m.chat)
if (m.isBaileys) return

if ((m.sender in antilinkConfirmation)) {
if (/(1)/g.test(m.text.toLowerCase())) {
if (chat.antiLinkRendah == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (rendah) sudah aktif sebelumnya!`)
if (chat.antiLinkSedang == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (sedang) sudah aktif sebelumnya!`)
if (chat.antiLinkTinggi == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (tinggi) sudah aktif sebelumnya!`)
if (chat.antiLinkRendah == false) {
chat.antiLinkRendah = true
m.reply(`> ${emoji.emoticon("lampu")} Berhasil mengaktifkan antilink (rendah)`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antilinkConfirmation[m.sender]
}}
if (/(2)/g.test(m.text.toLowerCase())) {
if (chat.antiLinkRendah == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (rendah) sudah aktif sebelumnya!`)
if (chat.antiLinkSedang == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (sedang) sudah aktif sebelumnya!`)
if (chat.antiLinkTinggi == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (tinggi) sudah aktif sebelumnya!`)
if (chat.antiLinkSedang == false) {
chat.antiLinkSedang = true
m.reply(`> ${emoji.emoticon("lampu")} Berhasil mengaktifkan antilink (sedang)`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antilinkConfirmation[m.sender]
}}
if (/(3)/g.test(m.text.toLowerCase())) {
if (chat.antiLinkRendah == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (rendah) sudah aktif sebelumnya!`)
if (chat.antiLinkSedang == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (sedang) sudah aktif sebelumnya!`)
if (chat.antiLinkTinggi == true) return m.reply(`> ${emoji.emoticon("lampu")} Antilink (tinggi) sudah aktif sebelumnya!`)
if (chat.antiLinkTinggi == false) {
chat.antiLinkTinggi = true
m.reply(`> ${emoji.emoticon("lampu")} Berhasil mengaktifkan antilink (tinggi)`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antilinkConfirmation[m.sender]
}}
if (/(4)/g.test(m.text.toLowerCase())) {
if (chat.antiLinkRendah == false) return m.reply(`> ${emoji.emoticon("silang")} Antilink (rendah) sudah mati sebelumnya di group ini`)
if (chat.antiLinkRendah == true) {
chat.antiLinkRendah = false
m.reply(`> ${emoji.emoticon("silang")} Berhasil mematikan antilink (rendah)`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antilinkConfirmation[m.sender]
}}
if (/(5)/g.test(m.text.toLowerCase())) {
if (chat.antiLinkSedang == false) return m.reply(`> ${emoji.emoticon("silang")} Antilink (sedang) sudah mati sebelumnya`)
if (chat.antiLinkSedang == true) {
chat.antiLinkSedang = false
m.reply(`> ${emoji.emoticon("silang")} Berhasil mematikan antilink (sedang)`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antilinkConfirmation[m.sender]
}}
if (/(6)/g.test(m.text.toLowerCase())) {
if (chat.antiLinkTinggi == false) return m.reply(`> ${emoji.emoticon("silang")} Antilink (tinggi) sudah mati sebelumnya`)
if (chat.antiLinkTinggi == true) {
chat.antiLinkTinggi = false
m.reply(`> ${emoji.emoticon("silang")} Berhasil mematikan antilink (tinggi)`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antilinkConfirmation[m.sender]
}}}

if ((m.sender in antiToxicConfirmation)) {
if (/(1)/g.test(m.text.toLowerCase())) {
if (chat.antiToxic == true) return m.reply(`> ${emoji.emoticon("lampu")} Antitoxic (normal) sudah aktif sebelumnya!`)
if (chat.antiToxic == false) {
chat.antiToxic = true
m.reply(`> ${emoji.emoticon("lampu")} Berhasil menyalakan antitoxic`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antiToxicConfirmation[m.sender]
}}
if (/(2)/g.test(m.text.toLowerCase())) {
if (chat.antiToxic == false) return m.reply(`> ${emoji.emoticon("silang")} Antitoxic (normal) sudah mati sebelumnya`)
if (chat.antiToxic == true) {
chat.antiToxic = false
m.reply(`> ${emoji.emoticon("silang")} Berhasil mematikan antitoxic`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete antiToxicConfirmation[m.sender]
}}}

if ((m.sender in adminOnlyConfirmation)) {
if (/(1)/g.test(m.text.toLowerCase())) {
if (chat.adonly == true) return m.reply(`> ${emoji.emoticon("lampu")} Adminonly (normal) sudah aktif sebelumnya!`)
if (chat.adonly == false) {
chat.adonly = true
m.reply(`> ${emoji.emoticon("lampu")} Berhasil menyalakan adminonly`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete adminOnlyConfirmation[m.sender]
}}
if (/(2)/g.test(m.text.toLowerCase())) {
if (chat.adonly == false) return m.reply(`> ${emoji.emoticon("silang")} Adminonly (normal) sudah mati sebelumnya`)
if (chat.adonly == true) {
chat.adonly = false
m.reply(`> ${emoji.emoticon("silang")} Berhasil mematikan adminonly`)
conn.sendMessage(m.chat, { react: { text: emoji.emoticon("pin"), key: m.key, }})
delete adminOnlyConfirmation[m.sender]
}}}
}

handler.command = handler.help = [
'antilink',
'antitoxic',
'adminonly'
]
handler.tags = ['groupseting']
handler.group = true
handler.admin = true
handler.botAdmin
export default handler

// MODULE REQUIRED
let antilinkConfirmation = {}
let antiToxicConfirmation = {}
let adminOnlyConfirmation = {}
import { customFont, customFont2 } from '../../lib/system/main/function.js'
import { getChatData } from '../../lib/system/required/component/functionsystem.js'
import { antitoxicTxt, antilinkTxt, adonlyTxt } from '../../lib/system/main/dashboard.js'
import fs from 'fs'