import React from 'react';

const AudioComponent = ({ style, url, content, outStyle }) => {
  return (
    <div>
      <audio
       
        controls
       
      >
       <source src={url} type='audio/mp3'/>
      </audio>
    </div>
  );
};

export default AudioComponent;