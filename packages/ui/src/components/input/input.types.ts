import { VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { inputConfig } from "./input";

// Input props type
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id">,
    VariantProps<typeof inputConfig> {
      id: string
}
