import React from "react";

type YouTubeVideoPlayerProps = {
  src: string;
};

export const YouTubeVideoPlayer = ({ src }: YouTubeVideoPlayerProps) => (
  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
