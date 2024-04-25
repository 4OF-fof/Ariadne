import { $ } from "jsr:@david/dax@0.40.0";
import { parseArgs } from "node:util";

const parsed = parseArgs({
  options: {
    help: {
      type: "boolean",
      default: false,
      short: 'h'
    }
  },
  allowPositionals: true
});

if (parsed.values.help) {
  console.log("Help text");
  Deno.exit(0);
}


const hoge: string = parsed.positionals.length === 0 ? "HogeFuga" : parsed.positionals[0];
await $`echo ${hoge}`