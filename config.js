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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_39_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieXpLWGZyTDZaeXU3M09pQlorTFRDVDIvczB0dW5BR1ZsUDUvR3dJV0VjTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0kwMlRGYnRRN2FVeTZRc2FTMVFIZ1wiLFxuICBcInBob25lSWRcIjogXCIzNTBlYjEzYS1iNjBjLTQxMDgtYTljYS1lMDFiYmNiYzMyZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxMzEsXG4gICAgICAxMSxcbiAgICAgIDIxNixcbiAgICAgIDgzLFxuICAgICAgOTgsXG4gICAgICAyMCxcbiAgICAgIDE4NCxcbiAgICAgIDcwLFxuICAgICAgOTUsXG4gICAgICAxMjMsXG4gICAgICAyMjksXG4gICAgICAxMjksXG4gICAgICAxMTMsXG4gICAgICA1MCxcbiAgICAgIDM2LFxuICAgICAgOTMsXG4gICAgICA4NyxcbiAgICAgIDEyNyxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICA2MyxcbiAgICAgIDcyLFxuICAgICAgMjE5LFxuICAgICAgMjMwLFxuICAgICAgMTk4LFxuICAgICAgNyxcbiAgICAgIDc5LFxuICAgICAgNDgsXG4gICAgICAxMzgsXG4gICAgICAyNTIsXG4gICAgICAyMTAsXG4gICAgICAxNzEsXG4gICAgICAyMzAsXG4gICAgICAyNyxcbiAgICAgIDEsXG4gICAgICAyMTMsXG4gICAgICAyMDAsXG4gICAgICA1MSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzSkdaR0MxNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzM3NTY0OTY4MDc6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI5MzU2NTg4MDA3NDkxOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xYeGo2QURFTEtadXJnR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVdIdTZFbURPYXI1bVZiUnptOEFXdHpFOXJndHU0SXc3MTdTV25BR24zZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXY202MGw5Vkh0SExaaDlaMzFqWG5td2VtcHJ0eG9haDhmVDFqd2N4TnlBNkJNZXNRNnhhVTNhWnpYMHBkb3JQQnhwd283bWp0WFYrVkthdWE4dDlEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWMHNXRHErOGVDbjZUR3FMVXB0b3lNREg3WTV2S3ZoTkJwV1lSNUxVT0xycmc1WUdQUzhXTkJtbWdmUEtmWk5ITFpPdUZpRitjZCtJN0Z5dDlGSGFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzMzc1NjQ5NjgwNzozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwMDY3NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOOGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU44Yi5qc29uIjogIntcImtleURhdGFcIjpcInlJKzR6d1RWenVRanJHL3NxWlRPTGFubmxPdTFFUjhxa3UwS21KanpiOUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODcyNjc1NTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
