let browser="chrome"


function checkBrowserVersion(callback){
setTimeout(() => {}, 2000);
  callback(browser);
}

function logBrowserVersion(browserVersion) {
  console.log( "Browser version using callback function: "+ browserVersion);
}

checkBrowserVersion(logBrowserVersion);



