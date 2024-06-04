import { Button } from "sigma-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      type: "string"
    },
    size: {
      control: "radio",
      options: ["sm", "default", "md", "lg"]
    },
    variant: {
      control: "radio",
      options: ["default", "outlined", "ghost"]
    }
  },
  args: {
    children: "Button",
    size: "default",
    variant: "default",
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const SolidButton: Story = {
  args: {
    variant: "default",
  }
}

export const OutlinedButton: Story = {
  args: {
    variant: "outlined",
  }
}

export const GhostButton: Story = {
  args: {
    variant: "ghost",
  }
}

export const CustomColorButton: Story = {
  args: {
    color: "#0069FF",
  }
}

export const DisabledButton: Story = {
  args: {
    variant: "default",
    disabled: true
  }
}