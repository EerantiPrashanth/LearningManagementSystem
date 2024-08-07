import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: '300',
    width: '450',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
