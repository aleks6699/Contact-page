import { Meta, StoryObj } from "@storybook/react";
import HeaderButtons from "./HeaderButtons";
const meta = {
  title: "Components/Header/HeaderButtons",
  component: HeaderButtons,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderButtons>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto",  padding: "20px",  backgroundColor: "pink"}}>
        <Story />
      </div>
    ),
  ],
};
