"use client"

import { forwardRef } from "react";
import type { ErrorMessagesType, FormErrorMessageProps } from "./form.types";
import { cn } from "../../utils";
import { useForm } from "./form";
import { useGroupId } from "./form-group";

export const FormErrorMessage = forwardRef<
  HTMLDivElement,
  FormErrorMessageProps
>((props, ref) => {
  const {
    children,
    className,
    errorMessages = {},
    label,
    ...restProps
  } = props;

  const { errors, formData } = useForm();
  const groupId = useGroupId();

  // default error messages
  const defaultErrorMessages: ErrorMessagesType = {
    min: `${label} must be atleast ${formData[groupId]?.min} charectors`,
    max: `${label} must be less than ${formData[groupId]?.max} charectors`,
    pattern: `please enter the valid ${label}`,
    required: `please enter your ${label}`,
  };

  return (
    <p
      className={cn([[className, "text-red-500 text-sm"]])}
      ref={ref}
      {...restProps}
    >
      {(errors[groupId]   // checking whether any error message is their to display
        ? errorMessages[
            errors[groupId] as "min" | "max" | "pattern" | "required"
          ] ||   // displays the default error message if user din't define the error messages
          defaultErrorMessages[
            errors[groupId] as "min" | "max" | "pattern" | "required"
          ]
        : null) || children}  {/* childrens are the set of custom error logic and error messages */}
    </p>
  );
});

FormErrorMessage.displayName = "FormErrorMessage"