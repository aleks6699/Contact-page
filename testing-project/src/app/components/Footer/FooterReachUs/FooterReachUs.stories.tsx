import FooterReachUs from "./FooterReachUs";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Footer/FooterReachUs",
  component: FooterReachUs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FooterReachUs>;

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
