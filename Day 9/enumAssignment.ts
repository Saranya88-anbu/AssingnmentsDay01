enum Environment {
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION",
}

function runTests(env: Environment): void {
    console.log(`Running tests on ${env} environment`);
}

runTests(Environment.LOCAL);
runTests(Environment.DEVELOPMENT);
runTests(Environment.PRODUCTION);
runTests(Environment.STAGING);

