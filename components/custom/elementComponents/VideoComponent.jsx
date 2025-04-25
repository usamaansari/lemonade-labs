import React from 'react';

const VideoComponent = ({ style, url, content, outStyle }) => {
  return (
    <div style={outStyle}>
      <video
        src={url}
        style={style}
        controls
        autoPlay={false}
        muted
      >
        {content && <track kind="captions" srcLang="en" label="English" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
