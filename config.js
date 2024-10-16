const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos,Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobopatricia/SUHALLI_MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://chat.whatsapp.com/J33KwFYkLERK39SEqaxYRB" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ" 


global.devs = "33756496807" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314927710";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "33756496807";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_16_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN3RsRytES3RYMnlySWlTS2FmQ2hHQUNFZCt2TVg5THcySC9nb0dOOXptMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2FidFh4Z0hRTmlCT25UNW5Hc0dkQVwiLFxuICBcInBob25lSWRcIjogXCI4YzY4NTk5OC02YTEzLTRmNmQtYjI2MC0xNjc4NmEzOThlNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDI5LFxuICAgICAgMTUyLFxuICAgICAgMTYxLFxuICAgICAgOSxcbiAgICAgIDE2NSxcbiAgICAgIDIzOSxcbiAgICAgIDEwNSxcbiAgICAgIDIyMixcbiAgICAgIDI1MCxcbiAgICAgIDE2MixcbiAgICAgIDE4MSxcbiAgICAgIDczLFxuICAgICAgMTU2LFxuICAgICAgMjE3LFxuICAgICAgNjIsXG4gICAgICAzOSxcbiAgICAgIDExOCxcbiAgICAgIDg5LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDE0LFxuICAgICAgMzgsXG4gICAgICAxOTEsXG4gICAgICAxOTgsXG4gICAgICAyNTIsXG4gICAgICAyMjMsXG4gICAgICAxMTUsXG4gICAgICA3NSxcbiAgICAgIDEzMCxcbiAgICAgIDEwLFxuICAgICAgNTgsXG4gICAgICAxMTMsXG4gICAgICAxMDcsXG4gICAgICA2NCxcbiAgICAgIDE0OSxcbiAgICAgIDEyNixcbiAgICAgIDIwMyxcbiAgICAgIDE5NSxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko4RjJYOUxNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzMzc1NjQ5NjgwNzozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjkzNTY1ODgwMDc0OTE6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFh4ajZBREVNbXh2N2dHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVV0h1NkVtRE9hcjVtVmJSem04QVd0ekU5cmd0dTRJdzcxN1NXbkFHbjNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlWQ2lKUVJQNWNYTUpTd3ZWRzU1NHk2c1RwLzAxRjNhYjBsRFhSRlA4MHRsZ3M4WUNtckp6dGdGdnhrekNOQ1M0aDkycWV4amgxc3R4NDJWNnhrbkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBaK0VPUSsxbEFOSlpIM05vU08zblN2cVZhQVRHbEREcUl6Zi8rck5WZ2ZubGZFZGFBUm9PWnNheVdVems4TDdOYkhMYVdwTVBJQnRZMEhWaHBNb0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjMzNzU2NDk2ODA3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTA5MTc4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU44YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjhiLmpzb24iOiAie1wia2V5RGF0YVwiOlwieUkrNHp3VFZ6dVFqckcvc3FaVE9MYW5ubE91MUVSOHFrdTBLbUpqemI5RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzI2NzU1MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ 』```", //*『sᴜʙsᴄʀɪʙᴇ • SUHALLI_MD』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "SUHALLI_MD",
  ownername:process.env.OWNER_NAME|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
