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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_09_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuK2o1SWxLa09FSGMrdThhVk1jeWdueVRiZVBYYzVSVkpxVGJyN2ZmSXhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaLVJLUExSTVNJS0JpT2lxWk5NT1hnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU4YjNlOWQxLTM3ZmItNGUxMC1hNWYxLTc5NGM5ZDk5MTQxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAyNDAsXG4gICAgICAxMzksXG4gICAgICAxMjUsXG4gICAgICAxOTIsXG4gICAgICAyMSxcbiAgICAgIDE0OSxcbiAgICAgIDI1MCxcbiAgICAgIDE5OSxcbiAgICAgIDIzNyxcbiAgICAgIDQwLFxuICAgICAgMjUxLFxuICAgICAgMTgsXG4gICAgICAxMjMsXG4gICAgICAzOSxcbiAgICAgIDQzLFxuICAgICAgMTc1LFxuICAgICAgMjI3LFxuICAgICAgMTg3LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxNjcsXG4gICAgICA0LFxuICAgICAgMTU4LFxuICAgICAgMjQyLFxuICAgICAgMjQ0LFxuICAgICAgMTU5LFxuICAgICAgODksXG4gICAgICAxNTYsXG4gICAgICAxNDksXG4gICAgICAxMTcsXG4gICAgICAyNDUsXG4gICAgICAxNzksXG4gICAgICAxNjUsXG4gICAgICAxNjUsXG4gICAgICAxOTMsXG4gICAgICAxMCxcbiAgICAgIDIyLFxuICAgICAgMTM4LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM3MVpTWkhUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvozjhJbljYTlh6Ag5bGx5Lio5Yya0pwgNVwiLFxuICAgIFwibGlkXCI6IFwiMjU5NDg5NTc2MDA1ODc3OjY5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTZzVhTUhFSmZqbzdrR0dCWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFR0dCtGZnJaMWdRTXFWRExrT3h3SXFGaUl2N3l3dmhNOE9UWHorZ2QxOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0NGt3SmttR0ZNeWFYdVZNbTUxU25hMU9nU0ZHNFV4WXRUQ2YzSndkZXBtUm9UR2UwSTJsaCtiaU9vUWRYNGFnTHZEVENUL3RVM1dXR08rb0xYRndDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpRVZtOGdlTlRITW5qZ2p2SGlHVHFqUlV6eGZhaERUazBVakdYVUlpejlwM1BjMUhqejA1N21FRWgxOUgzT05JazZOaVNpUW5lNjJEc0xKcGdSNEhpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzM2NTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoWEQrUmtlMi9QM21KeWl1YkFzVG1oMUFEM05aTGZSWmNQSnFoWFVXNHE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTQxMDczOTYsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA3MzY1MTA2ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ 』```", //*『sᴜʙsᴄʀɪʙᴇ • SUHALLI_MD』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Raju_🥇Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "SUHALLI_MD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


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
