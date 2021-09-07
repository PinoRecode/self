//Lanjitin Sendiri Bg Jngn Lupa Kasih credit 
// Gw ya tod

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const request = require('request')
const fs = require("fs") 
const { convertSticker } = require('./data/stcwm/swm.js')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./data/lib/color')
const { bahasa } = require('./data/lib/bahasa')
const { negara } = require('./data/lib/kodenegara')
const { donasi } = require('./data/lib/donasi')
const { antiSpam } = require('./data/lib/antispam')
const { Rsi } = require('./data/lib/Rsi')
const { snk } = require('./data/lib/snk')
const { fetchJson } = require('./data/lib/fetcher')
const { recognize } = require('./data/lib/ocr')
const fontPath = ('./data/lib/Zahraaa.ttf')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./data/lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const Exif = require('./data/lib/exif');
const exif = new Exif();
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./data/lib/srbot')
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const ganti = JSON.parse(fs.readFileSync('./data/lib/sugeng/ubah.json'))

//kontak
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:NAHOYA\n' //ganti nama lu! 
              + 'ORG: DEVELOPER BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285869484139:+62 85869484139\n'  //ganti nomor lu! 
              + 'END:VCARD'


const vcard2 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:PINO MODZ\n' //ganti nama lu! 
              + 'ORG: DEVELOPER BOT;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=994404819287:+994 404819287\n'  //ganti nomor lu! 
              + 'END:VCARD'
             
             
///======《Jangan Di Ubah》======\\\           
offline = false
publik = false            
blocked = []   
memberdiamond = 0
dmawal = '100'
fake1 = 'PINO-DEV'
fake2 = 'PINO-DEV'
///========《》=======\\

//=========+=========\\

prefix = ganti.prefix
boTNumber = ganti.boTNumber
cr = ganti.cr
fake = ganti.fake
NamaOwner = ganti.NamaOwner
NamaBot = ganti.NamaBot
namabot = ganti.namabot
namaowner = ganti.namaowner
lolhum = ganti.lolhum
xteam = ganti.xteam
tobz = ganti.tobz
LeysKey = ganti.LeysKey

//=========+=========\\

///==《Harga Dm》==\\\
hdm1 = '12000' //// = 15
hdm2 = '75000' //// = 45
hdm3= '170000'  //// = 150
hdm4 = '190000' ///// = 180
hdm5 = '280000' //// = 250
///÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷÷\\\

fake = '*「 NAHOYA-BOT 」*' //Anti Delete
numbernye = '0' // biarin

////======《》======\\\\


srart_24 = `*NIH KAK*

_Jangan lupa follow akun owner_
https://github.com/PinoRecode`


//==============================\\


