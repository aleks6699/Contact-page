import { Meta, StoryObj } from "@storybook/react";
import ContactInformationItem from "./InformationItem";

const meta = {
  title: "Components/Contact/ContactInformationItem ",
  component: ContactInformationItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ContactInformationItem>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Email: Story = {
  args: {
    href: "#",
    iconSrc: "/email.svg",
    alt: "email",
    text: "demo@gmail.com",
  },
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
export const Phone: Story = {
  args: {
    href: "#",
    iconSrc: "/tel.svg",
    alt: "phone",
    text: "+1012 3456 789",
  },
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
export const Location: Story = {
  args: {
    href: "#",
    iconSrc: "/location.svg",
    alt: "location",
    text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
  },
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
