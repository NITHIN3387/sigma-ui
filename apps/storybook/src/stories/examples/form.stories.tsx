import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Form,
  FormDescription,
  FormErrorMessage,
  FormGroup,
  HandleFormSubmit,
  Input,
  Label,
} from "sigma-ui";

const meta: Meta = {
  title: "Examples/Form",
  component: Form,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleForm: Story = {
  render: () => {
    const handleFormSubmit: HandleFormSubmit = (event, formData) => {
      event.preventDefault();

      console.log(formData);
    };

    return (
      <Form onSubmit={handleFormSubmit}>
        <div className="grid sm:grid-cols-3 gap-4">
          <FormGroup className="sm:col-span-2" groupId="first-name">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" min={3} placeholder="Enter your first name" required />
            <FormErrorMessage label="first name" />
          </FormGroup>

          <FormGroup groupId="last-name">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" min={1} placeholder="Enter your last name" required />
            <FormErrorMessage label="last name" />
          </FormGroup>
        </div>

        <FormGroup groupId="email">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter you email id"
            type="email"
            required
          />
          <FormErrorMessage label="email id" />
          <FormDescription color="#FF0000">
            We won't share your email id to anyone.
          </FormDescription>
        </FormGroup>

        <FormGroup groupId="password">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter the password"
            type="password"
            required
          />
          <FormErrorMessage label="password" />
        </FormGroup>

        <div className="space-x-4">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="outlined">
            Reset
          </Button>
        </div>
      </Form>
    );
  },
};
