#!/usr/bin/env node

import { program } from "commander";
import { init } from "./commonds/init";
import { add } from "./commonds/add";

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

const main = () => {
  program
    .name("sigma-ui")
    .description("Components you can easily customize and add to your apps by copying and pasting.")
    .version("1.0.0");

  program
    .addCommand(init)
    .addCommand(add)

  program.parse()
}

main()