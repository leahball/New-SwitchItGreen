import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Results from ".";

export default {
  title: "Results",
  component: Results,
} as ComponentMeta<typeof Results>;

export const ResultsStorybook: ComponentStory<typeof Results> = (args) => (
  <Results
    result="The results are in for Chase.. and your Bank scored"
    resultScore="1 out 0f 5"
    resultHeader="Yikes! That’s bad… so what can you do?"
    resultCopy="Switching your money to a different provider could help fund new renewable energy projects, and strip fossil fuel providers of the cash they need to operate. Click below to discover the best climate-friendly alternatives for you."
  />
);
