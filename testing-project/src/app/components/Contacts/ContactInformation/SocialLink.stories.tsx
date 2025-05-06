import { Meta, StoryObj } from "@storybook/react";
import SocialLink from "./SocialLink";
import { IconsDiscord, IconsInstagram, IconsTwitter } from "../../Icons/Icons";

const meta = {
  title: "Components/Contact/SocialLink",
  component: SocialLink,
  tags: ["autodocs"],
} satisfies Meta<typeof SocialLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Instagram: Story = {
  args: {
    href: "https://www.instagram.com/",
    children:   <IconsInstagram />,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto",  padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Twitter: Story = {
  args: {
    href: "https://www.twitter.com/",
    children: <IconsTwitter />,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto",  padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
}
export const Discord: Story = {
  args: {
    href: "https://www.discord.com/",
    children: <IconsDiscord />,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto",  padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
}