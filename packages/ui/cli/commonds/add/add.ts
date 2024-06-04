import { Command } from "commander";
import fs, { existsSync } from "fs";
import { highlight, log } from "../../utils/log";
import { ConfigType } from "./add.types";
import path, { dirname } from "path";
import ora, { type Ora } from "ora";
import { fileURLToPath } from "url";
import { copyFiles } from "../../utils/copy-files";

export const add = new Command()
  .name("add")
  .description("add sigma-ui components")
  .argument(
    "<components...>",
    "add component names with space (eg. button card)",
  )
  .action((components: string[]) => {
    // checking whether the project is initailized with the sigm-ui
    if (!existsSync("sigma-ui.config.json")) {
      log.error("sigma-ui is not initialized");
      log.info(
        `please run ${highlight("npx sigma-ui init")} before adding the components`,
      );
      process.exit(0);
    }

    // reading the working directory path from the sigma-ui config file
    const config: ConfigType = JSON.parse(
      fs.readFileSync("./sigma-ui.config.json", "utf-8"),
    );

    try {
      const __dirname: string = dirname(fileURLToPath(import.meta.url));

      console.log("\n");

      log.info("Adding components:");
      // adding all the components requested by the user
      components.forEach((component: string) => {
        let spinner: Ora = ora(highlight(`${component}`));

        // checking whether requested component exist or not
        if (
          !existsSync(path.resolve(__dirname, `../src/components/${component}`))
        ) {
          spinner.fail();
          log.error(`no such component exist with name ${component}`);
          process.exit(1);
        }

        // coping the requested component fil to the project
        copyFiles(
          path.resolve(__dirname, `../src/components/${component}`),
          path.resolve(config.workingDir, `./components/${component}`),
        );
        spinner.succeed();
      });

      ora("component added successfully").succeed();
    } catch (error) {
      log.error(error);
      process.exit(0);
    }
  });
