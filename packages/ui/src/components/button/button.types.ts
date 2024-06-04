import { type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { type buttonConfig } from "./button";

// Button props type
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonConfig> {
  color?: string;
}