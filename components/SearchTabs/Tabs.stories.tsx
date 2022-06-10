import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchTabs from ".";

export default {
  title: "SearchTabs",
  component: SearchTabs,
} as ComponentMeta<typeof SearchTabs>;

export const SearchTabsStorybook: ComponentStory<typeof SearchTabs> = (args) => <SearchTabs />;
