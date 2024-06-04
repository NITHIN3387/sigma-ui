import type { Meta, StoryObj } from '@storybook/react'
import { Label } from 'sigma-ui'

const meta: Meta = {
  title: "Components/Label",
  component: Label,
  tags: ['autodocs'],
  args: {
    children: "Name:",
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultLabel: Story = {}

export const SuccessLabel: Story = {
  args: {
    variant: "success"
  }
}

export const WarningLabel: Story = {
  args: {
    variant: "warning"
  }
}

export const ErrorLabel: Story = {
  args: {
    variant: "error"
  }
}