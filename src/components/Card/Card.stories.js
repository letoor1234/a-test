import React from "react";
import Card from "./Card";

export default {
  component: Card,
  title: "Card",
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  images: ["https://via.placeholder.com/150"],
  title: "Card Title",
  items: ["Item 1", "Item 2", "Item 3"],
  paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  state: "DEFAULT",
};

export const Hovered = Template.bind({});
Hovered.args = {
  images: ["https://via.placeholder.com/150"],
  title: "Card Title",
  items: ["Item 1", "Item 2", "Item 3"],
  paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  state: "HOVER",
};

export const TwoImages = Template.bind({});
TwoImages.args = {
  images: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ],
  title: "Card Title",
  items: ["Item 1", "Item 2", "Item 3"],
  paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  state: "DEFAULT",
};

export const NoItems = Template.bind({});
NoItems.args = {
  images: ["https://via.placeholder.com/150"],
  title: "Card Title",
  items: [],
  paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  state: "DEFAULT",
};

export const TwoParagraphs = Template.bind({});
TwoParagraphs.args = {
  images: ["https://via.placeholder.com/150"],
  title: "Card Title",
  items: [],
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  state: "DEFAULT",
};
