import { Browser } from "./Parent";

class Edge extends Browser
{
launchBrowser()
{
    console.log("Launch the edge Browser");

}
}
const ch1=new Edge();
ch1.launchBrowser();
ch1.browserType();
ch1.browserVersion();







/*2nd Child file
Create class Edge
Create 1 method launchBrowser
Create object for Edge*/