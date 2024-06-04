import type { HTMLAttributes, FormEvent, FormHTMLAttributes } from "react";

export interface FormDataType {
  [key: string]: {
    type: string,
    value: string,
    min?: string | number,
    max?: string | number,
    pattern?: string,
    required?: boolean
  };
}

// Form props type
export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: (event: FormEvent, formData?: {[key: string]: string}) => void
}

// FormGroup props type
export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  groupId: string;
}

// FormDescription props type
export interface FormDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export interface ErrorMessagesType {
  min?: string,
  max?: string,
  pattern?: string,
  required?: string,
}

// FormErrorMessage props type
export interface FormErrorMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {
    label: string;
    errorMessages?: ErrorMessagesType
  }

export interface ErrorType {
  [key: string]: "min" | "max" | "pattern" | "required" | false;
}

export type HandleValueChangeType = (
  id: string,
  type: string,
  value: string,
  min?: string | number,
  max?: string | number,
  pattern?: string,
  required?: boolean
) => void;

export type HandleFormSubmit = (
  event: FormEvent<Element>,
  formData?: {[key: string]: string} | undefined,
) => void

export interface FormContextType {
  errors: ErrorType;
  handleValueChange: HandleValueChangeType;
  formData: FormDataType;
}

export type ValidateType = (
  data: {
    type: string,
    value: string,
    min?: string | number,
    max?: string | number,
    pattern?: string,
    required?: boolean
  }
) => "min" | "max" | "pattern" | "required" | false
