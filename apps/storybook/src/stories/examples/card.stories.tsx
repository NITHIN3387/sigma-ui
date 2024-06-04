import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "sigma-ui";

const meta: Meta = {
  title: "Examples/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCard: Story = {
  render: () => {
    return (
      <Card>
        <div className="flex justify-center items-center text-3xl font-bold text-gray-500 bg-gray-200 dark:bg-gray-900 w-72 h-52 rounded-sm">
          PHOTO
        </div>

        <CardHeader>
          <CardTitle>Song Name</CardTitle>
          <CardDescription>Artist Name</CardDescription>
        </CardHeader>

        <CardBody>
          <p className="w-72">
            Lorem ipsum dolor sit amet consectetu adipisicing elit. Numquam
            quam dolores saepe doloremque adipisci architecto.
          </p>
        </CardBody>

        <CardFooter>
          <Button>Play Music</Button>
        </CardFooter>
      </Card>
    );
  },
};
