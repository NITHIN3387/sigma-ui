import chalk from "chalk";

export const log = {
  success: (...values: unknown[]) => console.log(chalk.green.bold(...values)),
  warning: (...values: unknown[]) => console.log(chalk.yellow.bold(...values)),
  error: (...values: unknown[]) => console.log(chalk.red.bold(...values)),
  info: (...values: unknown[]) => console.log(chalk.white.bold(...values)),
  highlight: (...values: unknown[]) => console.log(chalk.blue.bold(...values)),
};

export const highlight = (message: string) => chalk.blue(message);
export const warning = (message: string) => chalk.yellow(message);
export const dim = (message: string) => chalk.dim(message);
