import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonTheme } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    children: "CLEAR",
    theme: ButtonTheme.CLEAR,
  },
};
export const DEFAULT: Story = {
  args: {
    children: "DEFAULT",
    theme: ButtonTheme.DEFAULT,
  },
};
export const REGISTER: Story = {
  args: {
    children: "REGISTER",
    theme: ButtonTheme.REGISTER,
  },
};