//owner number
const ownerNumber = ["994404819287@s.whatsapp.net","6285643260438@s.whatsapp.net"]   
//file json
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const follow = JSON.parse(fs.readFileSync('./srart_24/sugengriyadi/asu.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const diamond = JSON.parse(fs.readFileSync('./database/user/diamond.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const audionye = JSON.parse(fs.readFileSync('./data/nyolongvn/audio.json'))
const Ss = JSON.parse(fs.readFileSync('./database/user/Vip.json'))
const afk = JSON.parse(fs.readFileSync('./data/src/afk.json'))
const antibucin = JSON.parse(fs.readFileSync('./database/group/antibucin.json'))
const Ass = JSON.parse(fs.readFileSync('./database/group/antivideo.json'))
const bcn = JSON.parse(fs.readFileSync('./database/group/katabucin.json'))
const babi = JSON.parse(fs.readFileSync('./data/berburu/hewan/babi.json'))
const kangguru = JSON.parse(fs.readFileSync('./data/berburu/hewan/kangguru.json'))
const harimau = JSON.parse(fs.readFileSync('./data/berburu/hewan/harimau.json'))
const zebra = JSON.parse(fs.readFileSync('./data/berburu/hewan/zebra.json'))
const rusa = JSON.parse(fs.readFileSync('./data/berburu/hewan/rusa.json'))
//tambahan
const brb01 = ["1","0","3","0","0","0","0","0","2","0","1","0","0","0","0","1","0","0","0","0"]
const ikanA = ['ikan1','ikan2','ikan3','ikan4','ikan5','ikan6']
const srb0 = ["5","2","6","8","5","3","6","0","0","0"]
const srbo= ["10","24","18","20","11","17"]
const sotoy = [
		'🚓 : 🚌 : ✈',
		'🚌 : 🚁 : 🚓',
		'🚑 : 🚑 : 🚑',
		'🚓 : 🚗 : 🚁',
		'🚁 : 🚌 : ✈',
		'🚁 : 🚌 : 🚓',
        '🚓 : 🚗 : 🚁',		
		'✈ : 🚌 : 🚗',
		'✈ : ✈ : ✈',
		'🚓 : 🚌 : 🚌',
		'🚁 : 🚁 : 🚑',
		'🚜 : 🚌 : 🚁',
		'✈ : 🚁 : 🚁',
		'🚓 : 🚗 : 🚌',
		'🚗 : 🚗 : 🚜',
		'🚁 : 🚁 : 🚑',
		'🚁 : ✈ : 🚑',
		'🚁 : 🚁 : 🚁',
		'🚌 : 🚌 : 🚌',
	    '🚁 : 🚁 : 🚑',
		'🚜 : 🚜 : 🚜',
		]
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
///////rndmnya
const buruh21 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
ikanB = ikanA[Math.floor(Math.random() * (ikanA.length))]
const rbrb = brb01[Math.floor(Math.random() * brb01.length)]
const srb1 = srb0[Math.floor(Math.random() * srb0.length)]
const srbp = srbo[Math.floor(Math.random() * srbo.length)]
/////  Hasilnya
const ss1 = `${rbrb}`
const ss2 = `${rbrb}`
const ss3 = `${rbrb}`
const ss4 = `${rbrb}`
const ss5 = `${rbrb}`
const ikanC = fs.readFileSync(`data/ikan/${ikanB}.webp`)					
///////////////////
const costum = (pesan, tipe, target, target2) => {
srart.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
}
////////////////////
const tescuk = ['0@s.whatsapp.net']


const introoo = `
Nama	: Pino Bagas S
Umur	: 16
Kelamin	: Laki - Laki
YouTube : PINO MODZ
`
/*===================HARI=================*/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
switch(jams){
case 0: jams = "0"; break;
case 1: jams = "1"; break;
case 2: jams = "2"; break;
case 3: jams = "3"; break;
case 4: jams = "4"; break;
case 5: jams = "5"; break;
case 6: jams = "6"; break;
case 7: jams = "7"; break;
case 8: jams = "8"; break;
case 9: jams = "9"; break;
case 10: jams = "10"; break;
case 11: jams = "11"; break;
case 12: jams = "12"; break;
case 13: jams = "13"; break;
case 14: jams = "14"; break;
case 15: jams = "15"; break;
case 16: jams = "16"; break;
case 17: jams = "17"; break;
case 18: jams = "18"; break;
case 19: jams = "19"; break;
case 20: jams = "19"; break;
case 21: jams = "20"; break;
case 22: jams = "21"; break;
case 23: jams = "22"; break;
 }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM : " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;


      


// Akhir Hitungan Mundur
var countDownDate = new Date("2022-08-18").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
var ulth = `Menuju Ultah Ownner :\n\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik `
                

////*========<<<<《BATAS TOD》>>>>>>=========*////


 ////// 《Perbatasan melanggar ban》\\|\\

const diaMondSr = (sender) => {
            let position = false
            Object.keys(diamond).forEach((i) => {
                if (diamond[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return diamond[position].dm
            }
        }
        
        
//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
         
    

            if (position !== false) {
                return _level[position].id
            }
        }


        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getdiamond = (sender) => {
        	let position = false
              Object.keys(diamond).forEach ((i) => {
              	if (diamond[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return diamond[position].diamond
            }
        }
             
          const cekdmr = (sender) => {
        	let position = false
            Object.keys(diamond).forEach((i) => {
                if (diamond[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return diamond[position].diamond
            }
        }
     
          
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayardiamond = (sender, amount) => {
        	let position = false
            Object.keys(diamond).forEach((i) => {
                if (diamond[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                diamond[position].diamond -= amount
                fs.writeFileSync('./database/user/diamond.json', JSON.stringify(diamond))
            }
        }
        	
const bayarcoin = (sender, amount) => {
             let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].diamond += +amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const diamondAdd = (sender) => {
             let position = false
            Object.keys(diamond).forEach((i) => {
                if (diamond[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                diamond[position].diamond += 1
                fs.writeFileSync('./database/user/diamond.json', JSON.stringify(diamond))
            }
        }
        
             
const dmkrg = (sender) => {
             let position = false
            Object.keys(diamond).forEach((i) => {
                if (diamond[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                diamond[position].diamond -= 3
                fs.writeFileSync('./database/user/diamond.json', JSON.stringify(diamond))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
		
		
		//《《 funtion Berburu By Sugeng Riyadi》》

const dptbabi = (sender,amount) => {
             let position = false
            Object.keys(babi).forEach((i) => {
                if (babi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                babi[position].babi -= amount
                fs.writeFileSync('./data/berburu/hewan/babi.json', JSON.stringify(babi))
            }
        }
        
        const dptkangguru = (sender,amount) => {
             let position = false
            Object.keys(kangguru).forEach((i) => {
                if (kangguru[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                kangguru[position].kangguru -= amount
                fs.writeFileSync('./data/berburu/hewan/kangguru.json', JSON.stringify(kangguru))
            }
        }
      
     const dptharimau = (sender,amount) => {
             let position = false
            Object.keys(harimau).forEach((i) => {
                if (harimau[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                harimau[position].harimau -= amount
                fs.writeFileSync('./data/berburu/hewan/harimau.json', JSON.stringify(harimau))
            }
        }
     
         const dptzebra = (sender,amount) => {
             let position = false
            Object.keys(zebra).forEach((i) => {
                if (zebra[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                zebra[position].zebra -= amount
                fs.writeFileSync('./data/berburu/hewan/zebra.json', JSON.stringify(zebra))
            }
        }
     
         const dptrusa = (sender,amount) => {
             let position = false
            Object.keys(rusa).forEach((i) => {
                if (rusa[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                rusa[position].rusa -= amount
                fs.writeFileSync('./data/berburu/hewan/rusa.json', JSON.stringify(rusa))
            }
        }
     
     ////////Mboh lah mumet<t
     
     const cekbabi = (sender) => {
        	let position = false
            Object.keys(babi).forEach((i) => {
                if (babi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return babi[position].babi
            }
        }
     
     const cekkangguru = (sender) => {
        	let position = false
            Object.keys(kangguru).forEach((i) => {
                if (kangguru[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return kangguru[position].kangguru
            }
        }
     
	     const cekharimau = (sender) => {
        	let position = false
            Object.keys(harimau).forEach((i) => {
                if (harimau[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return harimau[position].harimau
            }
        }
     
     const cekzebra = (sender) => {
        	let position = false
            Object.keys(zebra).forEach((i) => {
                if (zebra[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return zebra[position].zebra
            }
        }
     
     const cekrusa = (sender) => {
        	let position = false
            Object.keys(rusa).forEach((i) => {
                if (rusa[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return rusa[position].rusa
            }
        }
     
    	///$$$$$$$$
    const addbabi = (sender) => {
        	const obj = {id: sender, babi : 0}
            babi.push(obj)
            fs.writeFileSync('./data/berburu/hewan/babi.json', JSON.stringify(babi))
        }
    const addkangguru = (sender) => {
        	const obj = {id: sender, kangguru : 0}
            kangguru.push(obj)
            fs.writeFileSync('./data/berburu/hewan/kangguru.json', JSON.stringify(kangguru))
        }
    const addharimau = (sender) => {
        	const obj = {id: sender, harimau : 0}
            harimau.push(obj)
            fs.writeFileSync('./data/berburu/hewan/harimau.json', JSON.stringify(harimau))
        }
    const addrusa = (sender) => {
        	const obj = {id: sender, rusa : 0}
            rusa.push(obj)
            fs.writeFileSync('./data/berburu/hewan/rusa.json', JSON.stringify(rusa))
        }
    const addzebra = (sender) => {
        	const obj = {id: sender, zebra : 0}
            zebra.push(obj)
            fs.writeFileSync('./data/berburu/hewan/zebra.json', JSON.stringify(zebra))
        }

//function
const srart = new WAConnection()
srart.version = [2, 2119, 6]
srart.logger.level = 'warn'
console.log(banner.string)
   srart.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('PINO-DEV','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('NAHOYA-BOT','yellow'))
})
//
	srart.on('credentials-updated', () => {
		fs.writeFileSync('./QRnyaNahoya.json', JSON.stringify(srart.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./QRnyaNahoya.json') && srart.loadAuthInfo('./QRnyaNahoya.json')
	srart.on('connecting', () => {
		start('2', color('[ ! ]Loadding','aqua'))
	})
	srart.on('open', () => {
		success('2', color('[ ! ]Tersambung','blue'))
	})
	srart.connect({timeoutMs: 30*1000})
    console.log(introoo);
          srart.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await srart.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				
try {
					ppimg = await srart.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				
			teks = `
Welcome  di Group *${mdata.subject}*\n\n_INTRO DULU KAK_  @${num.split('@')[0]}\n
┏━━━━━━━━━━━━━━━
┃*「ɪɴᴛʀᴏ」*
┃━━━━━━━━━━━━━━━
┠⊷️ *ɴᴀᴍᴀ* :
┠⊷️ *ᴜᴍᴜʀ* :
┠⊷️ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :
┗━━━━━━━━━━━━━━━
 @${num.split('@')[0]} 🗣
`
 
				let buff = await getBuffer(ppimg)
				srart.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await srart.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `
*Bye = @${num.split('@')[0]}*\n━━⊱ ❰ *Jasamu Akan Kami Kenang* ❱ ⊰━━`
srart.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}

	})
	srart.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        srart.sendMessage(callerId, "*Maaf Anda  Telah Menelpon Bot*\n *Anda Akan Di Block Secara Otomatis*", MessageType.text)
        await sleep(5000)
        await srart.blockUser(callerId, "add") // Block user
})
	srart.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	srart.on('message-update', async (sr) => {
	  try {
        const from = sr.key.remoteJid
        const messageStubType = WA_MESSAGE_STUB_TYPES[sr.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./data/antidelete/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./data/antidelete/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./data/antidelete/ct-revoked-banlist.json'))
        const sender = sr.key.fromMe ? srart.user.jid : sr.key.remoteJid.endsWith('@g.us') ? sr.participant : sr.key.remoteJid
        const isRevoke = sr.key.remoteJid.endsWith('@s.whatsapp.net') ? true : sr.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = sr.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = sr.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
            console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = sr.key.remoteJid
            const isGroup = sr.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./data/antidelete/.dat/data.chat.json'))
            const id_deleted = sr.key.id
            const conts = sr.key.fromMe ? srart.user.jid : srart.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = sr.key.fromMe ? srart.user.name : conts.notify || conts.vname || conts.name || '-'
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            var itsme = `${numbernye}@s.whatsapp.net`
            var split = `${fake}`
                // var taged = sr.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var selepbot72 = {
                contextInfo: {
                    participant: itsme,
                    quotedMessage: {
                        extendedTextMessage: {
                            text: split,
                        }
                    }
                }
            }
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `		 「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Text
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
➣ *Pesan :* ${body ? body : '-'}`
                srart.sendMessage(from, strConversation, MessageType.text, selepbot72)
            } else if (int.type == 'stickerMessage') {
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                const pingbro23 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await srart.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
                const strConversation = `		 「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Sticker
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

                const buff = fs.readFileSync(savedFilename)
                srart.sendMessage(from, strConversation, MessageType.text, opt4tag)
                srart.sendMessage(from, buff, MessageType.sticker, pingbro23)
                    // console.log(stdout)
                fs.unlinkSync(savedFilename)

            } else if (int.type == 'imageMessage') {
                var itsme = `${numbernye}@s.whatsapp.net`
                var split = `${fake}`
                const pingbro22 = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                            extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await srart.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
                const buff = fs.readFileSync(savedFilename)
                const strConversation = `	 「 *ANTI-DELETE* 」

➣ *Nama :* ${pushname}
➣ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
➣ *Tipe :* Image
➣ *Waktu :* ${moment.unix(int.timestamp).format('HH:mm:ss')}
➣ *Tanggal :* ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
➣ *Pesan :* ${body ? body : '-'}\`\`\``
                srart.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
                fs.unlinkSync(savedFilename)
            }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
            // console.log(e)
    }
})
	
			srart.on('message-new', async (sr) => {
		try {
		if (!sr.message) return
        if (sr.key && sr.key.remoteJid == 'status@broadcast') return
        let infoMSG = JSON.parse(fs.readFileSync('./data/antidelete/.dat/data.chat.json'))
        infoMSG.push(JSON.parse(JSON.stringify(sr)))
        fs.writeFileSync('./data/antidelete/.dat/data.chat.json', JSON.stringify(infoMSG, null, 2))
        const urutan_pesan = infoMSG.length
        if (urutan_pesan === 5000) {
            infoMSG.splice(0, 4300)
            fs.writeFileSync('./data/antidelete/.dat/data.chat.json', JSON.stringify(infoMSG, null, 2))
        }
        
        if (!sr.key.fromMe && sr.key.fromMe) return
        
			global.prefix
			global.blocked
			const content = JSON.stringify(sr.message)
			const from = sr.key.remoteJid
			const type = Object.keys(sr.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && sr.message.conversation.startsWith(prefix)) ? sr.message.conversation : (type == 'imageMessage') && sr.message.imageMessage.caption.startsWith(prefix) ? sr.message.imageMessage.caption : (type == 'videoMessage') && sr.message.videoMessage.caption.startsWith(prefix) ? sr.message.videoMessage.caption : (type == 'extendedTextMessage') && sr.message.extendedTextMessage.text.startsWith(prefix) ? sr.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? sr.message.conversation : (type === 'extendedTextMessage') ? sr.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && sr.message.conversation) ? sr.message.conversation : (type == 'imageMessage') && sr.message.imageMessage.caption ? sr.message.imageMessage.caption : (type == 'videoMessage') && sr.message.videoMessage.caption ? sr.message.videoMessage.caption : (type == 'extendedTextMessage') && sr.message.extendedTextMessage.text ? sr.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && sr.message.conversation) ? sr.message.conversation : (type == 'imageMessage') && sr.message.imageMessage.caption ? sr.message.imageMessage.caption : (type == 'videoMessage') && sr.message.videoMessage.caption ? sr.message.videoMessage.caption : (type == 'extendedTextMessage') && sr.message.extendedTextMessage.text ? sr.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && sr.message.conversation) ? sr.message.conversation : (type == 'imageMessage') && sr.message.imageMessage.caption ? sr.message.imageMessage.caption : (type == 'videoMessage') && sr.message.videoMessage.caption ? sr.message.videoMessage.caption : (type == 'extendedTextMessage') && sr.message.extendedTextMessage.text ? sr.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? sr.message.conversation : (type === 'extendedTextMessage') ? sr.message.extendedTextMessage.text : ''
			const testing = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const boTNumber = srart.user.jid
			const sender = isGroup ? sr.participant : sr.key.remoteJid
			pushname = srart.contacts[sender] != undefined ? srart.contacts[sender].vname || srart.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await srart.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            //**************/////////****************\\
          
            var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = '*Selamat Malam*'; break;
                case 1: waktoo = '*Selamat Malam*'; break;
                case 2: waktoo = '*Selamat Pagi*'; break;
                case 3: waktoo = '*Selamat Pagi*'; break;
                case 4: waktoo = '*Selamat Pagi*'; break;
                case 5: waktoo = '*Selamat Pagi*'; break;
                case 6: waktoo = '*Selamat Pagi*'; break;
                case 7: waktoo = '*Selamat Pagi*'; break;
                case 8: waktoo = '*Selamat Pagi*'; break;
                case 9: waktoo = '*Selamat Pagi*'; break;
                case 10: waktoo = '*Selamat Siang*'; break;
                case 11: waktoo = '*Selamat Siang*'; break;
                case 12: waktoo = '*Selamat Siang*'; break;
                case 13: waktoo = '*Selamat Siang*'; break;
                case 14: waktoo = '*Selamat Siang*'; break;
                case 15: waktoo = '*Selamat Sore*'; break;
                case 16: waktoo = '*Selamat Sore*'; break;
                case 17: waktoo = '*Selamat Sore*'; break;
                case 18: waktoo = '*Selamat Malam*'; break;
                case 19: waktoo = '*Selamat Malam*'; break;
                case 20: waktoo = '*Selamat Malam*'; break;
                case 21: waktoo = '*Selamat Malam*'; break;
                case 22: waktoo = '*Selamat Malam*'; break;
                case 23: waktoo = '*Selamat Malam*'; break;
            }
            var tampilUcapan = '' + waktoo;
            
            //buat fakereply
            var ase = new Date();
                        var _waktu_ = ase.getHours();
                        switch(_waktu_){
                case 0: _waktu_ = ` Malam${pushname}`; break;
                case 1: _waktu_ = ` Malam${pushname}`; break;
                case 2: _waktu_ = ` Malam${pushname}`; break;
                case 3: _waktu_ = ` Pagi ${pushname} `; break;
                case 4: _waktu_ = ` Pagi ${pushname} `; break;
                case 5: _waktu_ = ` Pagi ${pushname} `; break;
                case 6: _waktu_ = ` Pagi ${pushname} `; break;
                case 7: _waktu_ = ` Pagi ${pushname} `; break;
                case 8: _waktu_ = ` Pagi ${pushname} `; break;
                case 9: _waktu_ = ` Pagi ${pushname} `; break;
                case 10: _waktu_ = ` Siang ${pushname} `; break;
                case 11: _waktu_ = ` Siang ${pushname} `; break;
                case 12: _waktu_ = ` Siang ${pushname} `; break;
                case 13: _waktu_ = ` Siang ${pushname} `; break;
                case 14: _waktu_ = ` Siang ${pushname} `; break;
                case 15: _waktu_ = ` Sore ${pushname} `; break;
                case 16: _waktu_ = ` Sore ${pushname} `; break;
                case 17: _waktu_ = ` Sore ${pushname} `; break;
                case 18: _waktu_ = ` Malam ${pushname} `; break;
                case 19: _waktu_ = ` Malam ${pushname} `; break;
                case 20: _waktu_ = ` Malam ${pushname} `; break;
                case 21: _waktu_ = ` Malam ${pushname} `; break;
                case 22: _waktu_ = ` Malam ${pushname} /`; break;
                case 23: _waktu_ = ` Malam ${pushname} `; break;
            }
            var ucapanFakereply = '' + _waktu_;
		            const freply = {
                  key: {
			fromMe: false, 
			participant: `994404819287@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
	        	},
     		      message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./data/image/odc.jpg`)
					},
					"title": fake1,
					"description": fake2,
					"currencyCode": 'IDR',
					"priceAmount1000": '9999999',
					"retailerId": fake1,
					"productImageCount": '9999999',
				     },
			    	"businessOwnerJid": `994404819287@s.whatsapp.net`
	     	      }
            	}
            }
		Barss = getLevelingLevel(sender)
		bars = `[▒▒▒▒▒▒▒▒▒]`
		if (Barss <= 10) {
				bars = `[█▒▒▒▒▒▒▒▒]`
		} else if (Barss <= 20) {
				bars = `[██▒▒▒▒▒▒▒]`
		} else if (Barss <= 30) {
				bars = `[███▒▒▒▒▒▒]`
		} else if (Barss <= 40) {
				bars = `[████▒▒▒▒▒]`
		} else if (Barss <= 50) {
				bars = `[█████▒▒▒▒]`
		} else if (Barss <= 60) {
				bars = `[██████▒▒▒]`
		} else if (Barss <= 70) {
				bars = `[███████▒▒]`
		} else if (Barss <= 80) {
				bars = `[████████▒]`
		} else if (Barss <= 90) {
				bars = `[█████████]`
		} else if (Barss <= 100) {
				bars = `[█████████]`
		} else if (Barss <= 110) {
				bars = `[█████████]+1*`
		} else if (Barss <= 120) {
				bars = `[█████████]+2*`
		} else if (Barss <= 130) {
				bars = `[█████████]+3*`
		} else if (Barss <= 140) {
				bars = `[█████████]+4*`
		} else if (Barss <= 150) {
				bars = `[█████████]+5*`
		} else if (Barss <= 160) {
				bars = `[█████████]+6*`
		} else if (Barss <= 170) {
				bars = `[█████████]+7*`
		} else if (Barss <= 180) {
				bars = `[█████████]+8*`
		} else if (Barss <= 190) {
				bars = `[█████████]+9*`
        } else if (Barss <= 110) {
				bars = `[█████████]+10*`
        } else if (Barss <= 99999999999999) {
				bars = `[█████████]+上帝*`
        }
                     


/*
		if (isCmd) cmdadd()
           */
           
           
            /************** SCURITY FEATURE ************/
            const isSrOw = follow.includes(sender)
            const isOwner = ownerNumber.includes(sender)
            const isBuccin = isGroup ? antibucin.includes(from) : false
            const isAvid = isGroup ? Ass.includes(from) : false
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isVip =Ss.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(boTNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isBanned = ban.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
			const reply = (teks) => {
				srart.sendMessage(from, teks, text, {quoted:sr})
			}
			const sendMess = (hehe, teks) => {
				srart.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? srart.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : srart.sendMessage(from, teks.trim(), extendedText, {quoted : freply, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    srart.sendMessage(from, teks, image, {quoted:sr})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			srart.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    srart.sendMessage(from, audio, mp3, {quoted:sr})
		    }
		/*
		const mentionUser = type == "extendedTextMessage" ? sr.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? sr.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
		*/
		
		
	
	        /*****************END SCURITY FEATURE ********/

	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }

			
			//funtion diamonded
           const isDiamond = (sender) =>{ 
		      let position = false
              for (let i of diamond) {
              if (i.id === sender) {
              	let diamonds = i.diamond
              if (diamonds >= dmawal ) {
              	  position = true
                    srart.sendMessage(from, ind.diamondend(pushname), text, {quoted : freply})
                    return true
              } else {
              	diamond
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, diamond: 1 }
                diamond.push(obj)
                fs.writeFileSync('./database/user/diamond.json',JSON.stringify(diamond))
           return false
       }
     }
     	
                  //function check diamond
          const checkDm = (sender) => {
          	let found = false
                    for (let dmd of diamond) {
                        if (dmd.id === sender) {
                            let dmuser = dmawal - dmd.diamond
                            if (dmuser <= 0) return srart.sendMessage(from,`diamond anda sudah habis\n\n_Note : _Silahkan Beli lagi / mancing_`, text,{ quoted : freply})
                            srart.sendMessage(from, ind.diamondttl(dmuser), text, { quoted : freply})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, diamond: 1 }
                        diamond.push(obj)
                        fs.writeFileSync('./database/user/diamond.json', JSON.stringify(diamond))
                        srart.sendMessage(from, ind.diamondttl(dmuser), text, { quoted : freply})
                    }
				}
    
  
         
// ANTI LINK GRUP
                 if (messagesLink.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        srart.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("LIHAT ATURAN GRUP KAGA ")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Kamu Akan Aku Kick`)
		        setTimeout( () => {
			        srart.groupRemove(from, [kic]).catch((e)=>{reply(`*BOT~ HARUS JADI ADMIN—*`)})
		        }, 5000)
		        setTimeout( () => {
			        srart.updatePresence(from, Presence.composing)
			        reply("Dor")
		        }, 3000)
		        setTimeout( () => {
			        srart.updatePresence(from, Presence.composing)
			        reply("Assek Dapet Jatah Kick")
			        }, 100)
		  }
		  
	
	 	if (isGroup && isCmd) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 1
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
	
	
		  if (messagesLink.includes("://kuotainternet.online/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        srart.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("LIHAT ATURAN GRUP KAGA ")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        srart.groupRemove(from, [kic]).catch((e)=>{reply(`*BOT~ HARUS JADI ADMIN—*`)})
		        }, 5000)
		        setTimeout( () => {
			        srart.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 2000)
		        setTimeout( () => {
			        srart.updatePresence(from, Presence.composing)
			        reply("Nice Shot")
			        }, 100)
		  }
		  
           if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberdiamond) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           srart.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								srart.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								srart.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								srart.updatePresence(from, Presence.composing)
								reply("sehat sehat semua ya")
							}, 2000)
								setTimeout( () => {
								srart.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								srart.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberdiamond}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 

        
         /*
        ]=====> AFK ASU <=====[
        
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "*「 FITUR AFK 」*\nMAAF USER YANG ANDA TAG ATAU REPLY SEDANG AFK "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "ALASAN " + afk[x.split('@')[0]]
                    }
                    srart.sendMessage(from, ini_txt, text, {quoted : freply})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("*「 FITUR AFK 」*\n*ANDA SEKARANG TELAH KELUAR DARI MODE AFK*\n_Pasti gabutkan_")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./data/src/afk.json", JSON.stringify(afk))
            }
 */
        	if (bad.includes(messagesLink)) {
        	if (!isBadWord) return
		if (!isGroup) return
		if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ*`)
		}, 5200)
		setTimeout( () => {
		srart.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		}, 5000)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 1000)
		}

  	if (bcn.includes(messagesLink)) {
    	if (!isBuccin) return
		if (!isGroup) return
		if (isGroupAdmins) return reply(` *Heleh Mentang - Mentang Admin Malah Ngebucin* 😑😑😑`)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*Babay Bucin*`)
		}, 5200)
		setTimeout( () => {
		srart.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		}, 5000)
		setTimeout( () => {
		reply(`*_「 HAHA GEBLEK 」_*\nWOY *${pushname}* Dilarang Bucin di Grup *${groupMetadata.subject}* Cok`)
		}, 1000)
		}


	
	
 if (budy.includes(`${prefix}hidetag ${prefix}transfer`)) {

                    const bot = fs.readFileSync('./data/src/Tago.webp');
                    srart.sendMessage(from, bot, MessageType.sticker, {quoted: sr})
                  }


///===========《Batas On OFF》============\\\\\
if (isWelkom) {
		srart1 = 'AKTIF'
	    }
	    if (!isWelkom) {
		srart1 = 'NON-AKTIF'
	    } 
	
	if (isBuccin) {
		srart2 = 'AKTIF'
	    }
	    if (!isBuccin) {
		srart2 = 'NON-AKTIF'
	    } 
	
	if (isAvid) {
		srart3 = 'AKTIF'
	    }
	    if (!isAvid) {
		srart3 = 'NON-AKTIF'
	    } 
	
	if (isSimi) {
		srart4 = 'AKTIF'
	    }
	    if (!isSimi) {
		srart4 = 'NON-AKTIF'
	    } 
	
		if (isAntiLink) {
		srart5 = 'AKTIF'
	    }
	    if (!isAntiLink) {
		srart5 = 'NON-AKTIF'
	    } 

		if (isBadWord) {
		srart6 = 'AKTIF'
	    }
	    if (!isBadWord) {
		srart6 = 'NON-AKTIF'
	    } 
		
		if (isOwner) {
		srt = 'OWNER'
	    }
	    if (!isVip) {
		srt = 'BUKAN VIP'
	    } 
		if (isVip) {
		srt = 'Member VIP'
	    } 
		//antispam
        if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply(` *Woy ${pushname} Beri Jeda Lah Njing Ngk Ngotak Kali Lah Kau*`)}
        
       if (isCmd && antiSpam.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply(` *Woy ${pushname} Beri Jeda Lah Njing Ngk Ngotak Kali Lah Kau*`)}
        
		
           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			//chat message
		      if (isCmd && isGroup) antiSpam.addFilter(from)
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))

			switch(command) {
//===========================BATAS CASE DASAR============================\\
				
				case 'daftar': // ===《 pino_dev  》===\\
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                dml = `20`
                if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')       
                if (namaUser.length >= 30) return reply(`*itu nama apa kereta njir*`)
                if (umurUser > 80) return reply(`*NI KAKEK KAKEK KOK MASIH HIDUP*`)
                if (umurUser < 10) return reply(`*ANJAY BOCIL*`)
    				try {
					ppimg = await srart.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                veri = sender
                buffer = await getBuffer(ppimg)
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await srart.sendMessage(from, buffer, image, {quoted : freply, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    reply('Terima Kasih Sudah Absen')
		            addATM(sender)
					addbabi(sender)
					addkangguru(sender)
					addharimau(sender)
					addrusa(sender)
					addzebra(sender)
                    addLevelingId(sender)
                    bayardiamond(sender,dml)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await srart.sendMessage(from, buffer, image, {quoted : freply, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
		          reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addbabi(sender)
					addkangguru(sender)
					addharimau(sender)
					addrusa(sender)
					addzebra(sender)
                    addLevelingId(sender)
                    bayardiamond(sender,dml)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					await dmkrg(sender) 
break
					
				
				   case 'help': // ===《 pino_dev  》===\\ 
		            case 'menu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
				   const metag = {
                           text: `
╭════〘 *INFO USER* 〙════⊷
┃❏❥ *NAMA* : @${sender.split("@")[0]}
┃❏❥ *NOMOR* : ${sender.split("@")[0]}
┃❏❥ *LEVEL* : ${getLevelingLevel(sender)}
┃❏❥ *XP* : ${getLevelingXp(sender)}
┃❏❥ *UANG* : Rp.${checkATMuser(sender)}
┃❏❥ *DM* : ${cekdmr(sender)} 💎
┃❏❥ *STATUS* : *${srt}*
╰══════════════════⊷     

╭════〘 *INFO BOT* 〙════⊷
┣❒ ➳ *NAMA : ${NamaBot}*
┣❒ ➳ *OWNER : ${NamaOwner}*
┣❒ ➳ *Mode : ${publik ? 'PUBLIC' : 'SELF'}*
┣❒ ➳ *PREFIX* : ${prefix}
┣❒ ➳ *KECEPATAN* : ${process.uptime()}
┣❒ ➳ *HARI : ${tampilTanggal}*
┣❒ ➳ *USER* : ${_registered.length}
┣❒ ➳ *BOT Online Sejak*
┣           *${tampilWaktu}*
╰══════════════════⊷     

╭════〘 *MENU*  〙════¤
┃❒ ➳ *${prefix}uangdm*
┃❒ ➳ *${prefix}ownermenu*
┃❒ ➳ *${prefix}grupmenu*
┃❒ ➳ *${prefix}listmenu*
┃❒ ➳ *${prefix}tollsmenu*
┃❒ ➳ *${prefix}randomstiker*
┃❒ ➳ *${prefix}gamemenu*
┃❒ ➳ *${prefix}gabutmenu*
┃❒ ➳ *${prefix}mediamenu*
┃❒ ➳ *${prefix}textmenu*
┃❒ ➳ *${prefix}downloadmenu*
┃❒ ➳ *${prefix}hentaimenu*
┃❒ ➳ *${prefix}makermenu*
┃❒ ➳ *${prefix}ramalmenu*
┃❒ ➳ *${prefix}sertimenu*
┃❒ ➳ *${prefix}soundmenu*
╰════〘  *${NamaBot}*  〙════¤

 *©NAHOYA-BOT* 

*${ulth}
` ,
                       contextInfo: {
                       mentionedJid: [sender]
                       }
                       }
    srart.sendMessage(from, metag, text, { quoted : freply })
break
   
/////=======《 Menu 》======\\\\\\\\\\\

case 'uangdm': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *UANG & DM*  〙════¤
┃❒ ➳ *${prefix}dompet*
┃❒ ➳ *${prefix}cekdm*
┃❒ ➳ *${prefix}buydm*
┃❒ ➳ *${prefix}hargadm*
┃❒ ➳ *${prefix}transfer*
┃❒ ➳ *${prefix}mancing*
┃❒ ➳ *${prefix}taruhan*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					await dmkrg(sender) 
break

case 'ownermenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *OWNER MENU*  〙════¤
┃❒ ➳ *${prefix}setthumb*
┃❒ ➳ *${prefix}setpp*
┃❒ ➳ *${prefix}setdiamond*
┃❒ ➳ *${prefix}setprefix*
┃❒ ➳ *${prefix}sethargadiamond*
┃❒ ➳ *${prefix}setmemberdiamond*
┃❒ ➳ *${prefix}public*
┃❒ ➳ *${prefix}self*
┃❒ ➳ *${prefix}online*
┃❒ ➳ *${prefix}offline*
┃❒ ➳ *${prefix}vipadd*
┃❒ ➳ *${prefix}vipdell*
┃❒ ➳ *${prefix}addbadword*
┃❒ ➳ *${prefix}dellbadword*
┃❒ ➳ *${prefix}ban*
┃❒ ➳ *${prefix}unban*
┃❒ ➳ *${prefix}block*
┃❒ ➳ *${prefix}bc*
┃❒ ➳ *${prefix}clearall*
┃❒ ➳ *${prefix}readall*
┃❒ ➳ *${prefix}clone*
┃❒ ➳ *${prefix}event 1/0*
┃❒ ➳ *${prefix}addvn*
┃❒ ➳ *${prefix}sethdm1*
┃❒ ➳ *${prefix}sethdm2*
┃❒ ➳ *${prefix}sethdm3*
┃❒ ➳ *${prefix}sethdm4*
┃❒ ➳ *${prefix}sethdm5*
╰════〘  *${NamaBot}*  〙════¤

*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'downloadmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *DOWNLOAD MENU*  〙════¤
┃❒ ➳ *${prefix}ytmp3*
┃❒ ➳ *${prefix}ytmp4*
╰════〘  *${NamaBot}*  〙════¤

*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'grupmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *GRUP MENU*  〙════¤
┃❒ ➳ *${prefix}welcome 0/1*
┃❒ ➳ *${prefix}antilink 0/1*
┃❒ ➳ *${prefix}simi 0/1*
┃❒ ➳ *${prefix}nobadword 0/1*
┃❒ ➳ *${prefix}antibucin hidup/mati*
┃❒ ➳ *${prefix}antivideo hidup/mati*
┃❒ ➳ *${prefix}grup buka/tutup*
┃❒ ➳ *${prefix}resetlinkgc*
┃❒ ➳ *${prefix}setname*
┃❒ ➳ *${prefix}setdesc*
┃❒ ➳ *${prefix}promote*
┃❒ ➳ *${prefix}demote*
┃❒ ➳ *${prefix}setppgc*
┃❒ ➳ *${prefix}add*
┃❒ ➳ *${prefix}kick*
┃❒ ➳ *${prefix}tagall*
┃❒ ➳ *${prefix}hidetag*
┃❒ ➳ *${prefix}gt replay gambar*
┃❒ ➳ *${prefix}st replay stiker*
╰════〘  *${NamaBot}*  〙════¤

*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'listmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *LIST MENU*  〙════¤
┃❒ ➳ *${prefix}listonline*
┃❒ ➳ *${prefix}listvip*
┃❒ ➳ *${prefix}listban*
┃❒ ➳ *${prefix}listadmin*
┃❒ ➳ *${prefix}listvn*
┃❒ ➳ *${prefix}listsurah*
┃❒ ➳ *${prefix}listblok*
┃❒ ➳ *${prefix}listgrup*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'tollsmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *TOLLS MENU*  〙════¤
┃❒ ➳ *${prefix}stiker* (replay foto)
┃❒ ➳ *${prefix}swm* (replay foto)
┃❒ ➳ *${prefix}toimg* (replay stiker)
┃❒ ➳ *${prefix}bass* (replay audio)
┃❒ ➳ *${prefix}slowmo* (replay audio)
┃❒ ➳ *${prefix}tupai* (replay audio)
┃❒ ➳ *${prefix}fast1* (replay audio)
┃❒ ➳ *${prefix}fast2* (replay audio)
┃❒ ➳ *${prefix}tomp3* (replay audio)
┃❒ ➳ *${prefix}kontak* ( nomor + nama )
┃❒ ➳ *${prefix}kontakku* (nama)
┃❒ ➳ *${prefix}nmrku*
┃❒ ➳ *${prefix}wame*
┃❒ ➳ *${prefix}nmrtf*
┃❒ ➳ *${prefix}tagme*
┃❒ ➳ *${prefix}profile*
┃❒ ➳ *${prefix}ssweb*
┃❒ ➳ *${prefix}deteksiwajah*
┃❒ ➳ *${prefix}deteksigender*
┃❒ ➳ *${prefix}deteksiumur*
┃❒ ➳ *${prefix}romadhon*
┃❒ ➳ *${prefix}iduladha*
┃❒ ➳ *${prefix}tahunbaru*
┃❒ ➳ *${prefix}getbio* (tag)
┃❒ ➳ *${prefix}getpic* (tag)
╰════〘  *${NamaBot}*  〙════¤


*NAHOYA-BOT* 
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'randomstiker': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *Random Sticker*  〙════¤
┃❒ ➳ *${prefix}bucinstick*
┃❒ ➳ *${prefix}gawrgura*
┃❒ ➳ *${prefix}patrick*
┃❒ ➳ *${prefix}amongus*
┃❒ ➳ *${prefix}anjing*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'gamemenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *GAME MENU*  〙════¤
┃❒ ➳ *${prefix}slot*
┃❒ ➳ *${prefix}suit*
┃❒ ➳ *${prefix}dadu*
┃❒ ➳ *${prefix}mancing*
┃❒ ➳ *${prefix}udara*
┃❒ ➳ *${prefix}darat*
┃❒ ➳ *${prefix}laut*
┃❒ ➳ *${prefix}taruhan*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break 

case 'gabutmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *GABUT MENU*  〙════¤
┃❒ ➳ *${prefix}random*
┃❒ ➳ *${prefix}beban*
┃❒ ➳ *${prefix}terganteng*
┃❒ ➳ *${prefix}tercantik*
┃❒ ➳ *${prefix}terpikun*
┃❒ ➳ *${prefix}terimut*
┃❒ ➳ *${prefix}caridoi*
┃❒ ➳ *${prefix}tergoblok*
┃❒ ➳ *${prefix}terpinter*
┃❒ ➳ *${prefix}goodloking*
┃❒ ➳ *${prefix}seleb*
┃❒ ➳ *${prefix}gantengcek* ( tag orang )
┃❒ ➳ *${prefix}cantikcek* ( tag orang )
┃❒ ➳ *${prefix}fuckboycek* ( tag orang )
┃❒ ➳ *${prefix}fuckgirlcek* ( tag orang )
┃❒ ➳ *${prefix}sangecek* ( tag orang )
┃❒ ➳ *${prefix}bucincek* ( tag orang )
┃❒ ➳ *${prefix}bisakah*
┃❒ ➳ *${prefix}kapankah*
┃❒ ➳ *${prefix}apakah*
┃❒ ➳ *${prefix}bagaimanakah*
┃❒ ➳ *${prefix}watak*
┃❒ ➳ *${prefix}hobby*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'mediamenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *MEDIA MENU*  〙════¤
┃❒ ➳ *${prefix}ppcouple*
┃❒ ➳ *${prefix}pinterest*
┃❒ ➳ *${prefix}igstalk*
┃❒ ➳ *${prefix}ttstalk*
┃❒ ➳ *${prefix}asupan*
┃❒ ➳ *${prefix}asupanrikagusriani*
┃❒ ➳ *${prefix}asupanghea*
┃❒ ➳ *${prefix}covidindo*
┃❒ ➳ *${prefix}covidglobal*
┃❒ ➳ *${prefix}kodepos*
┃❒ ➳ *${prefix}google*
┃❒ ➳ *${prefix}translate*
┃❒ ➳ *${prefix}brainly*
┃❒ ➳ *${prefix}cuaca*
┃❒ ➳ *${prefix}infogempa*
┃❒ ➳ *${prefix}jadwalbola*
┃❒ ➳ *${prefix}indbeasiswa*
┃❒ ➳ *${prefix}hoax*
┃❒ ➳ *${prefix}playstore*
┃❒ ➳ *${prefix}shopee*
┃❒ ➳ *${prefix}bitly*
┃❒ ➳ *${prefix}nangis*
┃❒ ➳ *${prefix}cium*
┃❒ ➳ *${prefix}peluk*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break 

case 'textmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *TEKS MENU*  〙════¤
┃❒ ➳ *${prefix}faktaunik*
┃❒ ➳ *${prefix}katabijak*
┃❒ ➳ *${prefix}pantun*
┃❒ ➳ *${prefix}bucin*
┃❒ ➳ *${prefix}katabucin*
┃❒ ➳ *${prefix}dilan*
┃❒ ➳ *${prefix}islami*
┃❒ ➳ *${prefix}quotes*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break 

case 'hentaimenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *HENTAI MENU*  〙════¤
┃❒ ➳ *${prefix}chiisaihentai*
┃❒ ➳ *${prefix}trap*
┃❒ ➳ *${prefix}blowjob*
┃❒ ➳ *${prefix}yaoi*
┃❒ ➳ *${prefix}ecchi*
┃❒ ➳ *${prefix}hentai*
┃❒ ➳ *${prefix}ahegao*
┃❒ ➳ *${prefix}hololewd*
┃❒ ➳ *${prefix}sideoppai*
┃❒ ➳ *${prefix}animefeets*
┃❒ ➳ *${prefix}animebooty*
┃❒ ➳ *${prefix}animethighss*
┃❒ ➳ *${prefix}hentaiparadise*
┃❒ ➳ *${prefix}animearmpits*
┃❒ ➳ *${prefix}hentaifemdom*
┃❒ ➳ *${prefix}lewdanimegirls*
┃❒ ➳ *${prefix}biganimetiddies*
┃❒ ➳ *${prefix}animebellybutton*
┃❒ ➳ *${prefix}hentai4everyone*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break 

case 'makermenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *MAKER MENU*  〙════¤
┃❒ ➳ *${prefix}ktpmaker*
┃❒ ➳ *${prefix}gravity*
┃❒ ➳ *${prefix}blackpink*
┃❒ ➳ *${prefix}neon*
┃❒ ➳ *${prefix}greenneon*
┃❒ ➳ *${prefix}advanceglow*
┃❒ ➳ *${prefix}futureneon*
┃❒ ➳ *${prefix}sandwriting*
┃❒ ➳ *${prefix}sandsummer*
┃❒ ➳ *${prefix}sandengraved*
┃❒ ➳ *${prefix}metaldark*
┃❒ ➳ *${prefix}neonlight*
┃❒ ➳ *${prefix}holographic*
┃❒ ➳ *${prefix}text1917*
┃❒ ➳ *${prefix}minion*
┃❒ ➳ *${prefix}deluxesilver*
┃❒ ➳ *${prefix}newyearcard*
┃❒ ➳ *${prefix}bloodfrosted*
┃❒ ➳ *${prefix}halloween*
┃❒ ➳ *${prefix}jokerlogo*
┃❒ ➳ *${prefix}fireworksparkle*
┃❒ ➳ *${prefix}natureleaves*
┃❒ ➳ *${prefix}bokeh*
┃❒ ➳ *${prefix}toxic*
┃❒ ➳ *${prefix}strawberry*
┃❒ ➳ *${prefix}box3d*
┃❒ ➳ *${prefix}roadwarning*
┃❒ ➳ *${prefix}breakwall*
┃❒ ➳ *${prefix}icecold*
┃❒ ➳ *${prefix}luxury*
┃❒ ➳ *${prefix}cloud*
┃❒ ➳ *${prefix}summersand*
┃❒ ➳ *${prefix}horrorblood*
┃❒ ➳ *${prefix}thunder*
┃❒ ➳ *${prefix}pornhub*
┃❒ ➳ *${prefix}avenger*
┃❒ ➳ *${prefix}space*
┃❒ ➳ *${prefix}ninjalogo*
┃❒ ➳ *${prefix}marvelstudio*
┃❒ ➳ *${prefix}lionlogo*
┃❒ ➳ *${prefix}wolflogo*
┃❒ ➳ *${prefix}steel3d*
┃❒ ➳ *${prefix}wallgravity*
┃❒ ➳ *${prefix}shadow*
┃❒ ➳ *${prefix}romance*
┃❒ ➳ *${prefix}smoke*
┃❒ ➳ *${prefix}burnpaper*
┃❒ ➳ *${prefix}lovemessage*
┃❒ ➳ *${prefix}undergrass*
┃❒ ➳ *${prefix}coffe*
┃❒ ➳ *${prefix}cup*
┃❒ ➳ *${prefix}cup1*
┃❒ ➳ *${prefix}woodenboard*
┃❒ ➳ *${prefix}woodheart*
┃❒ ➳ *${prefix}summer3d*
┃❒ ➳ *${prefix}love*
┃❒ ➳ *${prefix}wolfmetal*
┃❒ ➳ *${prefix}nature3d*
┃❒ ➳ *${prefix}underwater*
┃❒ ➳ *${prefix}golderrose*
┃❒ ➳ *${prefix}summernature*
┃❒ ➳ *${prefix}letterleaves*
┃❒ ➳ *${prefix}glowingneon*
┃❒ ➳ *${prefix}fallleaves*
┃❒ ➳ *${prefix}flamming*
┃❒ ➳ *${prefix}harrypotter*
┃❒ ➳ *${prefix}carvedwood*
┃❒ ➳ *${prefix}tiktok*
┃❒ ➳ *${prefix}arcade8bit*
┃❒ ➳ *${prefix}battlefield4*
┃❒ ➳ *${prefix}pubg*
┃❒ ➳ *${prefix}bannerlol*
┃❒ ➳ *${prefix}wetglass*
┃❒ ➳ *${prefix}multicolor3d*
┃❒ ➳ *${prefix}watercolor*
┃❒ ➳ *${prefix}luxurygold*
┃❒ ➳ *${prefix}galaxywallpaper*
┃❒ ➳ *${prefix}lighttext*
┃❒ ➳ *${prefix}beautifulflower*
┃❒ ➳ *${prefix}puppycute*
┃❒ ➳ *${prefix}royaltext*
┃❒ ➳ *${prefix}heartshaped*
┃❒ ➳ *${prefix}birthdaycake*
┃❒ ➳ *${prefix}galaxystyle*
┃❒ ➳ *${prefix}hologram3d*
┃❒ ➳ *${prefix}greenneon*
┃❒ ➳ *${prefix}glossychrome*
┃❒ ➳ *${prefix}greenbush*
┃❒ ➳ *${prefix}metallogo*
┃❒ ➳ *${prefix}noeltext*
┃❒ ➳ *${prefix}glittergold*
┃❒ ➳ *${prefix}textcake*
┃❒ ➳ *${prefix}starsnight*
┃❒ ➳ *${prefix}wooden3d*
┃❒ ➳ *${prefix}textbyname*
┃❒ ➳ *${prefix}writegalacy*
┃❒ ➳ *${prefix}galaxybat*
┃❒ ➳ *${prefix}snow3d*
┃❒ ➳ *${prefix}birthdayday*
┃❒ ➳ *${prefix}goldplaybutton*
┃❒ ➳ *${prefix}silverplaybutton*
┃❒ ➳ *${prefix}freefire*
┃❒ ➳ *${prefix}cartoongravity*
┃❒ ➳ *${prefix}anonymhacker*
┃❒ ➳ *${prefix}juventusshirt*
┃❒ ➳ *${prefix}realvintage*
┃❒ ➳ *${prefix}codwarzone*
┃❒ ➳ *${prefix}valorantbanner*
┃❒ ➳ *${prefix}hartatahta*
┃❒ ➳ *${prefix}hartacustom*
┃❒ ➳ *${prefix}ttp*
┃❒ ➳ *${prefix}ttp2*
┃❒ ➳ *${prefix}ttp3*
┃❒ ➳ *${prefix}ttp4*
┃❒ ➳ *${prefix}attp*
┃❒ ➳ *${prefix}gtapassed*
┃❒ ➳ *${prefix}ohno*
┃❒ ➳ *${prefix}kannagen*
┃❒ ➳ *${prefix}quotemaker*
┃❒ ➳ *${prefix}cloudtext*
┃❒ ➳ *${prefix}videomaker*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break 

case 'ramalmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *RAMAL MENU*  〙════¤
┃❒ ➳ *${prefix}ramalnomer*
┃❒ ➳ *${prefix}ramalcinta*
┃❒ ➳ *${prefix}ramaljodoh*
┃❒ ➳ *${prefix}ramalnikah*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'sertimenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *SERTIFIKAT*  〙════¤
┃❒ ➳ *${prefix}tololserti*
┃❒ ➳ *${prefix}fuckboyserti*
┃❒ ➳ *${prefix}fuckgirlserti*
┃❒ ➳ *${prefix}bucinserti*
┃❒ ➳ *${prefix}pacarserti*
┃❒ ➳ *${prefix}goodboyserti*
┃❒ ➳ *${prefix}goodgirlserti*
┃❒ ➳ *${prefix}badboyserti*
┃❒ ➳ *${prefix}badgirlserti*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break

case 'soundmenu': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                    wew = fs.readFileSync(`./data/image/logo.jpg`)
                    Vip = fs.readFileSync(`./data/image/Vip.png`)
                    zxzz = `
╭════〘 *SOUND MENU*  〙════¤
┃❒ ➳ *${prefix}sound1*
┃❒ ➳ *${prefix}sound2*
┃❒ ➳ *${prefix}sound3*
┃❒ ➳ *${prefix}sound4*
┃❒ ➳ *${prefix}sound5*
┃❒ ➳ *${prefix}sound6*
┃❒ ➳ *${prefix}sound7*
┃❒ ➳ *${prefix}sound8*
┃❒ ➳ *${prefix}sound9*
┃❒ ➳ *${prefix}sound10*
┃❒ ➳ *${prefix}sound11*
┃❒ ➳ *${prefix}sound12*
╰════〘  *${NamaBot}*  〙════¤


*©NAHOYA-BOT* 

_follow_ = @xnoob_ganz
https://github.com/PinoRecode
` 
                    if (isVip) return srart.sendMessage(from, Vip, image, { quoted : freply, caption: zxzz })
    srart.sendMessage(from, wew, image, { quoted : freply, caption: zxzz })
					
break










//////////《UANG DAN diamond》/////////


case 'cekdm': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				   checkDm(sender)
				 
break
				
				case 'hargadm': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				wew = fs.readFileSync(`./data/image/logo.jpg`)
				ggpg = `
*HARGA DIAMOND BOT*

*[1].  15   💎 = Rp.${hdm1}* 
*[2].  45   💎 = Rp.${hdm2}* 
*[3].  150 💎 = Rp.${hdm3}* 
*[4].  180 💎 = Rp.${hdm4}* 
*[5].  250 💎 = Rp.${hdm5}* 

*cara beli*

${prefix}buydm *nomor 1 - 5*

*_contoh : ${prefix}buydm 3_*
`
srart.sendMessage(from, wew, image, { quoted : ftoko, caption: ggpg })
break


case 'transfer': // ===《 pino_dev  》===\\
		        if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
				var gh = body.slice(11)
                var tujuan = gh.split("|")[0];
                var jumblah = gh.split("|")[1];
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer Rp.5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0*  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\n*Transfer uang sukses*\n*Dari : wa.me/${sender.split("@")[0]}*\n*Untuk : wa.me/${tujuan}*\n*Jumlah transfer : Rp.${jumblah}*\n*Pajak : Gratis*`)
                		await dmkrg(sender) 
break
				case 'dompet': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				await dmkrg(sender) 
break

////////////《Buy Dm》\\\\\\\\\

		case 'buydm': // ===《 pino_dev  》===\\
		        var value = body.slice(7)
		        if (value > 5) return reply(`*Maaf List Harga Hanya Sampe 5*\n*silagkan ketik ${prefix}hargadm untuk melihat daftar harga*`)
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Ketik ${prefix}hargadm untuk melihat harga`)
                if (args[0] === '1') {
                payout = 15
				if(isNaN(payout)) return await reply('diamond harus berupa angka!!')
				const total = `${hdm1}`
				if ( checkATMuser(sender) <= total) return reply('*「 UANGMU KURANG 」*') 
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayardiamond(sender, payout)
					BYR = `
		*「 PEMBAYARAN BERHASIL 」*

pengirim*      = [ *NAHOYA-BOT*]
*penerima*     = ${pushname}
*harga*             =  Rp.${total}
*Sisa uang*     =  Rp.${checkATMuser(sender)}
*Jumlah*         =  ${payout} 💎

_Nomer pembayaran_
[  ${createSerial(15)}  ]
`
					await reply(BYR)
				} 
				}
				
                if (args[0] === '2') {
                payout = 45
				if(isNaN(payout)) return await reply('diamond harus berupa angka!!')
				const total = `${hdm2}`
				if ( checkATMuser(sender) <= total) return reply('*「 UANGMU KURANG 」*') 
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayardiamond(sender, payout)
					BYR = `
		*「 PEMBAYARAN BERHASIL 」*

pengirim*      = [ *NAHOYA-BOT*]
*penerima*     = ${pushname}
*harga*             =  Rp.${total}
*Sisa uang*     =  Rp.${checkATMuser(sender)}
*Jumlah*         =  ${payout} 💎

_Nomer pembayaran_
[  ${createSerial(15)}  ]
`
					await reply(BYR)
				} 
				}
				
                if (args[0] === '3') {
                payout = 150
				if(isNaN(payout)) return await reply('diamond harus berupa angka!!')
				const total = `${hdm3}`
				if ( checkATMuser(sender) <= total) return reply('*「 UANGMU KURANG 」*') 
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayardiamond(sender, payout)
					BYR = `
		*「 PEMBAYARAN BERHASIL 」*

*pengirim*      = [ *NAHOYA-BOT* ]
*penerima*     = ${pushname}
*harga*             =  Rp.${total}
*Sisa uang*     =  Rp.${checkATMuser(sender)}
*Jumlah*         =  ${payout} 💎

_Nomer pembayaran_
[  ${createSerial(15)}  ]
`
					await reply(BYR)
				} 
				}
                if (args[0] === '4') {
                payout = 180
				if(isNaN(payout)) return await reply('diamond harus berupa angka!!')
				const total = `${hdm4}`
				if ( checkATMuser(sender) <= total) return reply('*「 UANGMU KURANG 」*') 
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayardiamond(sender, payout)
					BYR = `
		*「 PEMBAYARAN BERHASIL 」*

pengirim*      = [ *NAHOYA-BOT*]
*penerima*     = ${pushname}
*harga*             =  Rp.${total}
*Sisa uang*     =  Rp.${checkATMuser(sender)}
*Jumlah*         =  ${payout} 💎

_Nomer pembayaran_
[  ${createSerial(15)}  ]
`
					await reply(BYR)
				} 
				}
                if (args[0] === '5') {
                payout = 250
				if(isNaN(payout)) return await reply('diamond harus berupa angka!!')
				const total = `${hdm5}`
				if ( checkATMuser(sender) <= total) return reply('*「 UANGMU KURANG 」*')
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayardiamond(sender, payout)
					BYR = `
		*「 PEMBAYARAN BERHASIL 」*

pengirim*      = [ *NAHOYA-BOT*]
*penerima*     = ${pushname}
*harga*             =  Rp.${total}
*Sisa uang*     =  Rp.${checkATMuser(sender)}
*Jumlah*         =  ${payout} 💎

_Nomer pembayaran_
[  ${createSerial(15)}  ]
`
					await reply(BYR)
				} 
				}
			
break


				    case 'sethdm1': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					hdm1 = args[0]
					reply(`*hdm1 berhasil di ubah menjadi* : ${hdm1}`)
					break
					
					case 'sethdm2': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					hdm2 = args[0]
					reply(`*hdm2 berhasil di ubah menjadi* : ${hdm2}`)
					break
					
					case 'sethdm3': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					hdm3 = args[0]
					reply(`*hdm3 berhasil di ubah menjadi* : ${hdm3}`)
					break
					
					case 'sethdm4': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					hdm4 = args[0]
					reply(`*hdm4 berhasil di ubah menjadi* : ${hdm4}`)
					break
					
					case 'sethdm5': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					hdm5 = args[0]
					reply(`*hdm5 berhasil di ubah menjadi* : ${hdm5}`)
					break

				case 'setthumb':
				if (!isOwner && !isSrOw) return reply(ind.ownerb())
                if (!isQuotedImage) return reply('reply image nya kak!')
                const srarttt = JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const arttt = await srart.downloadMediaMessage(srarttt)
                fs.unlinkSync(`./data/image/odc.jpg`)
                await sleep(4000)
                fs.writeFileSync(`./data/image/odc.jpg`, arttt)
                srart.sendMessage(from, '*BERHASIL*', text, { sendEphemeral: true, thumbnail: fs.readFileSync('./data/image/odc.jpg', 'base64')})
                break

//==========《》《》《》==========\\



 case 'mancing': // ===《 pino_dev  》===\\
                 if (!isRegistered) return reply( ind.noregis())
                    S  = `${srb1}`
                    Q = `${srbp}`
			        N = `*Bonus*\n\n `
			        M = `*Bonus*\n\n`
                    M += `+ *${sender,Q} 💎 *`
                    N += `+ *${sender,S} 💎*`
                   bayardiamond(sender,S)
			       bayardiamond(sender,Q)
                    setTimeout(() => {
                    if (isVip) return reply(M)
                     reply(N)
                     }, 21500) 
                     setTimeout(() => {
                     reply(`*selamat kamu mendapatkan ikan*`)
                      }, 21000)
                     setTimeout(() => {
                     srart.sendMessage(from, ikanC, sticker, { quoted : freply })
                     }, 19000) 
                     setTimeout(() => {
                     reply('_Strike_')
                     }, 20000) 
                     setTimeout(() => {
                     reply('_melempar umpan_')
                     }, 0) 
                      
break


///========《case owner》========\\\\\\

case 'antidelete':
                const dataRevoke = JSON.parse(fs.readFileSync('./data/antidelete/gc-revoked.json'))
                const dataCtRevoke = JSON.parse(fs.readFileSync('./data/antidelete/ct-revoked.json'))
                const dataBanCtRevoke = JSON.parse(fs.readFileSync('./data/antidelete/ct-revoked-banlist.json'))
                const isRevoke = dataRevoke.includes(from)
                const isCtRevoke = dataCtRevoke.data
                const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                const argz = body.split(' ')
                if (!isOwner && !isSrOw) return reply(ind.ownerb())
                if (argz.length === 1) return srart.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                if (argz[1] == 'aktif') {
                    if (isGroup) {
                        if (isRevoke) return srart.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
                        dataRevoke.push(from)
                        fs.writeFileSync('./data/antidelete/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        srart.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        srart.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctaktif') {
                    if (!isGroup) {
                        if (isCtRevoke) return srart.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                        dataCtRevoke.data = true
                        fs.writeFileSync('./data/antidelete/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        srart.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        srart.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'banct') {
                    if (isBanCtRevoke) return srart.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                    if (argz.length === 2 || argz[2].startsWith('0')) return srart.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                    dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
                    fs.writeFileSync('./data/antidelete/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                    srart.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                } else if (argz[1] == 'mati') {
                    if (isGroup) {
                        const index = dataRevoke.indexOf(from)
                        dataRevoke.splice(index, 1)
                        fs.writeFileSync('./data/antidelete/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        srart.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        srart.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctmati') {
                    if (!isGroup) {
                        dataCtRevoke.data = false
                        fs.writeFileSync('./data/antidelete/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        srart.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        srart.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                    }
                }
                break

case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (args.length < 1) return reply('hidup untuk menyalakan, mati untuk mematikan')
                if (args[0] === 'hidup') {
                if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
                badword.push(from)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === 'mati') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.satukos())
                }
                await diamondkrg(sender) 
break


case 'addkatabucin': // ===《 pino_dev  》===\\ 
                    if (!isOwner && !isSrOw) return reply(ind.ownerb())
                    if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addkatabucin [Katabucin]. contoh ${prefix}addkatabucin Sayang`)
                    const adbc = body.slice(14)
                    bcn.push(adbc)
                    fs.writeFileSync('./database/group/katabucin.json', JSON.stringify(bcn))
                    reply('Success Menambahkan Katabucin')
                    await dmkrg(sender) 
break
                    case 'dellkatabucin': // ===《 pino_dev  》===\\  
                    if (!isOwner && !isSrOw) return reply(ind.ownerb())
                    if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}dellkatabucin [Katabucin]. contoh ${prefix}dellkatabucin Sayang`)
                    let dbcn = body.slice(15)
                    bcn.splice(dbcn)
                    fs.writeFileSync('./database/group/katabucin.json', JSON.stringify(bcn))
                    reply('Success Menghapus Katabucin')
                    await dmkrg(sender) 
break 

case 'antilink':
			if (!isBotGroupAdmins) return reply(ind.badmin())
		      if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())			
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isAntiLink) return reply('UDAH NYALA KAK')
				antilink.push(from)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
				srart.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntiLink) return reply('EMANG AKTIF?')
				var ini = anti.botLangsexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
				reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				
break

case 'simi': // ===《 pino_dev  》===\\
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (args.length < 1) return reply('Hidup untuk menyalakan, mati untuk mematikan')
                if (args[0] === 'hidup') {
                if (isSimi) return reply('*SUDAH AKTIF*')
                samih.push(from)
                fs.writeFileSync('./database/group/simmi.json', JSON.stringify(samih))
               reply(`*BERHASIL MENGHIDUPKAN FITUR SIMI*`)
              	} else if (args[0] === 'mati') {
                samih.splice(from, 1)
                fs.writeFileSync('./database/group/simmi.json', JSON.stringify(samih))
                reply(`*BERHASIL MEMATIKAN FITUR SIMI*`)
                } else {
                reply(ind.satukos())
                }
                await dmkrg(sender) 
break

case 'welcome':
					if (!isBotGroupAdmins) return reply(ind.badmin())
				 if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
				} else {
				reply(ind.satukos())
				}
				await diamondkrg(sender) 
break
	

case 'antibucin': // ===《 pino_dev  》===\\
				if (!isBotGroupAdmins) return reply(ind.badmin())
				 if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (args.length < 1) return reply('Hidup untuk menyalakan, mati untuk mematikan')
                if (args[0] === 'hidup') {
                if (isBuccin) return reply('*SUDAH AKTIF*')
                antibucin.push(from)
                fs.writeFileSync('./database/group/antibucin.json', JSON.stringify(antibucin))
               reply(`*BERHASIL MENGHIDUPKAN ANTI BUCIN*`)
              	} else if (args[0] === 'mati') {
                antibucin.splice(from, 1)
                fs.writeFileSync('./database/group/antibucin.json', JSON.stringify(antibucin))
                reply(`*BERHASIL MEMATIKAN ANTI BUCIN*`)
                } else {
                reply(ind.satukos())
                }
                await dmkrg(sender) 
break

case 'antivideo': // ===《 pino_dev  》===\\
				if (!isBotGroupAdmins) return reply(ind.badmin())
				 if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (args.length < 1) return reply('Hidup untuk menyalakan, mati untuk mematikan')
                if (args[0] === 'hidup') {
                if (isAvid) return reply('*SUDAH AKTIF*')
                Ass.push(from)
                fs.writeFileSync('./database/group/antivideo.json', JSON.stringify(Ass))
               reply(`*BERHASIL MENGHIDUPKAN ANTI Video*`)
              	} else if (args[0] === 'mati') {
                Ass.splice(from, 1)
                fs.writeFileSync('./database/group/antivideo.json', JSON.stringify(Ass))
                reply(`*BERHASIL MEMATIKAN ANTI Video*`)
                } else {
                reply(ind.satukos())
                }
                await dmkrg(sender) 
break

case 'listbucin': // ===《 pino_dev  》===\\
			if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				teks = '*List Bucin :*\n\n'
				for (let tesd of bcn) {
					teks += `💠  ${tesd}\n`
				}
				teks += `\n*Total : ${bcn.length}*`
				srart.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				await dmkrg(sender) 
				break

					case 'setpp': // ===《 pino_dev  》===\\
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					srart.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(enmedia)
					await srart.updateProfilePicture(boTNumber, media)
					reply('Makasih profil barunya')
					await dmkrg(sender) 
					break 
					
					case 'setdiamond': // ===《 pino_dev  》===\\
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					dmawal = args[0]
					reply(`*diamond berhasil di ubah menjadi* : ${dmawal}`)
					await dmkrg(sender) 
					break 
					
					case 'setprefix': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					await dmkrg(sender) 
					break
					
					case 'setmemberdiamond': // ===《 pino_dev  》===\\
					if (args.length < 1) return
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('diamond harus angka')
					memberdiamond = args[0]
					reply(`Change Member diamond To ${memberdiamond} SUCCESS!`)
					await dmkrg(sender) 
					break
					
			       case 'vipadd': // ===《 pino_dev  》===\\
                   if (!isOwner && !isSrOw) return reply(ind.ownerb())
                  stnn = body.slice(9)
                  Ss.push(`${stnn}@s.whatsapp.net`)
                  fs.writeFileSync('./database/user/Vip.json', JSON.stringify(Ss))
                  reply(`*Nomor wa.me/${stnn} telah  di tambahkan jadi Member Vip*`)
                  await dmkrg(sender) 
				  break
                
		            case 'vipdell':  // ===《 pino_dev  》===\\
                    if (!isOwner && !isSrOw) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `hmmm`)
                    let dlvip = body.slice(10)
                    Ss.splice(`${dlvip}@s.whatsapp.net`,1)
                    fs.writeFileSync('./database/user/Vip.json', JSON.stringify(Ss))
                    reply(`Success Menghapus ${dlvip} dari member vip`)
                    await dmkrg(sender) 
					break
					
					case 'addbadword': // ===《 pino_dev  》===\\
                    if (!isOwner && !isSrOw) return reply(ind.ownerb())
                    if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    await dmkrg(sender) 
					break
					
                    case 'delbadword': // ===《 pino_dev  》===\\  
                    if (!isOwner && !isSrOw) return reply(ind.ownerb())
                    if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    await dmkrg(sender) 
					break 
					
					case 'ban': // ===《 pino_dev  》===\\
                	if (!isOwner && !isSrOw) return reply(ind.ownerb())
            	    bnnd = body.slice(6)
        	        ban.push(`${bnnd}@s.whatsapp.net`)
      	          fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
          	      reply(`Nomor wa.me/${bnnd} telah dibanned !`)
         	       await dmkrg(sender) 
					break
					
										case 'online':
            if (!isOwner && !isSrOw) return reply(ind.ownerb())
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			  if (!isOwner && !isSrOw) return reply(ind.ownerb())
			  offline = true
				reply('Status : OFFLINE')
				break
		        case 'unban': // ===《 pino_dev  》===\\
				if (!isOwner && !isSrOw) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				await dmkrg(sender) 
				break
					
				case 'block': // ===《 pino_dev  》===\\
				srart.updatePresence(from, Presence.composing) 
				srart.chatRead (from)
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner && !isSrOw) return reply(ind.ownerb())
                srart.blockUser (`${body.slice(7)}@c.us`, "add")
                srart.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
                await dmkrg(sender) 
				break
				
				    case 'bc': // ===《 pino_dev  》===\\ 
					if (!isOwner && !isSrOw) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await srart.chats.all()
					Bcc = body.slice(4)
					if (isMedia && !sr.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sr
						buff = await srart.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							srart.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					    } else {
						for (let _ of anu) {
							sendMess(_.jid, `
*「Broadcast All Chat」*     

*${Bcc}*     


          _*NAHOYA-BOT*_  
`)
						}
						reply('*Suksess broadcast* ')
						}
						await dmkrg(sender) 
						break
				
					case 'clearall': // ===《 pino_dev  》===\\
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					anu = await srart.chats.all()
					srart.setMaxListeners(25)
					for (let _ of anu) {
						srart.deleteChat(_.jid)
					}
					reply(ind.clears())
					await dmkrg(sender) 
					break

					case 'readall': // ===《 pino_dev  》===\\
       	         if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
					var chats = await srart.chats.all()
                    chats.map( async ({ jid }) => {
                          await srart.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil melihat ${chats.length} chats !\`\`\``
					await srart.sendMessage(from, teks, MessageType.text, {quoted : freply})
					console.log(chats.length)
					break
					
					case 'clone': // ===《 pino_dev  》===\\
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner && !isSrOw) return reply(ind.ownerg()) 
				if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
				if (sr.message.extendedTextMessage === undefined || sr.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
				mentioned = sr.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await srart.getProfilePicture(id)
				buffer = await getBuffer(pp)
				srart.updateProfilePicture(boTNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(ind.stikga())
				}
				await dmkrg(sender) 
				break
					
					case 'event': // ===《 pino_dev  》===\\
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner && !isSrOw) return reply(ind.ownerb())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					await dmkrg(sender) 
					break
					
					case 'addvn': // ===《 pino_dev  》===\\
               if (!isOwner && !isSrOw) return reply(ind.ownerb())
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await srart.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./data/nyolongvn/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./data/nyolongvn/audio.json', JSON.stringify(audionye))
				srart.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')} }} }) 
				await dmkrg(sender) 
				break
				
				case 'getvn': // ===《 pino_dev  》===\\
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./data/nyolongvn/audio/${namastc}.mp3`)
				srart.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')} }}, ptt: true })
				await dmkrg(sender) 
				break
					
////////====《GRUP MENU》=====\\\\\\\\\
					
					case 'grup': // ===《 pino_dev  》===\\
		        case 'group': // ===《 pino_dev  》===\\
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
                srart.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`*BERHASIL MENUTUP GROUP*`)
				srart.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
					
					case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await srart.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			 srart.sendMessage(from, yeh, text, {quoted: fkontak})
				
				await dmkrg(sender) 
break
				 case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(ind.groupo())
         if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                   if (!isBotGroupAdmins) return reply(ind.badmin())
          json = ['action', 'inviteReset', from]
         srart.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
		      await dmkrg(sender)
		      break
					
					case 'tagall': // ===《 pino_dev  》===\\
			    if (isBanned) return reply('😴')    
			     if (!isRegistered) return reply(ind.noregis())
	   					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname}* ✪══`+ teks +'╚═══〘 NAHOYA-BOT*〙═══', members_id, true)
					break
		
		case 'gt':
                    if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sr
                        filePath = await srart.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await srart.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted : freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        srart.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
                    case 'vt':
                    if ((isMedia && sr.message.videoMessage || !isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sr
                        filePath = await srart.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await srart.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted : freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        srart.sendMessage(from, ini_buffer, video, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag video yang sudah dikirim`)
                    }
                    break
                    
                   case 'st':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await srart.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await srart.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme, quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        srart.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
	
		case 'hidetag': // ===《 pino_dev  》===\\
		if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                var value = body.slice(9)
                var group = await srart.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted : freply
                }
                srart.sendMessage(from, options, text, {quoted : freply})
               await dmkrg(sender) 
                break
	
				case 'setname':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins && !isOwner) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				srart.groupUpdateSubject(from, `${body.slice(9)}`)
				srart.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: sr})
				await diamondkrg(sender) 
break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                srart.groupUpdateDescription(from, `${body.slice(9)}`)
                srart.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: sr})
                await dmkrg(sender) 
break
                case 'demote':
                if (!isGroup) return reply(ind.groupo())
             if (!isOwner && !isGroupAdmins ) return reply('Dih')
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (sr.message.extendedTextMessage === undefined || sr.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                mentioned = sr.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                srart.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                srart.groupDemoteAdmin(from, mentioned)
                }
                await dmkrg(sender) 
break
			    case 'promote':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner && !isGroupAdmins ) return reply('Dih')
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (sr.message.extendedTextMessage === undefined || sr.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
                mentioned = sr.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                srart.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
                srart.groupMakeAdmin(from, mentioned)
                }
                await dmkrg(sender) 
break
                     
case 'setppgc': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins && !isOwner) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await srart.downloadAndSaveMediaMessage(sr)
                         await srart.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break						
					
                case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins && !isOwner) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode 62 kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						srart.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Njir, Gagal menambahkan target, mungkin karena di private🤔')
					}
					await dmkrg(sender) 
break
                
                
		        case 'kick':
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner && !isSrOw) return reply(ind.ownerb())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (sr.message.extendedTextMessage === undefined || sr.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻??𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻??𝗮𝗻𝗴!')
                mentioned = sr.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Asek jatah kick, otw kick* 🤭 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                srart.groupRemove(from, mentioned)
                } else {
                mentions(`*Asek jatah kick, otw kick* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
                srart.groupRemove(from, mentioned)
                }
                await dmkrg(sender) 
break
                




					
					
					
					
////===========《 LIST MENU 》===========\\\\\\\\\


case 'groupinfo': // ===《 pino_dev  》===\\     
case 'grupinfo': // ===《 pino_dev  》===\\
case 'gcinfo': // ===《 pino_dev  》===\\       
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
             infosr = `
__________________________________

*WELCOME       	=   ${srart1}*
*ANTI BUCIN  	 =  ${srart2}*
*ANTI VIDEO     	=  ${srart3}*
*MODE SIMI      	=  ${srart4}*
*ANTI LINK        	=  ${srart5}*
*NOBADWORD 	=  ${srart6}*
_____________________________________
`
                srart.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await srart.getProfilePicture(from) // leave empty to get your own
			    buffergbl = await getBuffer(ppUrl)
		        srart.sendMessage(from, buffergbl, image, {quoted : freply, caption: `\n ${infosr}\n\n➣ *NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ DESK*\n${groupDesc}`})
                break


case 'listgrup': // ===《 pino_dev  》===\\
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					srart.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group NAHOYA-BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					srart.sendMessage(from, teks.trim(), extendedText, {quoted : freply})
					break

case 'listblok': // ===《 pino_dev  》===\\
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					srart.sendMessage(from, teks.trim(), extendedText, {quoted : freply, contextInfo: {"mentionedJid": blocked}})
					break

case 'listonline': // ===《 pino_dev  》===\\
if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                if (!isOwner && !isSrOw) return reply(ind.ownerb())
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(srart.chats.get(ido).presences), srart.user.jid]
                srart.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted : freply,
                    contextInfo: { mentionedJid: online }
                })
                await dmkrg(sender) 
                break
                
                case 'listvip': // ===《 pino_dev  》===\\
               if (!isOwner && !isSrOw) return reply(ind.ownerb())
               if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				srart.updatePresence(from, Presence.composing) 
				teks = 'Daftar Member Vip :\n\n'
				for (let Vip of Ss) {
					teks += ` ➢  @${Vip.split('@')[0]}  🎗️\n`
					}
					teks += `\n*Total* = ${Ss.length}`
				srart.sendMessage(from, teks.trim(), extendedText, {quoted : freply, contextInfo: {"mentionedJid": Ss}})
				break
               
               case 'listban': // ===《 pino_dev  》===\\
               if (!isOwner && !isSrOw) return reply(ind.ownerb())
               if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                teks = '*List Ban:*\n\n'
                for (let ggg of ban) {
                    teks += `- ${ggg}\n`
                }
                teks += `\n*Total : ${ban.length}*`
                srart.sendMessage(from, teks.trim(), extendedText, { quoted : freply, contextInfo: { "mentionedJid": ban } })
                await dmkrg(sender) 
                break
               
               case 'listadmin': // ===《 pino_dev  》===\\
                if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                teks = `*List Admin*\n\n\n*Nama Grup ( ${groupMetadata.subject} )*\n*Jumlah Admin* = ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[ ${no.toString()} ] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                await dmkrg(sender) 
				break			
           
           case 'listvn': // ===《 pino_dev  》===\\
			case 'vnlist': // ===《 pino_dev  》===\\
			if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `? ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				srart.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				await dmkrg(sender) 
				break
           
              case 'listsurah': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
					break

//////////《TOLS MENU》 /////////


case 's': // ===《 pino_dev  》===\\
                 case 'stiker': // ===《 pino_dev  》===\\
                case 'sticker': // ===《 pino_dev  》===\\
                  if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                    if (type === 'imageMessage' || isQuotedImage){
                    var pack = `NAHOYA-BOT`
                    var author = ` ${pushname}`
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sr
                    const dlfile = await srart.downloadMediaMessage(getbuff)
                    reply('wait')
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    srart.sendMessage(from, imageBuffer, MessageType.sticker, {quoted : freply})
                    } else {
                    reply('Format Salah!')
                    }
                await dmkrg(sender) 
                await dmkrg(sender) 
                    break
                   
                 
                 case 'semoji':  
			     if (!isRegistered) return reply(ind.noregis())
				 if (isDiamond(sender)) return reply(ind.diamondend(pusname))
            	 if (isBanned) return reply(ind.baned())
                  if (args.length < 1) return reply(`emojinya mana?/ncontoh : ${prefix + command} ðŸ˜­`)
                
                emoji = args[0]
                try {
                emoji = encodeURI(emoji[0])
                } catch {
                emoji = encodeURI(emoji)
                }
                ini_url = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${lolhum}`) 
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolhum}&img=${ini_url.result.emoji.whatsapp}&package=${namabot}&author=${namaowner}`)
                srart.sendMessage(from, ini_buffer, sticker, { quoted: fkontak }) 
                    await dmkrg(sender) 
break        
                 
                 
                   case 'swm': // ===《 pino_dev  》===\\
				case 'stickerwm': // ===《 pino_dev  》===\\
				case 'stcwm': // ===《 pino_dev  》===\\
				     if (!isVip && !isOwner && !isSrOw) return reply('*FITUR INI HANYA UNTUK MEMBER VIP*')
				if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
             if (isBanned) return reply(ind.baned())
		               if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo : sr
                    const dlfile = await srart.downloadMediaMessage(getbuff)
                    reply('Tummmgu om...')
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    srart.sendMessage(from, imageBuffer, MessageType.sticker, {quoted : freply})
                    } else {
                    reply('Format Salah!')
                    }
                    await dmkrg(sender) 
				    await dmkrg(sender) 
                    await dmkrg(sender) 
                    break
                   
                   case 'toimg': // ===《 pino_dev  》===\\
				if (isDiamond(sender)) return reply(diamondend(pushname))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						srart.sendMessage(from, buffer, image, {quoted : freply, caption: (srart_24)})
						fs.unlinkSync(ran)
					})
					await dmkrg(sender) 
					await dmkrg(sender) 
break
                   
                   case 'bass': // ===《 pino_dev  》===\\                 
					encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						srart.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : freply,duration:999999999999})
						fs.unlinkSync(ran)
					})
				await dmkrg(sender) 
break

                  case 'slowmo': // ===《 pino_dev  》===\\
				encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await srart.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				srart.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted : freply,duration:999999999999})
				fs.unlinkSync(ran)
				})
				await dmkrg(sender) 
break

                   case 'tupai': // ===《 pino_dev  》===\\
					encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						srart.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : freply})
						fs.unlinkSync(ran)
					})
				await dmkrg(sender) 
break
                   
                   case 'fast1': // ===《 pino_dev  》===\\
					encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						srart.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : freply})
						fs.unlinkSync(ran)
					})
				await dmkrg(sender) 
break

case 'fast2': // ===《 pino_dev  》===\\
					encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=2.5" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						srart.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : freply})
						fs.unlinkSync(ran)
					})
				await dmkrg(sender) 
break
                   
                       case 'tomp3': // ===《 pino_dev  》===\\
					encmedia = JSON.parse(JSON.stringify(sr).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await srart.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0,1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						srart.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : freply})
						fs.unlinkSync(ran)
					    })
				       await dmkrg(sender) 
                        break
                  
                   case 'kontakku': // ===《 pino_dev  》===\\
if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} NAHOYA-BOT*`)
var gop = body.slice(10)
members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
vcard99 = `BEGIN:VCARD\n`
    + `VERSION:3.0\n`
    + `FN:${gop}\n`
    + `ORG:PINO DEV\n`
    + `TEL;type=CELL;type=VOICE;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n`
    + `END:VCARD`
    FK = `${gop}`
    srart.sendMessage(from, {displayName: FK, vcard: vcard99}, contact, { contextInfo: {"mentionedJid": members_ids}})
    break
    


				 case 'kontak': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
             if (args[0].startsWith('62')) return reply('Gunakan kode + kak')
             if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
              if (args.length == 0) return reply(`Usage: ${prefix + command} nomer|name\nContoh: ${prefix + command} +6285869484139|Nama`)
				var gh = body.slice(9)
                var tyu = gh.split("|")[0];
                var ajc = gh.split("|")[1];
                   
                    members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
                    vcard3 = `BEGIN:VCARD\n`
                     + `VERSION:3.0\n`
                     + `FN:${ajc}\n`
    				+ `TEL;type=CELL;type=VOICE;waid=${tyu}:+${tyu}\n`
                     + 'END:VCARD'.trim()
                     srart.sendMessage(from, {displayName: ajc, vcard: vcard3}, contact, { contextInfo: {"mentionedJid": members_ids}})
                     break
                  
                  case 'kt': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
				var gh = body.slice(10)
                var tyu = gh.split("|")[0];
                var ajc = gh.split("|")[1];
                   
                    members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
                    vcard3 = `BEGIN:VCARD\n`
                     + `VERSION:3.0\n`
                     + `FN:PINO DEV\n`
    				+ `TEL;type=CELL;type=VOICE;waid=994404819287${tyu}:+994404819287${tyu}\n`
                     + 'END:VCARD'.trim()
                     srart.sendMessage(from, {displayName: ajc, vcard: vcard3}, contact, { contextInfo: {"mentionedJid": members_ids}})
                     break
                  
                  
                   case 'nmrku': // ===《 pino_dev  》===\\
					if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
					reply(`${sender.split("@")[0]}`)
				
break

case 'wame': // ===《 pino_dev  》===\\
					if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
					reply(`wa.me/${sender.split("@")[0]}`)
				
break
			
					case 'nomortf': // ===《 pino_dev  》===\\
					case 'nmrtf': // ===《 pino_dev  》===\\
					if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
					reply(`${prefix}transfer ${sender.split("@")[0]} | `)
				
break
                   
                  case 'tagme': // ===《 pino_dev  》===\\
                  if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                   const tagme = {
                       text: `@${sender.split("@")[0]}`,
                       contextInfo: {
                       mentionedJid: [sender]
                       }
                       }
                 srart.sendMessage(from, tagme, text, { quoted : freply })
                  await dmkrg(sender) 
                break
                
                				case 'public':
				if (!isOwner && !isSrOw) return reply(ind.ownerb())
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !isSrOw) return reply(ind.ownerb())
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
                  
                  case 'profile': // ===《 pino_dev  》===\\
		 case 'profil': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
    				srart.updatePresence(from, Presence.composing)
    				try {
					ppimg = await srart.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					srart.sendMessage(from, buffer, image, {quoted : freply, caption: profile})
					
					await dmkrg(sender) 
break
                  
                  
                  case 'getbio': // ===《 pino_dev  》===\\
				    if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                var yy = sr.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await srart.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found", { quoted : freply })
                }
				await dmkrg(sender) 
           break	
           
		    case 'getpic': // ===《 pino_dev  》===\\
				    if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
				if (sr.message.extendedTextMessage != undefined){
				mentioned = sr.message.extendedTextMessage.contextInfo.mentionedJid
				try {
				pic = await srart.getProfilePicture(mentioned[0])
				} catch {
				pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
				thumb = await getBuffer(pic)
				srart.sendMessage(from, thumb, MessageType.image, { quoted : freply })
				}
				await dmkrg(sender) 
				await dmkrg(sender) 
		   break
                  
                  case 'ttmp4': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
					reply(ind.wait())
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolhum}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await srart.sendMessage(from, ini_buffer, video, { quoted : freply })
                    break
                case 'ttmp3': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
					reply(ind.wait())
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhum}&url=${ini_link}`)
                    await srart.sendMessage(from, get_audio, audio, {  mimetype: Mimetype.mp4Audio, quoted : freply })
                    break
                  
                  
//××××××××《Rndm stc》××××××××\

     			 case 'bucinstick': // ===《 pino_dev  》===\\
                  case 'gawrgura': // ===《 pino_dev  》===\\
                  case 'patrick': // ===《 pino_dev  》===\\
                  case 'dadu': // ===《 pino_dev  》===\\
                  case 'amongus': // ===《 pino_dev  》===\\
                  case 'anjing': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                   anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolhum}`)
                    srart.sendMessage(from, anu, sticker, { quoted : freply })
                    await dmkrg(sender) 
                    break
 
                    case 'ssweb':  //DappaUhuy
                   if (!isRegistered) return reply( ind.noregis())
				    if (isBanned) return reply('*Maaf kamu sudah terbanned!*')
		           if (args.length < 1) return reply(`url mana broh?\ncontoh : ${prefix + command} https://www.google.com`)
                    reply('*LOADING...*')
                    dppa = args.join(' ')
                    dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/others/${command}?url=${dppa}`)
                    srart.sendMessage(from, dapuhy, image, {quoted : freply})

                    break
                   
                  
                  
                  case 'deteksiwajah': // ===《 pino_dev  》===\\
	if (!isRegistered) return reply( ind.noregis())
	if (isDiamond(sender)) return reply(ind.diamondend(pusname))
	if (isBanned) return reply('😴')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sr
	  reply(ind.wait())
	  owgi = await srart.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
	  hehe = await getBuffer(`http://api.lolhuman.xyz/api/facedetect?apikey=${lolhum}&img=${anu.display_url}`)
	 srart.sendMessage(from, hehe, image, {quoted:sr})
	} else {
	  reply('replay gambar')
	}
	await dmkrg(sender) 
	break
	
	case 'deteksigender': // ===《 pino_dev  》===\\
	if (!isRegistered) return reply( ind.noregis())
	if (isDiamond(sender)) return reply(ind.diamondend(pusname))
	if (isBanned) return reply('😴')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sr
	  reply(ind.wait())
	  owgi = await srart.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
	  hehe = await fetchJson(`http://api.lolhuman.xyz/api/genderdetect?apikey=${lolhum}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 srart.sendMessage(from, gender, text, {quoted:sr})
	} else {
	  reply('replay gambar')
	}
	await dmkrg(sender) 
	break
	
	case 'deteksiumur': // ===《 pino_dev  》===\\
	if (!isRegistered) return reply( ind.noregis())
	if (isDiamond(sender)) return reply(ind.diamondend(pusname))
	if (isBanned) return reply('😴')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sr
	  reply(ind.wait())
	  owgi = await srart.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
	  hehe = await fetchJson(`http://api.lolhuman.xyz/api/agedetect?apikey=${lolhum}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 srart.sendMessage(from, gender, text, {quoted:sr})
	} else {
	  reply('replay gambar')
	}
	await dmkrg(sender) 
	break
               
           
               
///////============《GAME》============\\\\\\\\\\\\
case 'slot': // ===《 pino_dev  》===\\
            if (!isRegistered) return reply( ind.noregis())
	       if (isDiamond(sender)) return reply(ind.diamondend(pusname))
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            srart.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🚗 : 🚜 : 🚗\n${somtoy}   <=====\n?? : 🚜 : 🚗\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🚜 : 🚜 : 🚜   <=====`, text, { quoted : freply })
            await dmkrg(sender) 
break

case 'suit': // ===《 pino_dev  》===\\  
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
			        
                    F = body.slice(6)
                    if (args.length < 1) return reply('[❗] CONTOH??\n*${prefix}${command} batu')
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${xteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    await dmkrg(sender) 
break

case 'udara': // ===《 pino_dev  》===\\
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 20000)
                    break
                    case 'darat': // ===《 pino_dev  》===\\
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 20000)
                    break
                    case 'laut': // ===《 pino_dev  》===\\
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh21}* ]`)
                    }, 20000)
                    break

					case 'taruhan':
				var jmlh = body.slice(9)
				 if (jmlh < 1) return reply(`*masukkan jumlah uang*`)
			    if(isNaN(jmlh)) return reply('masukkan jumlah uang njir')
				if (checkATMuser(sender) < jmlh) return reply(`uang mu tidak mencukupi`)
				const sra = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"]
				const sra1 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"]
				const sr0z = sra[Math.floor(Math.random() * sra.length)]
				const sr1z = sra1[Math.floor(Math.random() * sra1.length)]
				bot =`${sr1z}`
				kmu =`${sr0z}`
				lee = 0*  jmlh
            	jmlh = jmlh - lee
			
		
		const srart24 = `
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
	 *〖 NAHOYA-BOT〗*

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*『  Boot  』    =  〘 ${bot} 〙*
*『 Kamu 』    =  〘 ${kmu} 〙*
    
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
`

srart.sendMessage(from, srart24, text, { quoted : freply })

				
			    if (kmu < bot ){
				srart.sendMessage(from, '*Kalah*', text, { quoted : freply })
				setTimeout( () => {
                    reply(`*-Rp.${jmlh}*`)
                    }, 2000)
				confirmATM(sender, jmlh)
				
				}else if (bot < kmu ){
				srart.sendMessage(from, '*Menang*', text, { quoted : freply })
				setTimeout( () => {
                    reply(`*+Rp.${jmlh}*`)
                    },2000)
				addKoinUser(sender, jmlh)
				}
				break




////////========《 Random member 》========<<<\\\\\\\\

case 'randomvip': // ===《 pino_dev  》===\\
				if (!isOwner && !isSrOw) return reply(`Khusus Owner`)
				 reply('wait........')
				    jds = []
					const lllp = groupMembers
					const loi = lllp[Math.floor(Math.random() * lllp.length)]
					teks = `Pemenangnya Adalahhhhhhh @${loi.jid.split('@')[0]}`
					jds.push(loi.jid)
					mentions(teks, jds, true)
					reply('😁')
break


			   case 'beban': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
				    jds = []
					const jdoo = groupMembers
					const kposs = groupMembers
					const akii = jdoo[Math.floor(Math.random() * jdoo.length)]
					teks = `Nih beban Grup@${akii.jid.split('@')[0]}`
					jds.push(akii.jid)
					mentions(teks, jds, true)
					
					 
break
	
					case 'terganteng': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					
					 
break	
				
               case 'tercantik': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					
					 
break	
			
			case 'terpikun': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const ooo = groupMembers
					const gfdy = groupMembers
					const oiu = gfdy[Math.floor(Math.random() * gfdy.length)]
					teks = `Yang terpikun di grub ini adalah @${oiu.jid.split('@')[0]}`
					jds.push(oiu.jid)
					mentions(teks, jds, true)
					
					 
break	
	
	
	case 'terimut': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const iiio = groupMembers
					const kmng = groupMembers
					const ctoi = kmng[Math.floor(Math.random() * kmng.length)]
					teks = `Yang paling imut di grub ini adalah @${ctoi.jid.split('@')[0]}`
					jds.push(ctoi.jid)
					mentions(teks, jds, true)
					
					 
break	

case 'caridoi': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const ilg = groupMembers
					const iog = groupMembers
					const zoi = iog[Math.floor(Math.random() * iog.length)]
					teks = `Tuh Doi Yang Cocok Buat lu  @${zoi.jid.split('@')[0]}`
					jds.push(zoi.jid)
					mentions(teks, jds, true)
					 
break	



	
	case 'tergoblok': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const igfio = groupMembers
					const pmng = groupMembers
					const poi = pmng[Math.floor(Math.random() * pmng.length)]
					teks = `Yang paling goblok di grub ini adalah @${poi.jid.split('@')[0]}`
					jds.push(poi.jid)
					mentions(teks, jds, true)
					
					 
break	

case 'terpinter': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const iyg = groupMembers
					const kjh = groupMembers
					const koiu = kjh[Math.floor(Math.random() * kjh.length)]
					teks = `Yang paling pinter di grub ini adalah @${koiu.jid.split('@')[0]}`
					jds.push(koiu.jid)
					mentions(teks, jds, true)
					 
break	

case 'goodloking': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const poo = groupMembers
					const oopg = groupMembers
					const joe = oopg[Math.floor(Math.random() * oopg.length)]
					teks = `Yang goodloking di grub ini adalah @${joe.jid.split('@')[0]}`
					jds.push(joe.jid)
					mentions(teks, jds, true)
					
					 
break	

case 'seleb': // ===《 pino_dev  》===\\
				if (!isRegistered) return reply(ind.noregis())
					jds = []
					const iuu = groupMembers
					const ssat = groupMembers
					const piuy = ssat[Math.floor(Math.random() * ssat.length)]
					teks = `Yang Seleb di grub ini adalah @${piuy.jid.split('@')[0]}\nJangan di temenin`
					jds.push(piuy.jid)
					mentions(teks, jds, true)
					
					 
break	


////////========《 MENU CEK 》============\\\\\\\\

                   case 'gantengcek': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('😴')
			        if (args.length < 1) return reply('Masukkan Nama atau tag orang yang ingin di cek')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted : freply })
					
					 
break
					
		            case 'cantikcek': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('😴')
				    if (args.length < 1) return reply('Masukkan Nama atau tag orang yang ingin di cek')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted : freply })
					
					 
