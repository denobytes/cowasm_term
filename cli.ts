import { parse as argparse } from "https://deno.land/std@0.181.0/flags/mod.ts";
import { default as dash } from "npm:dash-wasm@0.7.7";

const args = argparse(Deno.args, {
  boolean: [
    // instructions for this script
    "help",
  ],
});

const commandName = `cowasm_term`;

const usageMessage = `
Usage: ${commandName} [OPTIONS] 
Convert runs cowasm terminal

Options:
  --help              Show this help message

  Examples:
  ${commandName}
`;

// parse args
const help = args.help;

if (help) {
  console.log(usageMessage);
  Deno.exit();
}

let cowasm = await dash.syncDash();
cowasm.terminal();

Deno.exit();
