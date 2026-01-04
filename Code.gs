// Password Manager v2.4.3 (Stable Locked)
const SHEET_ID = "REPLACE_WITH_YOUR_SHEET_ID";

function doGet() {
  initializeSheets();
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("YOUR_NAME'S Password Manager v2.4.3");
}

function initializeSheets() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  ensureSheet(ss, "Credential", ["Name","Link","Username","Password","Role"]);
  ensureSheet(ss, "User", ["Username","Password","Role"]);
  ensureSheet(ss, "Logsheet", ["Timestamp","User","Action","Details"]);
}

function ensureSheet(ss,name,headers){
  if(!ss.getSheetByName(name)){
    ss.insertSheet(name).appendRow(headers);
  }
}

function login(username,password){
  const users=SpreadsheetApp.openById(SHEET_ID)
    .getSheetByName("User").getDataRange().getValues();
  for(let i=1;i<users.length;i++){
    if(users[i][0]===username && users[i][1]===password){
      logAction(username,"LOGIN","SUCCESS");
      return {username,role:users[i][2]};
    }
  }
  logAction(username,"LOGIN_FAILED","INVALID");
  return {error:"Invalid username or password"};
}

function getCredentials(role,username){
  const data=SpreadsheetApp.openById(SHEET_ID)
    .getSheetByName("Credential").getDataRange().getValues();
  const out=[];
  for(let i=1;i<data.length;i++){
    if(role==="admin"||data[i][4]===role){
      out.push({name:data[i][0],link:data[i][1],username:data[i][2],password:data[i][3]});
    }
  }
  logAction(username,"VIEW","CREDENTIALS");
  return out;
}

function addCredential(cname,link,user,pass,role,actor){
  const ss=SpreadsheetApp.openById(SHEET_ID);
  const users=ss.getSheetByName("User").getDataRange().getValues();
  if(!users.some(u=>u[0]===actor && u[2]==="admin")) throw new Error("Admin only");
  ss.getSheetByName("Credential").appendRow([cname,link,user,pass,role]);
  logAction(actor,"ADD",cname);
}

function logCopy(actor,type,name,link,value){
  logAction(actor,type,`Name=${name} | URL=${link} | ${type==="COPY_USERNAME"?"Username":"Password"}=${value}`);
}

function logAction(user,action,details){
  SpreadsheetApp.openById(SHEET_ID)
    .getSheetByName("Logsheet")
    .appendRow([new Date(),user,action,details]);
}
