import { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./NavMenu";
const meta = {
  title: "Components/Header/NavMenu",
  component: NavMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof NavMenu>;
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
