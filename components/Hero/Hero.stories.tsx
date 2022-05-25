import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from ".";

export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const HeroStorybook: ComponentStory<typeof Hero> = (args) => {
  return <Hero {...args} />;
};

HeroStorybook.args = {
  title: "Hello Hero",
  subTitle: "Here is a catchy little subtitle. Lorem ipsum...",
};
