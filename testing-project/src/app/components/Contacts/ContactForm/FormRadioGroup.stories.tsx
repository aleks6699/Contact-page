import { Meta, StoryObj } from "@storybook/react";
import FormRadioGroup from "./FormRadioGroup";

const meta = {
  title: "Components/ContactForm/FormRadioGroup ",
  component: FormRadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Sample Title",
    options: ["Option 1", "Option 2", "Option 3"],
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
