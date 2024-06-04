import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(classNames));