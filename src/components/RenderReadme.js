import React from "react";

export default function RenderReadme(props) {
  const { text } = props.readme;

  console.log("props", props);

  function createMarkup() {
    return {__html: `${text}`};
  }

  return (
    <div className="render-readme">
      {!text && "Loading Readme..."}
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}
