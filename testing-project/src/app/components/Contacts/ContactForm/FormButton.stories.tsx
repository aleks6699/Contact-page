import { Meta, StoryObj } from "@storybook/react";
import FormButton from "./FormButton";

const meta = {
  title: "Components/ContactForm/FormButton",
  component: FormButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    isPending: false, 
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
