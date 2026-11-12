import { Browser } from "./Parent";

class Chrome extends Browser{
launchBrowser(){
    console.log("Launch the chrome Browser");
    
}

}
const ch=new Chrome();
ch.launchBrowser();
ch.browserVersion();
ch.browserType();

//1st Child file
//Create class Chrome 
//Create 1 method launchBrowser
//Create object for Chrome
