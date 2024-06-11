import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Input,
  TopNavbar,
  TopNavbarChildren,
  TopNavbarItem,
  TopNavbarList,
  TopNavbarTitle,
} from "sigma-ui";

const meta: Meta = {
  title: "Examples/TopNavbar",
  component: TopNavbar,
  tags: ["autodocs"],
  args: {},
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Top_Navbar: Story = {
  render: () => {
    const navList = [
      {
        label: "Documentation",
        url: "/iframe.html",
      },
      {
        label: "Components",
        url: "/components",
      },
      {
        label: "Examples",
        url: "/examples",
      },
    ];

    return (
      <TopNavbar>
        <TopNavbarTitle>SIGMA-UI</TopNavbarTitle>
        <TopNavbarList>
          {navList.map((item) => (
            <TopNavbarItem href={item.url} key={item.url}>{item.label}</TopNavbarItem>
          ))}
        </TopNavbarList>
        <TopNavbarChildren className="flex">
          <div className="flex gap-4">
            <Input
              id="search-bar"
              placeholder="Search anything here..."
              className="px-2 py-1"
            />
            <Button className="!m-0" type="submit" size="sm">
              Search
            </Button>
          </div>
        </TopNavbarChildren>
      </TopNavbar>
    );
  },
};
