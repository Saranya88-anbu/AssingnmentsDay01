"use strict";
var Environment;
(function (Environment) {
    Environment["LOCAL"] = "LOCAL";
    Environment["DEVELOPMENT"] = "DEVELOPMENT";
    Environment["STAGING"] = "STAGING";
    Environment["PRODUCTION"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log(`Running tests on ${env}environment`);
}
/* switch (env) {
     case Environment.LOCAL:
         console.log("Running tests in LOCAL environment");
         break;

     case Environment.DEVELOPMENT:
         console.log("Running tests in DEVELOPMENT environment");
         break;

     case Environment.STAGING:
         console.log("Running tests in STAGING environment");
         break;

     case Environment.PRODUCTION:
         console.log("Running tests in PRODUCTION environment");
         break;

     default:
         console.log("Unknown environment");
 }

}*/
runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.PRODUCTION);
runTests(Environment.STAGING);
