import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "fs";
import { join } from "path";

export const copyFiles = (sourceDir: string, destinationDir: string): void => {
  try {
    // Ensure the destination directory exists
    if (!existsSync(destinationDir)) {
      mkdirSync(destinationDir, { recursive: true });
    }

    // Read the files in the source directory
    const files = readdirSync(sourceDir);

    // Copy each file to the destination directory
    files.forEach((file) => {
      const sourceFilePath = join(sourceDir, file);
      const destinationFilePath = join(destinationDir, file);

      const fileContent = readFileSync(sourceFilePath, "utf-8");
      writeFileSync(destinationFilePath, fileContent);
    });
  } catch (error) {
    console.error("Error occurred while copying files:", error);
  }
};
