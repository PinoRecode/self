exports.wait = () => {
	return`*「TUNGGU SAYANG」*\n*「 SEDANG PROSES 」*`
}

exports.succes = () => {
	return`*「 BERHASIL 」*`
}

exports.lvlon = () => {
	return`*「 LEVELING GRUP DI AKTIFKAN 」*`
}

exports.lvloff = () => {
	return`*「 LEVELING GRUP DI NON AKTIFKAN」*`
}

exports.lvlnul = () => {
	return`*LEVEL ANDA MASIH KOSONG*`
}

exports.baned = () => {
	return`* LU UDAH DI BLOCK`
}

exports.lvlnoon = () => {
	return`*LEVEL GRUP DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「DAFTAR DULU」*\n\n*${prefix}daftar nama|umur*\n\n*contoh = ${prefix}daftar ${pushname}|18*`
}

exports.rediregis = () => {
	return`*「 NOMOR KAMU SUDAH TERDAFTAR 」*\n\n*TIDAK PERLU DAFTAR LAGI*`
}

exports.stikga = () => {
	return`*Emrror*`
}

exports.linkga = () => {
	return`*LINK MACAM APA INI*`
}

exports.groupo = () => {
	return`*「ANDA HARUS BERADA DI GRUP」*`
}

exports.ownerb = () => {
	return`*「KHUSUS OWNER 」*`
}

exports.ownerg = () => {
	return`*「KHUSUS OWNER」*`
}

exports.admin = () => {
	return`*「KHUSUS ADMIN」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSW OFF *`
}

exports.bug = () => {
	return`*māşālāђ ţęlāђ dį lāpoŗķāŋ ķę owŋęŗ boţ lāpoŗāŋ pālşų /māįŋ2  ţįdāķ āķāŋ dį ţāŋggāpį *`
}

exports.wrongf = () => {
	return`*YANG BENER DONG SAYANG*`
}

exports.clears = () => {
	return`*「 Berhasil 」*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NAHOYA BOT」*\n\*Data Pendaftaran Anda* \n\n➤*Nama* = ${namaUser}\n➤ *Nomer* = wa.me/${sender.split("@")[0]}\n➤ *Umur* = ${umurUser}\n\n➤ *Waktu pendaftaran*\n   *${time}*\n\n\n*Kode Anda* = _${serialUser}_`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 NAIK LEVEL」*
❒ ➳ *Nama* : ${pushname}
❒ ➳ *Nomer* : wa.me/${sender.split("@")[0]}
❒ ➳ *Xp* : ${getLevelingXp(sender)}
❒ ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.diamondend = (pushname) => {
	return`*Maaf ${pushname} Diamond Anda Sudah habis*\n*Silahkan beli lagi dengan cara ${prefix}buydm*`
}

exports.diamondttl = (dmuser) => {
	return`
*「 DIAMOND USER 」*

*Sisa Diamond Anda*\n💎 = _${dmuser}_\n`

}

exports.infousr = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, diamondCounts, uangkau) => {
	return`
*「 Info user」*
❒ ➳ *Nama* : ${pushname}
❒ ➳ *Nomer* : wa.me/${sender.split("@")[0]}
❒ ➳ *Xp* : ${getLevelingXp(sender)}
❒ ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
❒ ➳ *Uang* : Rp.${uangkau(sender)}
❒ ➳ *Dm* : ${diamondCounts(sender)}
`}

exports.satukos = () => {
	return`Hidup / Mati`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*「 ATM 」* \n┣❒ ➳ *Nama* : ${pushname}\n┣❒ ➳ *Nomer* : ${sender.split("@")[0]}\n┣❒ ➳ *Uang* : Rp.${uangkau}\n┗━━━━━━━━━━`
}