import React from "react";

import { GroovyImage } from "./GroovyImage";

export default {
  title: "Example/GroovyImage",
  component: GroovyImage,
};

const Template = (args) => <GroovyImage {...args} />;
export const Example = Template.bind({});
Example.args = {
  src: "/image.jpg",
  altText: "A statue of a man facepalming",
  aspectRatio: "1024 / 1541",
  maxWidth: "300px",
};
