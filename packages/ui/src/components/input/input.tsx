import { cva } from "class-variance-authority";
import clsx from "clsx";
import { type ChangeEvent, forwardRef, useEffect } from "react";
import { InputProps } from "./input.types";
import { cn } from "../../utils";
import { useForm } from "../form";

export const inputConfig = cva(
  // common style of the input
  clsx(
    "bg-transparent border px-3 py-2 rounded-md w-full",
    "focus:outline outline-2 focus:outline-offset-2",
    "placeholder:opacity-70",
    "disabled:cursor-not-allowed disabled:opacity-60",
    "file:bg-transparent file:border-none file:text-sm file:text-white file:opacity-90",
  ),
  // style according to the input props
  {
    variants: {
      // style according to the input variant
      variant: {
        default: clsx(
          "border-gray-300",
          "focus:outline-light-primary",
          "disabled:bg-light-primary/10",
          "dark:border-gray-700 dark:text-white dark:focus:outline-dark-primary",
          "dark:focus:outline-dark-primary",
          "dark:disabled:bg-dark-primary/10",
        ),
        success: clsx(
          "border-green-300 text-green-500",
          "focus:outline-green-500",
          "placeholder:text-green-600",
          "file:text-green-500",
          "disabled:bg-green-500/10",
          "dark:border-green-900",
        ),
        warning: clsx(
          "border-yellow-300 text-yellow-500",
          "focus:outline-yellow-500",
          "placeholder:text-yellow-600",
          "file:text-yellow-500",
          "disabled:bg-yellow-500/10",
          "dark:border-yellow-900",
        ),
        error: clsx(
          "border-red-300 text-red-500",
          "focus:outline-red-500",
          "placeholder:text-red-600",
          "file:text-red-500",
          "disabled:bg-red-500/10",
          "dark:border-red-900",
        ),
      },
    },
    // default prop values
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, onChange, type = "text", variant, ...restProps } = props;

  const { handleValueChange } = useForm();

  // function to manage the value change in the input
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // checking whether input is mouted by Form component of not
    if (handleValueChange) {
      const id = event.target.id;
      const value = event.target.value;
      const min = event.target.min ? event.target.min : undefined;
      const max = event.target.max ? event.target.max : undefined;
      const pattern = event.target.pattern ? event.target.pattern : undefined;
      const required = event.target.required;

      handleValueChange(id, type, value, min, max, pattern, required);
    }

    if (onChange) onChange(event);
  };

  const {
    defaultValue = "",
    id,
    value = "",
    min,
    max,
    pattern,
    required = false,
  } = restProps;

  useEffect(() => {
    // setting formData with initial values values
    if (handleValueChange)
      handleValueChange(
        id,
        type,
        value.toString() || defaultValue.toString(),
        min,
        max,
        pattern,
        required,
      );
  }, [])

  return (
    <input
      className={cn(inputConfig({ className, variant }))}
      ref={ref}
      type={type}
      onChange={handleOnChange}
      {...restProps}
    />
  );
});

Input.displayName = "Input";
