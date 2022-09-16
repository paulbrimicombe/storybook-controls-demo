import React from "react";

import { Groovy } from "./Groovy";

export default {
  title: "Example/Groovy",
  component: Groovy,
};

const Template = (args) => <Groovy {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  title: "This is Groovy!",
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: "❮Il Dolore❯",
  text: 'This statue is "Il Dolore" by Emilio Gallori from the Palazzo Pubblico in Siena.\nDoesn\'t he look Groovy in this component?',
  maxWidth: "40em",
  img: {
    src: "/image.jpg",
    altText: "A photo of a facepalming statue (Il dolore by Emilio Gallori)",
    width: "25em",
    maxHeight: "25em",
    aspectRatio: "1024 / 1541",
    objectFit: "cover",
    objectPosition: "0 10%",
  },
};