break
					
					case 'fuckboycek': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('😴')
			        if (args.length < 1) return reply('Masukkan Nama atau tag orang yang ingin di cek')
					fuckboy = body.slice(1)
					const fuck =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const boy = fuck[Math.floor(Math.random() * fuck.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+fuckboy+'*\n\nJawaban : '+ boy+'%', text, { quoted : freply })
					
					 
break
					
					case 'fuckgirlcek': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('😴')
			        if (args.length < 1) return reply('Masukkan Nama atau tag orang yang ingin di cek')
					fuckgirl = body.slice(1)
					const fock =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const girl = fock[Math.floor(Math.random() * fock.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+fuckgirl+'*\n\nJawaban : '+ girl+'%', text, { quoted : freply })
					
					 
break
			
			       case 'sangecek': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('😴')
			        if (args.length < 1) return reply('Masukkan Nama atau tag orang yang ingin di cek')
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const e = fuck[Math.floor(Math.random() * sang.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ e+'%', text, { quoted : freply })
					
					 
break
			
			       case 'bucincek': // ===《 pino_dev  》===\\
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('😴')
			        if (args.length < 1) return reply('Masukkan Nama atau tag orang yang ingin di cek')
					bucin = body.slice(1)
					const buc =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const iin = buc[Math.floor(Math.random() * buc.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+bucin+'*\n\nJawaban : '+ iin+'%', text, { quoted : freply })
					
					 
break
			
//======================Tanya MENU===================================
case 'bisakah': // ===《 pino_dev  》===\\
					// NAHOYA-BOT 

                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted : freply })
					
					 
break
		            case 'kapankah': // ===《 pino_dev  》===\\
					// NAHOYA-BOT 

                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted : freply })
					
					 
