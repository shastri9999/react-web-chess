import { configure } from "@storybook/react";

const loadStories = () => {
  require("../src/components/square/story");
};

configure(loadStories, module);
