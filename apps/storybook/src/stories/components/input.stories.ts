import type { Meta, StoryObj } from '@storybook/react'
import { Input } from 'sigma-ui'

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "success", "warning", "error"]
    }
  },
  args: {
    placeholder: "Enter your Name",
    type: "text",
    variant: "default"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {}
}

export const SuccessInput: Story = {
  args: {
    placeholder: "Enter your photo",
    type: "file",
    variant: "success"
  }
}

export const WarningInput: Story = {
  args: {
    placeholder: "Enter your number",
    type: "number",
    variant: "warning"
  }
}

export const ErrorInput: Story = {
  args: {
    placeholder: "Enter your password",
    type: "password",
    variant: "error"
  }
}

export const DisabledInput: Story = {
  args: {
    value: "you connot edit this value",
    disabled: true
  }
}