break
		            case 'apakah': // ===《 pino_dev  》===\\
					// NAHOYA-BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted : freply })
					
					 
break
		            case 'bagaimanakah': // ===《 pino_dev  》===\\
					// NAHOYA-BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted : freply })
					
					 
break

case 'watak': // ===《 pino_dev  》===\\
					// NAHOYA-BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted : freply })
					
				         
break
		         case 'hobby': // ===《 pino_dev  》===\\
					// NAHOYA-BOT 
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('😴')
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					srart.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted : freply })
					
					 
break
               
              case 'fitnah':
					if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember&sayang&apa sayang`)
				var gh = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					srart.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
break

case 'join':  
                 	if (!isRegistered) return reply(ind.noregis())
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/blablabalbla`)
                    const bug11 = body.slice(6)
                    if (bug11.length > 300) return srart.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*BOT NYA BLOM JADI MEK*`} } }})
                    var nomor = mek.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    srart.sendMessage(`${isOwner}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE YT PINO MODZ`} } } })                    
                   reply('BOT AKAN SEGERA MASUK...')                     
					break 
              
             
            
           
           
          
          
          
          
          
          
//==== 《MEDIA MENU》======\\


case 'ppcouple': // ===《 pino_dev  》===\\
				     if (!isVip && !isOwner && !isSrOw) return reply('*FITUR INI HANYA UNTUK MEMBER VIP*')
				 if (!isRegistered) return reply(ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply('wait')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${LeysKey}`) 
				cowo = await getBuffer(anu.result.male)
				srart.sendMessage(from, cowo, image, { quoted : freply, caption: (srart_24)})
				cewe = await getBuffer(anu.result.female)
				srart.sendMessage(from, cewe, image, { quoted : freply, caption: (srart_24)})
				await dmkrg(sender) 
				break

