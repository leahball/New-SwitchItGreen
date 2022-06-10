import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchCard from ".";

export default {
  title: "SearchCard",
  component: SearchCard,
} as ComponentMeta<typeof SearchCard>;

export const SearchCardStorybook: ComponentStory<typeof SearchCard> = (
  args
) => (
  <div style={{ width: "440px" }}>
    <SearchCard
      header="Coming May 2022"
      subHeader="Sign up to get notified"
      placeholder="Email"
      moreInfo="Click here to find out more"
    />
  </div>
);
