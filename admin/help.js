const fs = require('fs') 
const listmenu = JSON.parse(fs.readFileSync('./admin/listmenu.json')); 

const menu = (x, y, z) => {     
var menu1 = []
var menu2 = ""
Object.keys(x).forEach((i) => { menu1.push(x[i]) }) 
Object.keys(menu1).forEach((i) => { 
menu2 += `┃• *${z + menu1[i]}*\n` }) 
var menu3 = `╭━─━•[ *${y}* ]⊱\n${menu2}╰━─━─━─━─━─━─━─•`
return menu3
}
const help = (prefix, reply, cekUser, namabot, sender) => {
var help1 = `╭━─━•[ *${namabot}* ]⊱
┃• *User* : @${sender.split("@")[0]}
┃• *Hit* : ${cekUser("hit", sender)}
┃• *Emote* : ${cekUser("emote", sender)}
┃• *Star* : ${cekUser("star", sender)}⭐
┃• *Ban* : ${cekUser("ban", sender)}
┃• *Premium* : ${cekUser("premium", sender)}
╰━─━─━─━─━─━─━─•
${menu(listmenu.simple, "𝙨𝙞𝙢𝙥𝙡𝙚", prefix)}
${menu(listmenu.group, "𝙜𝙧𝙤𝙪𝙥", prefix)}
${menu(listmenu.owner, "𝙤𝙬𝙣𝙚𝙧", prefix)}
${menu(listmenu.textpro1, "𝙩𝙚𝙭𝙩𝙥𝙧𝙤(𝟭)", prefix)}
${menu(listmenu.textpro2, "𝙩𝙚𝙭𝙩𝙥𝙧𝙤(𝟮)", prefix)}
${menu(listmenu.gombal, "𝙜𝙤𝙢𝙗𝙖𝙡𝙖𝙣", prefix)}
${menu(listmenu.stress, "𝙨𝙩𝙧𝙚𝙨𝙨!", prefix)}
${menu(listmenu.memegen, "𝙢𝙚𝙢𝙚𝙜𝙚𝙣", prefix)}
${menu(listmenu.download, "𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙", prefix)}
${menu(listmenu.storage, "𝙨𝙩𝙤𝙧𝙖𝙜𝙚(𝙙𝙗)", prefix)}
${menu(listmenu.search, "𝙨𝙚𝙖𝙧𝙘𝙝", prefix)}
${menu(listmenu.creatif, "𝙘𝙧𝙚𝙖𝙩𝙞𝙛", prefix)}
${menu(listmenu.creatifme, "𝙘𝙧𝙚𝙖𝙩𝙞𝙛(𝙢𝙚)", prefix)}
${menu(listmenu.creatiftag, "𝙘𝙧𝙚𝙖𝙩𝙞𝙛(𝙩𝙖𝙜)", prefix)}
${menu(listmenu.ttp, "𝙩𝙩𝙥(𝙘𝙤𝙡𝙤𝙧𝙨)", prefix)}
${menu(listmenu.ranime, "(𝙧)𝙖𝙣𝙞𝙢𝙚", prefix)}
${menu(listmenu.emostick, "𝙚𝙢𝙤𝙨𝙩𝙞𝙘𝙠", prefix)}
${menu(listmenu.tagrandom, "𝙩𝙖𝙜𝙧𝙖𝙣𝙙𝙤𝙢", prefix)}
${menu(listmenu.listaudio, "𝙡𝙞𝙨𝙩𝙖𝙪𝙙𝙞𝙤", prefix)}
${menu(listmenu.userbot, "𝙪𝙨𝙚𝙧𝙗𝙤𝙩", prefix)}
${menu(listmenu.games, "𝙜𝙖𝙢𝙚𝙨", prefix)}
${menu(listmenu.animes, "𝙖𝙣𝙞𝙢𝙚", prefix)}
${menu(listmenu.cecan, "𝙘𝙚𝙘𝙖𝙣", prefix)}
${menu(listmenu.news, "𝙣𝙚𝙬𝙨", prefix)}`
// JANGAN UBAH/HAPUS THX TO🤥
var cr = `╭━─━•[ *THX-TO* ]⊱
┃•  *ADHIRAJ SINGH*
┃•  *RIMURUBOTZ*
┃•  *LOLI KILLERS*
┃•  *LORD R1YNZ*
╰━─━─━─━─━─━─━─•`
return help1
}

module.exports = { help }