case 'pinterest': // ===《 pino_dev  》===\\
                 if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
					srart.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=gambar=${body.slice(11)}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nisr =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nisr)
					srart.sendMessage(from, pok, image, { quoted : freply, caption: (srart_24)})
					
					await dmkrg(sender) 
					break 

					  case 'pinterest': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhum}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24)})
                    await dmkrg(sender) 
					break

				case 'tts': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (args.length < 1) return srart.sendMessage(from, 'Kode bahasanya mana kak | contoh : ${prefix}tts id ah yamate kudasai', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_? ? ????? ??_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/logo.jpg')} } }, caption: 'Nih hasilnya kak...'})
					const gtts = require('./data/lib/gtts')(args[0])
					if (args.length < 2) return srart.sendMessage(from, 'Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_? ? ????? ??_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							srart.sendMessage(from, buff, audio, {quoted : freply, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					await dmkrg(sender) 
					break

					case 'igstalk': // ===《 pino_dev  》===\\
					if (!isRegistered) return reply(ind.noregis())
					reply('Bentar Lagi Nyari ig nya')
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
					get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalkig/${body.slice(9)}?apikey=${lolhum}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Fullname : ${get_result.fullname}\n`
					txt +=`Name @${get_result.username}\n`
					txt += `Jumlah Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					srart.sendMessage(from, buffer, image, {quoted : freply, caption: txt})
					break
					await dmkrg(sender) 
					break

                case 'tiktokstalk':
                case 'ttstalk':
				     if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
		    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${body.slice(9)}?apikey=${lolhum}`, {method: 'get'})
		    get_result = get_result.result
		    txt = `Link : ${get_result.username}\n`
		    txt += `Bio : ${get_result.bio}\n`
		    txt += `Followers : ${get_result.followers}\n`
		    txt += `Following : ${get_result.followings}\n`
		    txt += `Likes : ${get_result.likes}\n`
		    txt += `Vidio : ${get_result.video}\n`
		    buffer = await getBuffer(get_result.user_picture)
		    srart.sendMessage(from, buffer, image, {quoted: fkontak, caption: txt})
		    break
		
		
case 'covidindo': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    await dmkrg(sender) 
					break

case 'covidglobal': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    await dmkrg(sender) 
break

case 'kodepos': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolhum}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    await dmkrg(sender) 
break

case 'google': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolhum}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `• Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break

case 'translate': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhum}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    await dmkrg(sender) 
break
                case 'brainly': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${lolhum}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break
                   
                case 'lirik': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolhum}&query=${query}`)
                    reply(get_result.result)
                    await dmkrg(sender) 
break
                        case 'cuaca': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    srart.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted : freply })
                    reply(ini_txt)
                    await dmkrg(sender) 
break

case 'jadwalbola': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break
                case 'indbeasiswa': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break
                case 'hoax': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break

case 'infogempa': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolhum}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    srart.sendMessage(from, get_buffer, image, { quoted : freply, caption: ini_txt })
                    await dmkrg(sender) 
break

   case 'playstore': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolhum}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break
                case 'shopee': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolhum}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    await dmkrg(sender) 
break

case 'bitly': // ===《 pino_dev  》===\\
				     if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				srart.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${tobz}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
			    await dmkrg(sender) 
				break

case 'nangis': // ===《 pino_dev  》===\\
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${tobz}`, { method: 'get' })
                reply('SABAR NGAB')

                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    srart.sendMessage(from, buffer, sticker, { quoted : freply })
                    fs.unlinkSync(rano)
                })
                await dmkrg(sender)
                break
            case 'cium': // ===《 pino_dev  》===\\
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${tobz}`, { method: 'get' })
                reply('Mwahhh')
                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    srart.sendMessage(from, buffer, sticker, { quoted : freply })
                    fs.unlinkSync(rano)
                })
                await dmkrg(sender)
                break
            case 'peluk': // ===《 pino_dev  》===\\
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${tobz}`, { method: 'get' })
                reply('Peyukkkk')

                exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    srart.sendMessage(from, buffer, sticker, { quoted : freply })
                    fs.unlinkSync(rano)
                })
                await dmkrg(sender)
                break

