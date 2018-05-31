import React from 'react';
import VideoListItem from './videoListItem';

const videoList = (props) => {

  const videoListItems = props.videos.map( (video, index) => <VideoListItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect}  />);

  return (
    <ul className="list-group">
      {videoListItems}
    </ul>
  );
}

export default videoList;
