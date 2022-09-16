import React from "react";
import "./groovyimage.css";

/**
 * @typedef {Object} GroovyImageProps
 * @property {string} src The source URL of the image content
 * @property {string} altText The alt text for the image
 * @property {string} aspectRatio The original image aspect ratio (expressed as "x / y")
 * @property {string=} width The CSS width of the image
 * @property {string=} height The CSS height of the image
 * @property {string=} maxWidth The CSS max-width of the image
 * @property {string=} maxHeight The CSS max-height of the image
 * @property {string=} objectFit The CSS object-fit of the image
 * @property {string=} objectPosition The CSS object-position of the image
 */

/**
 * `GroovyImage` - displays an image groovily <br/>
 * - Also serves as a demo to show how `JSDoc` comments can be used to autogenerate Storybook controls
 * @type {(props: GroovyImageProps) => React.ReactElement}
 */
export const GroovyImage = ({
  src,
  altText,
  width = "auto",
  height = "auto",
  maxWidth,
  maxHeight,
  aspectRatio,
  objectFit,
  objectPosition,
}) => {
  const style = {
    aspectRatio,
    height,
    width,
    maxWidth,
    maxHeight,
    objectFit,
    objectPosition,
  };
  return (
    <div
      className="groovy-image"
      style={{
        aspectRatio,
        width: width === "auto" ? "100%" : width,
        height,
        maxWidth,
        maxHeight,
      }}
    >
      <img
        className="img"
        src={src}
        alt={altText}
        width={width}
        height={height}
        style={style}
      />
    </div>
  );
};
