import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import List from ".";

export default {
  title: "List",
  component: List,
} as ComponentMeta<typeof List>;

export const ListStorybook: ComponentStory<typeof List> = (args) => <List 
listCheck="This is a list item with a checkmark"
listNone="This is a list with an x-mark"
/>;
