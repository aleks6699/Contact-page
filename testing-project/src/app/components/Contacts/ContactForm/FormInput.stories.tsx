import { Meta, StoryObj } from "@storybook/react";
import FormInput from "./FormImput";

const meta = {
  title: "Components/ContactForm/FormInput ",
  component: FormInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Name: Story = {
  args: {
    id: "name",
    name: "First Name",
    type: "text",
    placeholder: "Alex",
    required: true,
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
export const Surname: Story = {
  args: {
    id: "surname",
    name: "Last Name",
    type: "text",
    placeholder: "Alex",
    required: true,
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
export const Email: Story = {
  args: {
    id: "email",
    name: "Email",
    type: "email",
    placeholder: "aleks@gmail.com",
    required: true,
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
export const Phone: Story = {
  args: {
    id: "tel",
    name: "Phone Number",
    type: "tel",
    placeholder: "+33353455555553",
    required: true,
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
