import { Command } from "commander";
import { execSync } from "child_process";
import prompts from "prompts";
import { ConfigType, OptionsType } from "./init.types";
import { log, highlight, warning, dim } from "../../utils/log";
import { detectPackageManager } from "../../utils/detect-package-manager";
import { existsSync, mkdirSync } from "fs";
import path, { dirname, basename } from "path";
import { copyFiles } from "../../utils/copy-files";
import { fileURLToPath } from "url";
import ora from "ora";
import fs from "fs";
import { GLOBALS_CSS, TAILWIND_CONFIG } from "../../utils/templates";

// dependencies list of the sigma-ui
const DEPENDENCIES: string[] = [
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
  "sigma-ui-icons"
];

// function which return the list of prerequired details to be asked to the user
const configPrompt = async () => {
  const workingDirectory: string = existsSync("src")
    ? basename(process.cwd()) + "/src"
    : basename(process.cwd());

  //  list of prerequired details to be asked to the user
  const config = await prompts([
    {
      type: "text",
      name: "dir",
      message: `enter the ${highlight("working Directory path")} ${dim(`(default: ${workingDirectory}/):`)}`,
      initial: "",
    },
    {
      type: "text",
      name: "cssFile",
      message: `enter the ${highlight("global css file path")} ${dim(`(default: ${workingDirectory}/app/globals.css):`)}`,
      initial: "",
    },
    {
      type: "text",
      name: "primaryLightColor",
      message: `enter the ${highlight("primary light theme")} color: ${dim("(default: black)")}\n ↳ ${warning("Note: please enter the color in hexa code only")}`,
      initial: "",
    },
    {
      type: "text",
      name: "primaryDarkColor",
      message: `enter the ${highlight("primary dark theme")} color ${dim("(default: white)")}\n ↳ ${warning("Note: please enter the color in hexa code only")}`,
      initial: "",
    },
  ]);

  return config;
};

function isTailwindCSSInstalled() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
      return false;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  return dependencies['tailwindcss'] || devDependencies['tailwindcss'] ? true : false;
}

export const init = new Command()
  .name("init")
  .description("initialize the sigma-ui and install dependencies")
  .option("-D, --default", "use default configuration", false)
  .action(async (option: OptionsType) => {
    try {
      const __dirname = dirname(fileURLToPath(import.meta.url));

      // default config of the sigma-ui
      const defaultConfig: ConfigType = {
        primaryLightColor: "#000000",
        primaryDarkColor: "#FFFFFF",
        dir: existsSync("src")
          ? path.resolve(process.cwd(), "./src")
          : process.cwd(),
        cssFile: existsSync("src")
          ? path.resolve(process.cwd(), "./src/app/globals.css")
          : path.resolve(process.cwd(), "./app/globals.css"),
      };

      /*
        getting config of the sigma-ui as user want
        - if user select default style at begining then we will skip this process
      */
      const config: ConfigType = !option.default
        ? await configPrompt()
        : defaultConfig;

      // merging the user config with default config of the sigma-ui
      Object.keys(config).forEach((key) => {
        if (!(config as any)[key].length)
          (config as any)[key] = (defaultConfig as any)[key];
      });

      console.log("\n");

      /*
        checking whether tailwindcss is installed or not
        - if not process will be terminated
      */
      if (!isTailwindCSSInstalled()) {
        log.error("tailwindcss is not installed");
        // log.info(
        //   `visit ${highlight("https://tailwindcss.com/docs/guides/nextjs")} for more information`,
        // );
        process.exit(1);
      }

      // overriding the existing tailwind.config file as requied for sigma-ui
      let spinner = ora("overwriting the tailwind.config.ts file").start();
      /*
       checking whether tailwind.config file exist or not
       - if yes it will override the tailwind config file as requied for sigma-ui
       - else process will be terminated
      */
      if (existsSync("tailwind.config.ts")) {
        fs.writeFileSync(
          "./tailwind.config.ts",
          TAILWIND_CONFIG(existsSync("src")),
        );
        spinner.succeed();
      } else {
        spinner.fail();
        log.error(
          `tailwind.config.ts file not found on the current directory (${process.cwd()})`,
        );
        process.exit(1);
      }

      // adding required styles to the globals.css file
      spinner = ora("modifying globals.css file").start();
      /*
        checking whether globals css file exist in the path provided by the user or not
        - if yes we will add requied styles to the globals.css file
        - else we will terminate the process
      */
      if (existsSync(config.cssFile)) {
        const currentStyles = fs.readFileSync(config.cssFile, "utf-8");
        const modifiedStyles =
          currentStyles +
          "\n" +
          GLOBALS_CSS(config.primaryLightColor, config.primaryDarkColor);

        fs.writeFileSync(config.cssFile, modifiedStyles);
        spinner.succeed();
      } else {
        spinner.fail();
        log.error(
          `globals.css file not found on the path you provided (${config.cssFile}/globals.css)`,
        );
        process.exit(1);
      }

      // creating components and utils directories in the working directory if it is not exit in the working directory
      spinner = ora("creating required directories").start();
      if (!existsSync(config.dir + "/components"))
        mkdirSync(config.dir + "/components");
      if (!existsSync(config.dir + "/utils")) mkdirSync(config.dir + "/utils");
      spinner.succeed();

      // coping all the utils file to the project utils directory that we have created in the working directory
      spinner = ora("copying the utils files").start();
      copyFiles(
        path.resolve(__dirname, "../src/utils"),
        path.resolve(config.dir, "./utils"),
      );
      spinner.succeed();

      const CONFIG_FILE = { workingDir: `${config.dir}` };

      // creating the sigma-ui config file in the root directory
      spinner = ora("creating sigma-ui config file").start();
      fs.writeFileSync("./sigma-ui.config.json", JSON.stringify(CONFIG_FILE));
      spinner.succeed();

      // detecting the package manager used in the project
      const packageManager = await detectPackageManager(config.dir);

      // installing the required dependencies to the project
      spinner = ora("installing dependencies").start();
      execSync(
        `${packageManager} ${packageManager == "npm" ? "install" : "add"} ${DEPENDENCIES.join(" ")}`,
      );
      spinner.succeed();
    } catch (error) {
      log.error("\n", error);
      process.exit(1);
    }
  });
