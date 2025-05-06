import { Meta, StoryObj } from "@storybook/react";
import ContactInformation from "./ContactInformation";

const meta = {
  title: "Components/Contact/ContactInformation  ",
  component: ContactInformation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ContactInformation>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
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
