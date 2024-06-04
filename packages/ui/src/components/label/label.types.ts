import { VariantProps } from "class-variance-authority";
import { LabelHTMLAttributes } from "react";
import { labelConfig } from "./label";

// Input props type
export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelConfig> {}
