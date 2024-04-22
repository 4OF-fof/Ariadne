import { $ } from "jsr:@david/dax@0.40.0";
import { parseArgs } from "node:util";
import { checkCoreFile } from "./checkCoreFile.ts";

const parsed = parseArgs({
  allowPositionals: true,
  options: {
    help: {
      type: "boolean",
      short: 'h'
    }
  }
});

if (parsed.values.help) {
  console.log("Help message");
  Deno.exit(0);
}

const coreFile = checkCoreFile()
console.log(coreFile)