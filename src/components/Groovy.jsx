import React from "react";
import { GroovyImage } from "./GroovyImage";
import "./groovy.css";

/**
 * `Groovy` - a groovy way to display a title, an image and a caption. <br/>
 * - Also serves as a demo to show how `.d.ts` files can be used to autogenerate
 * Storybook Controls.
 * @type {import('./Groovy').Groovy}
 */
export const Groovy = ({ title, text = "", img, maxWidth }) => {
  return (
    <div className="groovy" style={{ maxWidth }}>
      <h1>{title}</h1>
      {img && <GroovyImage {...img} />}
      {text && (
        <section>
          {text.split("\n").map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </section>
      )}
    </div>
  );
};
