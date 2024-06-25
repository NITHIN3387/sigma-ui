"use client"

import {
  createContext,
  type FormEvent,
  forwardRef,
  useContext,
  useState,
} from "react";
import { cn } from "../../utils";
import type {
  ErrorType,
  FormContextType,
  FormDataType,
  FormProps,
  HandleValueChangeType,
} from "./form.types";
import { validate } from "./form.utils";

// context to share the errors and formData values
const FormContext = createContext<FormContextType>({
  errors: {},
  formData: {},
  handleValueChange: () => {},
});

export const useForm = (): FormContextType => useContext(FormContext);

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { children, className, onSubmit, ...restProps } = props;

  const [formData, setFormData] = useState<FormDataType>({});
  const [errors, setErrors] = useState<ErrorType>({});

  // function to handle the value change in the inputs
  const handleValueChange: HandleValueChangeType = (
    id,
    type,
    value,
    min,
    max,
    pattern,
    required,
  ) => {
    // setting errors to false at initial
    setErrors((pre) => ({
      ...pre,
      [id]: false,
    }));

    // setting the form data
    setFormData((pre) => ({
      ...pre,
      [id]: {
        type,
        value,
        min,
        max,
        pattern,
        required,
      },
    }));
  };

  // function to validate the form values
  const validateForm = () => {
    let valid = true;

    Object.keys(formData).forEach((key) => {
      const invalid = validate(formData[key]);

      setErrors((pre) => ({
        ...pre,
        [key]: invalid,
      }));

      if (invalid) valid = false;
    });

    return valid;
  };

  // function to handle the submition of the form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values: { [key: string]: string } = {};

    Object.keys(formData).forEach((key) => (values[key] = formData[key].value));

    if (validateForm() && onSubmit) onSubmit(event, values);
  };

  return (
    <FormContext.Provider value={{ errors, handleValueChange, formData }}>
      <form
        className={cn([className, "space-y-6"])}
        onSubmit={handleSubmit}
        noValidate
        ref={ref}
        {...restProps}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
});

Form.displayName = "Form";
