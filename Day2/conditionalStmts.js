

function launchBrowser(browserName){
    if(browserName === "chrome"){
        console.log("Launching Chrome Browser");
        }else {
            console.log("Launching other browser");
            
        }
}
function runTests(testType) {
    
switch(testType){
case "smoke":
    console.log("Smoke Testing");
    break;
case "sanity":
    console.log("Sanity Testing");
     break;
case "regression":
    console.log("Regression Testing");
     break;
default:
    console.log("Smoke Testing");
  }
}     

    launchBrowser("chrome");
    runTests("smoke");
    
    