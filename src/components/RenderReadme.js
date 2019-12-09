import React from "react";

export default function RenderReadme(props) {
  const { text } = props.readme;

  console.log("props", props);

  const readmeHtml = text;

  function createMarkup() {
    if (readmeHtml !== undefined) {
      return { __html: `${readmeHtml}` };
    }
  }

  return (
    <div className="repo-details">
      <h2>Readme</h2>
      <div className="render-readme">
        {!readmeHtml && "Loading Readme..."}
        {readmeHtml && <div dangerouslySetInnerHTML={createMarkup()}></div>}
      </div>
    </div>
  );
}
