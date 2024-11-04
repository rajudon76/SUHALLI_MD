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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_50_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzVm9jYW1PTzA3cldXNG53OWVnbFJLNG5JdlBGWmVmazZaODdXZ2FXU0owPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzc29hWXl0eFFNNkdsWnpqQXJnaXdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRiOTQyZTJiLTU4YTAtNGIyYi05M2MxLTQ0MDkzZTk0MzBiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICA1MCxcbiAgICAgIDE5NyxcbiAgICAgIDE2OSxcbiAgICAgIDE1NixcbiAgICAgIDE4MCxcbiAgICAgIDEyOSxcbiAgICAgIDU3LFxuICAgICAgNzMsXG4gICAgICAyMDgsXG4gICAgICA4OSxcbiAgICAgIDE1NyxcbiAgICAgIDExMyxcbiAgICAgIDU4LFxuICAgICAgMjA4LFxuICAgICAgMixcbiAgICAgIDIzMixcbiAgICAgIDE1NixcbiAgICAgIDIxNixcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAxNSxcbiAgICAgIDE2MSxcbiAgICAgIDE3NCxcbiAgICAgIDIzLFxuICAgICAgNTUsXG4gICAgICAxMjIsXG4gICAgICAyMDUsXG4gICAgICA0NixcbiAgICAgIDIwOCxcbiAgICAgIDE0MSxcbiAgICAgIDM5LFxuICAgICAgMTg3LFxuICAgICAgOTEsXG4gICAgICA2NyxcbiAgICAgIDIyNixcbiAgICAgIDE5MixcbiAgICAgIDIwNCxcbiAgICAgIDIwNixcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRlZUVjlSSkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIu++jOOEluWNhOWHoCDlsbHkuKjljJrSnCA1XCIsXG4gICAgXCJsaWRcIjogXCIyNTk0ODk1NzYwMDU4Nzc6NjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVNnNWFNSEVLKytvN2tHR0JVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYVHR0K0ZmcloxZ1FNcVZETGtPeHdJcUZpSXY3eXd2aE04T1RYeitnZDE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxMOVVGcFloOTljSEdtdDUxMVpLSEg4ZlF1eUlsVVRDQ3FNd3BRRkFRYjdSU0hXM3JaUVhCd3hWWTZQblhrOXpqaUY5UCtYVmYwOUxBb3hQTVpCV0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllMTmpjaXdBY1NoZUxnYjR5U01ld0hSeGFuc0lGSGllMXBlRHhLdjBBRW43Zk1nUXBmZnlvR1QrQnZnNVNseXFFOFpPYXN5dHhWcE9RYkEvVmZDeGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3MzE4MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCUXJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJRci5qc29uIjogIntcImtleURhdGFcIjpcIkhTbERJM0R5UFBmZDlYWUpuSDlFYWlkM1Mwd21UNkVhSk1FL1pQMVc4dk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NDEwNzM5NixcImN1cnJlbnRJbmRleFwiOjIwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMDczMTgwMzI1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ 』```", //*『sᴜʙsᴄʀɪʙᴇ • SUHALLI_MD』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",
  packname: process.env.PACK_NAME || "Raju Boss",
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
