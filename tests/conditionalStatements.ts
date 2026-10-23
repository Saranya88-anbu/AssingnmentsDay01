function launchBrowser(browserName:String) {
  if (browserName === "chrome") {
    console.log("Launching Chrome browser");
  } else {
    console.log("Launching another browser");
  }
}

function runTests(testType: String) {
  switch (testType) {
    case "smoke":
      console.log("Running smoke tests");
      break;
    case "sanity":
      console.log("Running sanity tests");
      break;
    case "regression":
      console.log("Running regression tests");
      break;
    default:
      console.log("Running smoke tests");
      break;
  }
}

// Call the functions
launchBrowser("chrome");
launchBrowser("firefox");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("unknown");