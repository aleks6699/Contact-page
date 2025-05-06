import { Footer } from "./Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Footer/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
