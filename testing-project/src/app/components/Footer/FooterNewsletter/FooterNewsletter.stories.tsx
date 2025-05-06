import { Meta, StoryObj } from "@storybook/react";
import FooterNewsletter from "./FooterNewsletter";

const meta = {
  title: "Components/Footer/FooterNewsletter",
  component: FooterNewsletter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FooterNewsletter>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto", backgroundColor: "black", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
