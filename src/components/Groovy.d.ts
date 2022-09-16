import type React from "react";
import type { ImageProps } from "./GroovyImage";

export declare const Groovy = (props: {
  /** The title of the component */
  title: string;
  /** The text content to be displayed */
  text?: string;
  /** An image to be displayed */
  image?: ImageProps;
  /** The CSS max-width of the component */
  maxWidth?: string;
}) => React.ReactElement;
