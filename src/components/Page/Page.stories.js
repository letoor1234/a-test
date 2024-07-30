import React from "react";
import Page from "./Page";
import * as CardStories from "../Card/Card.stories";

export default {
  component: Page,
  title: "Page",
  decorators: [
    (Story) => (
      <div className="w-full h-full flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Page Title",
  cards: [
    {
      ...CardStories.Default.args,
    },
    {
      ...CardStories.TwoImages.args,
    },
    {
      ...CardStories.NoItems.args,
    },
    {
      ...CardStories.TwoParagraphs.args,
    },
  ],
};
