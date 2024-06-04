import type { ValidateType } from "./form.types";

// funtion to validate the values of the form according to it's type
export const validate: ValidateType = (data) => {
  const value = data.value.trim()

  // checkin whether value is empty or not
  if (data.required && !value.length) return "required"

  // checking whether value has required minimum length
  if (data.min && value.length < parseInt(data.min.toString())) return "min"

  // checking whether value has exceeded the maximum length
  if (data.max && value.length > parseInt(data.max.toString())) return "max"

  // checking whether input type is email or other
  if (data.type === "email") {
    // default patter for email is: example@somthing.anything
    const pattern = new RegExp(data.pattern || "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    if (!value.match(pattern)) return "pattern"   // checking whether pattern is matching or not
  } else if (data.pattern) {
    const regex = new RegExp(data.pattern)
    if (!regex.test(value)) return "pattern"    // checking whether pattern is matching or not
  }

  // returns false if it passes all the test cases
  return false
}