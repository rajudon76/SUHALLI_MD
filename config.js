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


global.devs = "18053652065" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "18053652065";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_10_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzLFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImEybG5RTEZ4TkZLVmxiZHo5NUlNNkp3NEhqWUQ4WDY2UnF4VlAxZUZlSWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTgwNTM2NTIwNjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM0NjcwMzY5NkIwRUZFMDI1RDM5MEI1OUM4MEUxOTE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDY0NjYyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4MDUzNjUyMDY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NjgyNkQ0N0I3NjgyMDM4QTMwQzJGOUI5QzkzODRFQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA2NDY2MjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRFJPUFp2YUlSaDI0Rl8tYy10WTRXUVwiLFxuICBcInBob25lSWRcIjogXCJmY2JhZmFhZi1lZThjLTRiNjAtOTIzYi00NzgyZDliZTQwNmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgODYsXG4gICAgICA1MSxcbiAgICAgIDk3LFxuICAgICAgNzgsXG4gICAgICAxMzIsXG4gICAgICAyMzMsXG4gICAgICA2MyxcbiAgICAgIDQ5LFxuICAgICAgNzIsXG4gICAgICA5NSxcbiAgICAgIDIwOCxcbiAgICAgIDEwMSxcbiAgICAgIDgyLFxuICAgICAgNyxcbiAgICAgIDQsXG4gICAgICAxNTAsXG4gICAgICA5NCxcbiAgICAgIDg0LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxMzMsXG4gICAgICAxNTAsXG4gICAgICA2MCxcbiAgICAgIDY4LFxuICAgICAgNjksXG4gICAgICAzMSxcbiAgICAgIDE2NSxcbiAgICAgIDIxOSxcbiAgICAgIDIyNyxcbiAgICAgIDE2MCxcbiAgICAgIDY2LFxuICAgICAgMjcsXG4gICAgICAyMjksXG4gICAgICA3NyxcbiAgICAgIDE3MSxcbiAgICAgIDIyNCxcbiAgICAgIDI0NyxcbiAgICAgIDEzOSxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWUFGWVExSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTgwNTM2NTIwNjU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUxNzc3MTkwODMwNzY6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCbGFpcmUgSXZvcnlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZlp4ZU1DRU5ha25ya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVDMU1wQWZ3Uks5cktSbjN4WDVzNmIvdWFmZStXT1d0c1FIekxxOU1zems9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT2VVM3N6NGJXS1JZbFBXSnZka25BVXYydkNJZzMrK2hlT20vU0RsVm50ZVVUc0d3WHgydTZNZVBDbDJhOUVod1RlWmNhS1dhdTMvdzdlc3AxTmtkQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0N4ckFKTmtxYXUyZUhXNFJ1YThZMUJ1UERvcll6TXU2MGFZUzhiUXZ5c3RlL25FNjEzYmZIeGEycTVoSytNTGIxV01lN2lBcitQaHp3U0VxRkttQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTgwNTM2NTIwNjU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjQ2NjE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFJpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMUmkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzQUlSZjh2U3M1WDhteFVjNXUzRWpHQkpCMkpLaS84TUd6cjVnQkF5M2dVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NTYzMDk2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNjQ2NjIwMDI0XCJ9Igp9"  // PUT your SESSION_ID 


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
