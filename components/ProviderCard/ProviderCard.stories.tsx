import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProviderCard from ".";

export default {
  title: "ProviderCard",
  component: ProviderCard,
} as ComponentMeta<typeof ProviderCard>;

export const ProviderCardStorybook: ComponentStory<typeof ProviderCard> = (args) => (
  <ProviderCard />
);