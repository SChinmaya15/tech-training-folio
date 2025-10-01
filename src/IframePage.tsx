import React from "react";

interface IframePageProps {
  url: string;
}

const IframePage: React.FC<IframePageProps> = ({ url }) => (
  <div style={{ width: "100%", height: "100vh" }}>
    <iframe
      src={url}
      title="Embedded Page"
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  </div>
);

export default IframePage;