import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggler} from 'sigma-ui'

const meta: Meta = {
  title: "Components/ThemeToggler",
  component: ThemeToggler,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const ThemesToggler: Story = {}