case 'romadhon': // ===《 pino_dev  》===\\
                   if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2021-04-2").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Ramadhan:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                
                case 'iduladha': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2021-07-19").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Iduladha:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                
                case 'tahunbaru': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2022-01-01").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Tahun Baru:*\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break


    case 'asupan': // ===《 pino_dev  》===\\
                srart.updatePresence(from, Presence.composing)
               if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                 
                data = fs.readFileSync('./data/src/asupan.js');
                jsonData = JSON.parse(data);
                randIndex = Math.floor(Math.random() * jsonData.length);
                randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                srart.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted : freply, caption: 'Nih Tod' })
                break
                

///////=====《Text Menu》======\\

 case 'faktaunik': // ===《 pino_dev  》===\\
                case 'katabijak': // ===《 pino_dev  》===\\
                case 'pantun': // ===《 pino_dev  》===\\
                case 'bucin': // ===《 pino_dev  》===\\
                 case 'katabucin': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhum}`)
                    reply(get_result.result)
                    await dmkrg(sender) 
break

case 'dilan': // ===《 pino_dev  》===\\
                case 'islami': // ===《 pino_dev  》===\\
                
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/${command}?apikey=${lolhum}`)
                    reply(quotedilan.result)
                    await dmkrg(sender) 
break

