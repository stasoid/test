import { interpreter } from "./src";

if (process.argv.length <= 2) {
    console.log("specify filename");
    process.exit(-1);
}
let code = require('fs').readFileSync(process.argv[2], 'utf8');

const result = interpreter(code);
process.stdout.write(result.stdout);

