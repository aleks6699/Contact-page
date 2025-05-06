import { Meta, StoryObj } from "@storybook/react";
import FormTextarea from "./FormTextarea";

const meta = {
  title: "Components/ContactForm/FormTextarea ",
  component: FormTextarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "message",
    name: "Message",
    placeholder: "Write your message...",
    required: false,
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