case 'quotes': // ===《 pino_dev  》===\\
				       if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply( ind.noregis())
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolhum}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n by :${author}*`)
                    await dmkrg(sender) 
break

/////////《¡》¡》》》》》》

               case 'chiisaihentai': // ===《 pino_dev  》===\\
                case 'trap': // ===《 pino_dev  》===\\
                case 'blowjob': // ===《 pino_dev  》===\\
                case 'yaoi': // ===《 pino_dev  》===\\
                case 'ecchi': // ===《 pino_dev  》===\\
                case 'hentai': // ===《 pino_dev  》===\\
                case 'ahegao': // ===《 pino_dev  》===\\
                case 'hololewd': // ===《 pino_dev  》===\\
                case 'sideoppai': // ===《 pino_dev  》===\\
                case 'animefeets': // ===《 pino_dev  》===\\
                case 'animebooty': // ===《 pino_dev  》===\\
                case 'animethighss': // ===《 pino_dev  》===\\
                case 'hentaiparadise': // ===《 pino_dev  》===\\
                case 'animearmpits': // ===《 pino_dev  》===\\
                case 'hentaifemdom': // ===《 pino_dev  》===\\
                case 'lewdanimegirls': // ===《 pino_dev  》===\\
                case 'biganimetiddies': // ===《 pino_dev  》===\\
                case 'animebellybutton': // ===《 pino_dev  》===\\
                case 'hentai4everyone': // ===《 pino_dev  》===\\
                  if (!isVip && !isOwner && !isSrOw) return reply('*FITUR INI HANYA UNTUK MEMBER VIP*')
                gga = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhum}`, {method: 'get'})
                 srart.sendMessage(from, gga, image, { quoted : freply })
                     
break

///=======《MAKER MENU》======\\\

				

case 'ktpmaker':
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply('*Sabar Coooook Sinyal Gw Kek Taek*')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|NAHOYA BOT|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhum}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    srart.sendMessage(from, ini_buffer, image, {quoted: fkontak, caption: '*Nih Njing Ga Usah Bilang Makasih.*'})
                    await dmkrg(sender) 
break
					
                    case 'pencil': // ===《 pino_dev  》===\\
                    if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sr
                        filePath = await srart.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=${lolhum}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await srart.sendMessage(from, ini_buff, image, { quoted : freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}pencil atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    
                    case 'fisheye':
case 'skullmask':
case 'alien':
case 'tosmile':
case 'cartoon':
case 'invert':
case 'pixelate':
case 'flip':
case 'grayscale':
case 'roundimage':
case 'pencil':
case 'wasted':
case 'triggered':
case 'pencil':
case 'fisheye':
case 'skullmask':
case 'tosmile':
case 'pixelate':
case 'deepfry':
if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
var imgbb = require('imgbb-uploader')
if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sr
damppa = await srart.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb("9e30873557f06f55ddbb42f758173c79", damppa)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lolhum}&img=${dpaa.display_url}`)
srart.sendMessage(from, uhyy, image, {quoted : freply})
} else {
reply('Reply Imagenya!!')
}
await dmkrg(sender) 
await dmkrg(sender) 
await dmkrg(sender) 
break
                    
                    
                    
case 'gravity': 
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} ZX-BOT`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/cartoongravity?apikey=${lolhum}&text=${txt}`)
                    srart.sendMessage(from, buffer, image, { quoted : freply, caption: (srart_24), caption: (srart_24)})
                    await dmkrg(sender) 
					break

                case 'blackpink': // ===《 pino_dev  》===\\
                case 'neon': // ===《 pino_dev  》===\\
                case 'greenneon': // ===《 pino_dev  》===\\
                case 'advanceglow': // ===《 pino_dev  》===\\
                case 'futureneon': // ===《 pino_dev  》===\\
                case 'sandwriting': // ===《 pino_dev  》===\\
                case 'sandsummer': // ===《 pino_dev  》===\\
                case 'sandengraved': // ===《 pino_dev  》===\\
                case 'metaldark': // ===《 pino_dev  》===\\
                case 'neonlight': // ===《 pino_dev  》===\\
                case 'holographic': // ===《 pino_dev  》===\\
                case 'text1917': // ===《 pino_dev  》===\\
                case 'minion': // ===《 pino_dev  》===\\
                case 'deluxesilver': // ===《 pino_dev  》===\\
                case 'newyearcard': // ===《 pino_dev  》===\\
                case 'bloodfrosted': // ===《 pino_dev  》===\\
                case 'halloween': // ===《 pino_dev  》===\\
                case 'jokerlogo': // ===《 pino_dev  》===\\
                case 'fireworksparkle': // ===《 pino_dev  》===\\
                case 'natureleaves': // ===《 pino_dev  》===\\
                case 'bokeh': // ===《 pino_dev  》===\\
                case 'toxic': // ===《 pino_dev  》===\\
                case 'strawberry': // ===《 pino_dev  》===\\
                case 'box3d': // ===《 pino_dev  》===\\
                case 'roadwarning': // ===《 pino_dev  》===\\
                case 'breakwall': // ===《 pino_dev  》===\\
                case 'icecold': // ===《 pino_dev  》===\\
                case 'luxury': // ===《 pino_dev  》===\\
                case 'cloud': // ===《 pino_dev  》===\\
                case 'summersand': // ===《 pino_dev  》===\\
                case 'horrorblood': // ===《 pino_dev  》===\\
                case 'thunder': // ===《 pino_dev  》===\\
                try {
        	  if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhum}&text=${ini_txt}`)
                  srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24) })
              await dmkrg(sender) 
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break

              
                case 'pornhub': // ===《 pino_dev  》===\\
                case 'avenger': // ===《 pino_dev  》===\\
                case 'space': // ===《 pino_dev  》===\\
                case 'ninjalogo': // ===《 pino_dev  》===\\
                case 'marvelstudio': // ===《 pino_dev  》===\\
                case 'lionlogo': // ===《 pino_dev  》===\\
                case 'wolflogo': // ===《 pino_dev  》===\\
                case 'steel3d': // ===《 pino_dev  》===\\
                case 'wallgravity': // ===《 pino_dev  》===\\
                try {
                if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(ind.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhum}&text1=${dap1}&text2=${dap2}`)
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                await dmkrg(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
                /////^^^^^
                
                case 'shadow': // ===《 pino_dev  》===\\
                case 'romance': // ===《 pino_dev  》===\\
                case 'smoke': // ===《 pino_dev  》===\\
                case 'burnpaper': // ===《 pino_dev  》===\\
                case 'lovemessage': // ===《 pino_dev  》===\\
                case 'undergrass': // ===《 pino_dev  》===\\
                case 'coffe': // ===《 pino_dev  》===\\
                case 'cup': // ===《 pino_dev  》===\\
                case 'cup1': // ===《 pino_dev  》===\\
                case 'woodenboard': // ===《 pino_dev  》===\\
                case 'coffe': // ===《 pino_dev  》===\\
                case 'woodheart': // ===《 pino_dev  》===\\
                case 'summer3d': // ===《 pino_dev  》===\\
                case 'love': // ===《 pino_dev  》===\\
                case 'wolfmetal': // ===《 pino_dev  》===\\
                case 'nature3d': // ===《 pino_dev  》===\\
                case 'underwater': // ===《 pino_dev  》===\\
                case 'golderrose': // ===《 pino_dev  》===\\
                case 'summernature': // ===《 pino_dev  》===\\
                case 'letterleaves': // ===《 pino_dev  》===\\
                case 'glowingneon': // ===《 pino_dev  》===\\
                case 'fallleaves': // ===《 pino_dev  》===\\
                case 'flamming': // ===《 pino_dev  》===\\
                case 'harrypotter': // ===《 pino_dev  》===\\
                case 'carvedwood': // ===《 pino_dev  》===\\
                try {
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhum}&text=${ini_txt}`)
                  srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24) })
              await dmkrg(sender) 
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
                
                case 'tiktok': // ===《 pino_dev  》===\\
                case 'arcade8bit': // ===《 pino_dev  》===\\
                case 'battlefield4': // ===《 pino_dev  》===\\
                case 'pubg': // ===《 pino_dev  》===\\
                case 'bannerlol': // ===《 pino_dev  》===\\
                try {
             if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(ind.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolhum}&text1=${dap1}&text2=${dap2}`)
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                await dmkrg(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
               ////
                case 'wetglass': // ===《 pino_dev  》===\\
                case 'multicolor3d': // ===《 pino_dev  》===\\
                case 'watercolor': // ===《 pino_dev  》===\\
                case 'luxurygold': // ===《 pino_dev  》===\\
                case 'galaxywallpaper': // ===《 pino_dev  》===\\
                case 'lighttext': // ===《 pino_dev  》===\\
                case 'beautifulflower': // ===《 pino_dev  》===\\
                case 'puppycute': // ===《 pino_dev  》===\\
                case 'royaltext': // ===《 pino_dev  》===\\
                case 'heartshaped': // ===《 pino_dev  》===\\
                case 'birthdaycake': // ===《 pino_dev  》===\\
                case 'galaxystyle': // ===《 pino_dev  》===\\
                case 'hologram3d': // ===《 pino_dev  》===\\
                case 'greenneon': // ===《 pino_dev  》===\\
                case 'glossychrome': // ===《 pino_dev  》===\\
                case 'greenbush': // ===《 pino_dev  》===\\
                case 'metallogo': // ===《 pino_dev  》===\\
                case 'noeltext': // ===《 pino_dev  》===\\
                case 'glittergold': // ===《 pino_dev  》===\\
                case 'textcake': // ===《 pino_dev  》===\\
                case 'starsnight': // ===《 pino_dev  》===\\
                case 'wooden3d': // ===《 pino_dev  》===\\
                case 'textbyname': // ===《 pino_dev  》===\\
                case 'writegalacy': // ===《 pino_dev  》===\\
                case 'galaxybat': // ===《 pino_dev  》===\\
                case 'snow3d': // ===《 pino_dev  》===\\
                case 'birthdayday': // ===《 pino_dev  》===\\
                case 'goldplaybutton': // ===《 pino_dev  》===\\
                case 'silverplaybutton': // ===《 pino_dev  》===\\
                case 'freefire': // ===《 pino_dev  》===\\
                case 'cartoongravity': // ===《 pino_dev  》===\\
                case 'anonymhacker': // ===《 pino_dev  》===\\
                try {
        if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhum}&text=${ini_txt}`)
                  srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24) })
              await dmkrg(sender) 
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break

                
                case 'juventusshirt': // ===《 pino_dev  》===\\
                case 'realvintage': // ===《 pino_dev  》===\\
                case 'codwarzone': // ===《 pino_dev  》===\\ 
                try {
                if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(ind.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/${command}?apikey=${lolhum}&text1=${dap1}&text2=${dap2}`)
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                await dmkrg(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
                
               
                
                case 'valorantbanner': // ===《 pino_dev  》===\\
                try {
             if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|mengkeren|cuy`)
                ct = args.join(' ')
                reply(ind.wait())
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                dap3 = ct.split('|')[2]
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=${lolhum}&text1=${dap1}&text2=${dap2}&text3=${dap3}`)
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                await dmkrg(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
                
                case 'hartatahta': // ===《 pino_dev  》===\\
                case 'hartacustom': // ===《 pino_dev  》===\\
                try {
 if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolhum}&text=${ini_txt}`)
                  srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24) })
              await dmkrg(sender) 
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
               
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolhum}&text=${ini_txt}`)
                    srart.sendMessage(from, ini_buffer, sticker, { quoted : freply, caption: (srart_24) })
                    await dmkrg(sender) 
break

case 'attp':
         if (!isRegistered) return reply(ind.noregis())
if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				srart.sendMessage(from, attp2, sticker, {quoted : freply })
				await dmkrg(sender) 
break
	srart.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_? ? ????? ??_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')}}}})

await dmkrg(sender) 
break
                
               
              
                case 'gtapassed': // ===《 pino_dev  》===\\
                try {
             if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|respect`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(ind.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/gtapassed?apikey=${lolhum}&text1=${dap1}&text2=${dap2}`)
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                await dmkrg(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
                
                
                case 'ohno': // ===《 pino_dev  》===\\
                case 'kannagen': // ===《 pino_dev  》===\\
                
                try {
                if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                ini_txt = args.join(" ")
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/creator/${command}?apikey=${lolhum}&text=${ini_txt}`) 
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
case 'quotemaker': // ===《 pino_dev  》===\\
                try {
                if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker?apikey=${lolhum}&text=${ini_txt}`)
                  srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24) })
              await dmkrg(sender) 
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                
                
                case 'quotemaker2': // ===《 pino_dev  》===\\
                try {
          if (!isRegistered) return reply(ind.noregis())
					if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				    if (isBanned) return reply('😴')
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                ct = args.join(' ')
                dap1 = ct.split('|')[0]
                dap2 = ct.split('|')[1]
                reply(ind.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker2?apikey=${lolhum}&text=${dap1}&author=${dap2}`)
                srart.sendMessage(from, dapuhy, image, {quoted : freply, caption: (srart_24)})
                await dmkrg(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error')
				}
                await dmkrg(sender) 
