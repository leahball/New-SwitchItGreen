import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Hero } from "./Hero";

export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Hero",
};
