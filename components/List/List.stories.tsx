import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import List from ".";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

export const ListStorybook: ComponentStory<typeof List> = (args) => <List />;