await dmkrg(sender) 
break
                

case 'wolfmetal':
			case 'underwebmatrix':
			case 'multimaterial':
			case 'underwaterocean':
			case 'smoke':
			case 'typography':
			case 'wolflogogalaxy':
			case 'neonlight':
			case 'google':
			case 'rainbowshine':
			case 'camuflage':
			case '3dglowing':
			case 'vintage':
			case 'candy':
			case 'gradientavatar':
			case 'glowingrainbow':
			case 'stars':
			case 'fur':
			case 'flaming':
			case 'crispchrome':
			case 'kueultah':
			case 'rainbowbg':
			case 'metalicglow':
			case 'striking3d':
			case 'watermelon':
			case 'harrypotter':
			case 'luxuryroyal':
			case 'gerbang':
			case 'woodblock':
			case 'smoketypography':
			case 'sweetcandy':
			case 'silk':
			case 'bevel':
			case 'partyneon':
			case 'greenleaves':
			case 'modernmetal':
			case 'lolcover':
			case 'warface':
			case 'pentakill':
			case 'aov':
			case 'avatarlol':
			case 'pokemon':
			case 'lolavatarglitch':
			case 'shinebannerlol':
			case 'mastery7lol':
			case 'dota2avatar':
			case 'lol':
			case 'crossfire':
			case 'glowpentakill':
			case 'warfacecover':
			case 'coveroverwatch':
			case 'lolcover2':
			case 'scgo':
			case 'lolpentakill':
			case 'cloudtext':
					 if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} NAHOYA-BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${ini_txt}&APIKEY=${xteam}`)
                  srart.sendMessage(from, ini_buffer, image, { quoted : freply, caption: (srart_24) })
              await dmkrg(sender) 
                await dmkrg(sender) 
await dmkrg(sender) 
break


case 'videomaker': // ===《 pino_dev  》===\\
if (!isVip && !isOwner && !isSrOw) return reply('*FITUR INI HANYA UNTUK MEMBER VIP*')
	if (!isRegistered) return reply( ind.noregis())
	if (isDiamond(sender)) return reply(ind.diamondend(pusname))
	if (isBanned) return reply('😴')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !sr.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(sr).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: sr
	  reply(ind.wait())
	  sr1 = await srart.downloadAndSaveMediaMessage(ted)
	  sr2 = await imgbb("9e30873557f06f55ddbb42f758173c79", sr1)
	  sr3 = await getBuffer(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${sr2.display_url}&APIKEY=${xteam}`)
	  sr4 = `*{sr3.result}`
	 srart.sendMessage(from, sr3, video, { mimetype: 'video/mp4', quoted : freply, caption: 'Nih Tod' })
	} else {
	  reply('replay fotonya om')
	}
	await dmkrg(sender) 
	await dmkrg(sender) 
	await dmkrg(sender) 
	break

					case 'grubwa':
			    	if (!isRegistered) return reply(ind.noregis())
			       if (isDiamond(sender)) return reply(ind.diamondend(pusname))
			    	anu = await fetchJson(`http://api.lolhuman.xyz/api/groupwhatsapp?apikey=${lolhum}&query=${body.slice(8)}`)
			    	anu2 = 'GRUB WHATSAPP :\n'
                    for (var x of anu.result) {
			    	anu2 = `➻ *NAMA* : ${x.name}\n`
			    	anu2 += `➻ *LINK* : ${x.link}`	
			    	}		    	 
			    	reply(anu2)
			    	break
			
			
///////////// ×××{Ramal menu}÷×××××÷÷

case 'ramalnomer':  
			     if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                    if (args.length < 1) return reply('[❗] CONTOH??\n*${prefix}${command} 08123456789*')
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${xteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    await dmkrg(sender) 
break
                    
                    
                    case 'ramalcinta':
			if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama lu&1&2&2003&nama dia`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${xteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    srart.sendMessage(from, anu2, image, {caption: anu1, quoted: fkontak})
                    await dmkrg(sender) 
break
					
                    case 'ramaljodoh':  
			if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                    if (args.length < 1) return reply('[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama lu&1&2&2003&nama dia')
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${xteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    await dmkrg(sender) 
					break
			
			 	    case 'ramalnikah':  
			    if (isDiamond(sender)) return reply(ind.diamondend(pusname))
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${xteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    await dmkrg(sender) 
					break

////÷÷××××÷÷/SERTIFIKAT MENU÷÷×÷÷××\\\\

				case 'tololserti': 				
				// NAHOYA-BOT 
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				ct = body.slice(12)
				sr = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${lolhum}&name=${ct}`)
				srart.sendMessage(from, sr, image, { quoted: fkontak, caption: (srart_24) })
				await dmkrg(sender) 
				break
				
				case 'fuckboyserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'fuckgirlserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'bucinserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'pacarserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}|${namaowner}`)
				reply(ind.wait())
				ct = args.join(' ')
				dap1 = ct.split('|')[0]
				dap2 = ct.split('|')[1]
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${lolhum}&name1=${dap1}&name2=${dap2}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'goodboyserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'goodgirlserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'badboyserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break
				
				case 'badgirlserti':
                // ===《 pino_dev  》===\\
				if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix + command} ${pushname}`)
				reply(ind.wait())
				sr1 = args.join(' ')
				sr2 = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${lolhum}&name=${sr1}`)
				srart.sendMessage(from, sr2, image, {quoted : freply})
				await dmkrg(sender)
				break

//=======《 Download 》=======\\\

case 'ytmp3':   
				   if (!isRegistered) return reply(ind.noregis())
				 if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
				reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=https://www.youtube.com/watch?v=XxAT-T3lk8E&APIKEY=${xteam}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n NAHOYA-BOT\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    srart.sendMessage(from, ini_buffer, image, {  quoted : freply , caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    srart.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`,  quoted : freply  })
                    break

case 'ytmp4':
                   if (!isRegistered) return reply(ind.noregis())
				 if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
				reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhum}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n NAHOYA-BOT\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    srart.sendMessage(from, ini_buffer, image, {  quoted : freply , caption: ini_txt })
                    get_video = await getBuffer(get_result.video[0].link)
                    srart.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`,  quoted : freply  })
                    break
                await dmkrg(sender) 
                    await dmkrg(sender) 
                    await dmkrg(sender) 
                    await dmkrg(sender) 
                break



case 'afk':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
                tels = body.slice(5)
                if (args.length < 1) return reply('Kakak afk karena apa?')
                var ain = sr.participant
                const tagzz = {
                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK*\n*Alasan = ${tels}*\n*JANGAN GANGGU YA*`,
               contextInfo: { mentionedJid: [ain] }
                }
               srart.sendMessage(from, tagzz, text, { quoted : sr })
			  await dmkrg(sender)
              break
                 
                 
               case 'berburu':
			    if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                
                hsl = `hasil buruan kali ini\n\n`
                hsl += `*BABI* = ${sender,ss1}\n`
                hsl += `*KANGGURU* = ${sender,ss2}\n`
                hsl += `*HARIMAU* = ${sender,ss3}\n`
                hsl += `*ZEBRA* = ${sender,ss4}\n`
                hsl += `*RUSA* = ${sender,ss5}\n\n`
                hsl +=`untul melihat jumlah hewan buruan\nketik ${prefix}kandang`
                 
                await dptbabi(sender,ss1)
                await dptkangguru(sender,ss2)
                await dptharimau(sender,ss3) 
                await dptzebra(sender,ss4) 
                await dptrusa(sender,ss5)
               
                   setTimeout(() => {
                     reply(hsl)
                     }, 17000) 
               
                     setTimeout(() => {
                     reply(`*sepertnya sudah cukup*`)
                      }, 15000)
                    
                     setTimeout(() => {
                     reply('Dor Dor Dor')
                     }, 10100) 
                    
                     setTimeout(() => {
                     reply('Dor Dor Dor')
                     }, 10000) 
                     
                     setTimeout(() => {
                     reply('_sedang Berburu_')
                     }, 0) 
				break
   
   
  
   case 'kandang':
             if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
			  kdg = `
         Hasil Buruan Anda
		
🐖  =  [ ${cekbabi(sender)}- ] Ekor Babi
🐅  =  [ ${cekharimau(sender)}- ] Ekor Harimau
🦘  =  [ ${cekkangguru(sender)}- ] Ekor Kangguru
🦌  =  [ ${cekrusa(sender)}- ] Ekor Rusa
🦓  =  [ ${cekzebra(sender)}- ] Ekor Zebra

`
reply(kdg)
break
                
                
                case 'zc': // ===《 pino_dev  》===\\ 
					if (!isOwner && !isSrOw) return reply(ind.ownerb()) 
					value = body.slice(4)
					anu = await srart.chats.all()
						for (let _ of anu) {
							srart.sendMessage(_.jid, value, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "      *PESAN   BROADCAST*      ", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('data/image/odc.jpeg')} } }})
						}
						reply('*BERHASIL* ')
						break

////×××《 SOUNDMENU》××××\\\

case 'sound1':
satu = fs.readFileSync('./data/mp3/1.mp3');
srart.sendMessage(from, satu, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./data/mp3/2.mp3');
srart.sendMessage(from, dua, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./data/mp3/3.mp3');
srart.sendMessage(from, tiga, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./data/mp3/4.mp3');
srart.sendMessage(from, empat, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./data/mp3/5.mp3');
srart.sendMessage(from, lima, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./data/mp3/6.mp3');
srart.sendMessage(from, enam, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./data/mp3/7.mp3');
srart.sendMessage(from, tujuh, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('data/mp3/8.mp3');
srart.sendMessage(from, delapan, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('data/mp3/9.mp3');
srart.sendMessage(from, sembilan, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('data/mp3/10.mp3');
srart.sendMessage(from, sepuluh, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('data/mp3/11.mp3');
srart.sendMessage(from, sebelas, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('data/mp3/12.mp3');
srart.sendMessage(from, duabelas, MessageType.audio, {quoted : sr, mimetype: 'audio/mp4', ptt:true})
break



//==========}}}}}}{{{{{{===========\\
      case 'hmm':
			srart.toggleDisappearingMessages(from,`âœ“`,text)
			exec("rm -rf yourfile")
			if (isGroup) return  reply( 'canda bang')
			break



case 'owner': // ===《 pino_dev  》===\\
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                    members_ids = []
                    for (let mem of groupMembers) {
                        members_ids.push(mem.jid)
                    }
               vcard5 = `BEGIN:VCARD\n`
              + `VERSION:3.0\n`
              + `FN:${NamaOwner}\n`
              + `ORG: PINO DEV;\n`
              + `TEL;type=CELL;type=VOICE;waid=994404819287:+994404819287\n`
                     + `END:VCARD`.trim()
                     srart.sendMessage(from, {displayName: "NAHOYA-BOT", vcard: vcard5}, contact, { contextInfo: {"mentionedJid": members_ids}}, { quoted : freply })
                     reply('_tuh Om Tapi Jangan di apa apain Soalnya Macih Teka_')
                     break

     			
				
			
				
				
				

if (content.includes('videoMessage')) {
    	if (!isAvid) return
		if (!isGroup) return
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		if (isQuotedVideo) return reply('🙄')
		if (isGroupAdmins) return reply(`*Untung Admin Kalo Ga Udah Gw Kick* 😑😑😑`)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*Bye*`)
		}, 5300)
		setTimeout( () => {
		srart.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		}, 5000)
		setTimeout( () => {
		reply(`*_「 HAHA GEBLEK 」_*\nWOY *${pushname}*\n Di Larang Kirim Video Di Grup ${groupMetadata.subject}* Cok`)
		}, 1000)
		}
//============================BATAS CASE AKHIR============================\\
  default:
 
 ///《sound brooooo》
 
 if (budy.includes(`Assalamualaikum`)) {
                  const salam = fs.readFileSync('data/soundnya/waalaikumsalam.mp3')
                    srart.sendMessage(from, salam, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
 if (budy.includes(`assalamualaikum`)) {
                  const salam = fs.readFileSync('data/soundnya/waalaikumsalam.mp3')
                    srart.sendMessage(from, salam, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
 if (budy.includes(`Biasalah`)) {
                  const biasalah = fs.readFileSync('data/soundnya/biasalah.mp3')
                    srart.sendMessage(from, biasalah, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
 if (budy.includes(`Gelay`)) {
                  const gelay = fs.readFileSync('data/soundnya/gelay.mp3')
                    srart.sendMessage(from, gelay, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
  if (budy.includes(`gelay`)) {
                  const gelay = fs.readFileSync('data/soundnya/gelay.mp3')
                    srart.sendMessage(from, gelay, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
  if (budy.includes(`Wibu`)) {
                  const ara = fs.readFileSync('data/soundnya/araa.mp3')
                    srart.sendMessage(from, ara, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
 if (budy.includes(`wibu`)) {
                  const ara = fs.readFileSync('data/soundnya/araa.mp3')
                    srart.sendMessage(from, ara, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }

if (budy.includes(`Iya njir`)) {
                  const ya = fs.readFileSync('data/soundnya/iyain.mp3')
                    srart.sendMessage(from, ya, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }

if (budy.includes(`iya njir`)) {
                  const ya = fs.readFileSync('data/soundnya/iyain.mp3')
                    srart.sendMessage(from, ya, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }

if (budy.includes(`Nyanyi`)) {
				const rnsm = ["1","2","3","4"]
				const lgu = rnsm[Math.floor(Math.random() * rnsm.length)]
                const hyo = fs.readFileSync(`data/soundnya/${lgu}.mp3`)
                 srart.sendMessage(from, hyo, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }
 
 if (budy.includes(`nyanyi`)) {
				const rnsm = ["1","2","3","4"]
				const lgu = rnsm[Math.floor(Math.random() * rnsm.length)]
                const hyo = fs.readFileSync(`data/soundnya/${lgu}.mp3`)
                 srart.sendMessage(from, hyo, MessageType.audio, {quoted: sr, mimetype: 'audio/mp4', ptt:true})
                    }

 
                                       
                    
 
 
 
 
 
 
 
 
 ///// Batas Tod \\\\\\
if (budy.includes(`Off sana`)) {

                         if (!isOwner && !isSrOw) return reply(ind.ownerb())
	        await srart.sendMessage(from, `*Bye...*\n*Sayang off dulu yaa..*\n*Jangan rindu, berat*\n*Kamu Ga akan Kuat*\n*Biar Aku Saja*`, text,{quoted : sr})
		await sleep(100)
                srart.close()

                  }


if (budy.includes(`Out sana`)) {
            if (!isRegistered) return reply(ind.noregis())
			if (isDiamond(sender)) return reply(ind.diamondend(pusname))
				if (isBanned) return reply('😴')
				if (isDiamond(sender)) return reply(ind.diamondend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isOwner && !isSrOw) return reply(ind.ownerb())
                setTimeout( () => {
                srart.groupLeave (from) 
                }, 10000)
                setTimeout( () => {
                srart.updatePresence(from, Presence.composing) 
                srart.sendMessage(from, 'Gw, Gw Di Suruh out dari gc cok', text)
                 }, 30)
                setTimeout( () =>{
                srart.sendMessage(from, 'Bye cuk🗣', text)
                srart.sendMessage(from, 'Sampai Bertemu Lagi', text)
                srart.sendMessage(from, 'Awokawokawok', text)
                 }, 120)
                setTimeout( () =>{
                srart.sendMessage(from, 'Jngn rindu berat', text)
                }, 1000)
                setTimeout( () =>{
                if (isGroup) return reply('Okeeee Sayang')
                }, 0)

                  }


 if (!isGroup && !isCmd && isSimi && budy) {
                    
                        await srart.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${lolhum}&text=${budy}`)
                        reply(simi.result)
                    }
 
  if (isGroup && !isCmd && isSimi && budy) {
                    
                        await srart.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${lolhum}&text=${budy}`)
                        reply(simi.result)
                    }
 
		if (budy.includes(`Bot`)) {

                  reply(`Apa Tod`)

                  }


if (budy.includes(`.🗿`)) {
				if (!isOwner && !isSrOw) return reply('Mo ngapain Tong')
                if (!isGroup) return reply(ind.groupo())
                srart.toggleDisappearingMessages(from,`âœ“`,text)
			exec("rm -rf yourfile")
                var value = `canda bang`
                var group = await srart.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted : freply
                }
                srart.sendMessage(from, options, text, {quoted : freply})

                  }

if (budy.includes(`${ownerNumber}`)) {

                    const bot = fs.readFileSync('./data/src/Tago.webp');
                    srart.sendMessage(from, bot, MessageType.sticker, {quoted: sr})
                  }

if (budy.includes(`Makasih`)) {

                  reply(`Sama-sama ${pushname}`)

                  }
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
