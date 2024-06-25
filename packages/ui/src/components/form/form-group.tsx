"use client"

import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  type ReactNode,
  useContext,
} from "react";
import type { FormGroupProps } from "./form.types";
import { cn } from "../../utils";
import { useForm } from "./form";

// context to store the groupId value
const FormGroupContext = createContext<string>("");

export const useGroupId = () => useContext(FormGroupContext);

export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  (props, ref) => {
    const { children, className, groupId, ...restProps } = props;

    const { errors } = useForm();

    return (
      <FormGroupContext.Provider value={groupId}>
        <div
          className={cn([[className, "space-y-2"]])}
          ref={ref}
          {...restProps}
        >
          {
            // adding error variant props to the child components
            Children.map(children, (child) => {
              /*
                checking whether the input contain any error or not
                - if yes we will add the error variant to the child component
                  * only for Input and Label components
                _ else we will return the default children
              */
              if (
                isValidElement(child) &&
                errors[groupId] &&
                ((child.type as any).displayName === "Input" ||
                  (child.type as any).displayName === "Label")
              )
                return cloneElement(child, { variant: "error" } as any);

              return child;
            }) as ReactNode
          }
        </div>
      </FormGroupContext.Provider>
    );
  },
);

FormGroup.displayName = "FormGroup"