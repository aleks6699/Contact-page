import { Meta, StoryObj } from "@storybook/react";
import ContactForm from "./ContactFrom";


const meta = {
  title: "Components/ContactForm/ContactForm ",
  component:  ContactForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof  ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
 
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto",  padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
