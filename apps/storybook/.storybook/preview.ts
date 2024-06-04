import "sigma-ui/styles.css"
import "../src/stories/styles/globals.css"
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#000' },
      ],
      default: 'dark'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
