import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Components/Header/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto",  padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};
