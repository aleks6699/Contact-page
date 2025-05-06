import { Meta, StoryObj } from "@storybook/react";
import Contact from "./page";

const meta = {
  title: "Page/ContactPage",
  component: Contact,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Contact>;

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
