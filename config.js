const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348148048544";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_33_02_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOERhNzhvRFNTdVMxeU1pNDhXa0N2SDQyM0NtTEptRTdYbUN5LzE2SmNPRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZUY2MDNnZEpUSE8xNHVFSkt0N0NXUVwiLFxuICBcInBob25lSWRcIjogXCJmZDFiZTg3My1kMDgzLTQwYzAtYWRiZS00NTA1MzFlYmI4NTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjI5LFxuICAgICAgMzIsXG4gICAgICAxMTAsXG4gICAgICAxMjMsXG4gICAgICAyMzgsXG4gICAgICA1NCxcbiAgICAgIDI1MCxcbiAgICAgIDI0MSxcbiAgICAgIDIwOSxcbiAgICAgIDMsXG4gICAgICAyNDcsXG4gICAgICA3NSxcbiAgICAgIDE0NixcbiAgICAgIDE4NSxcbiAgICAgIDYzLFxuICAgICAgODksXG4gICAgICAyMTMsXG4gICAgICAyMzMsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAyMjEsXG4gICAgICAxMTcsXG4gICAgICA4MCxcbiAgICAgIDg0LFxuICAgICAgMTYzLFxuICAgICAgMzEsXG4gICAgICAxNzYsXG4gICAgICAyMDIsXG4gICAgICA3NSxcbiAgICAgIDE2MyxcbiAgICAgIDEyLFxuICAgICAgMjM1LFxuICAgICAgMTc3LFxuICAgICAgMTgwLFxuICAgICAgOTgsXG4gICAgICAxNixcbiAgICAgIDExMixcbiAgICAgIDI1NSxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOM0JOMzdXQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0ODA0ODU0NDo3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvaG5cIixcbiAgICBcImxpZFwiOiBcIjIwODY1NDA0MTE3MTMyOjcxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5Yzh0a0RFT0xHejcwR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWg4bGlsb2llM3R6cGpkSTB3dnRkaDFrVkYyQnZ4RXZ3ajNWOFVVREJRQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwa25xSUtHTUJwSWtUVWlheVBMUWU4L2lXT0dCWldYc0FYSndlaEMxR1ZCWTAwa1J4WmZOUWxEVXNyRjJXc3MwOXlRRkRPd2p6c3BoaktSOWNJSHNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxSnJEczdBa3RzWVkzYVVJem9yNFNIbXhVK1NIblEvSVhISUlWRzgwSWZQQmp4UFFtNnBWSHRFVzJxYWRCMDFsbEcrQzlCYWx4RHQ2aW9UWXBpRzhnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ4MDQ4NTQ0OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM5ODQyNDA2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "John Bot",
  ownername:process.env.OWNER_NAME|| "John",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
