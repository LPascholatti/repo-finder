import React from "react";

export default function RenderReadme(props) {
  const { text } = props.readme;

  console.log("props", props);

  const readmeHtml = text;

  function createMarkup() {
    if (readmeHtml !== undefined) { 
    return { __html: `${readmeHtml}` }};
  }

  return (
    <div className="render-readme">
      {!readmeHtml && "Loading Readme..."}
      {readmeHtml && <div dangerouslySetInnerHTML={createMarkup()}></div>}
    </div>
  );
}
