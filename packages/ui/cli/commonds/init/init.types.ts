import { Answers } from "prompts";

export interface OptionsType {
  default: boolean;
}

export type ConfigType = Answers<"primaryLightColor" | "primaryDarkColor" | "dir" | "cssFile">