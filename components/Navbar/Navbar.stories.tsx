import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from ".";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const NavbarStorybook: ComponentStory<typeof Navbar> = (args) => (
  <Navbar />
);
