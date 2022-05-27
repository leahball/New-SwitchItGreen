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
  subTitle:
    "Moving your money out of banks, energy companies and pensions that finance fossil fuels is the most effective, simple action you can take to fight the climate crisis.",
};
