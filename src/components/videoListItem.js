import React from 'react';

const VideoListItem = ( props ) => {

  const imageUrl = props.video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item" onClick={ () => props.onVideoSelect(props.video.id.videoId) }>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body ml-3">
          <div className="media-heading">
            <h6 className="text-secondary">{props.video.snippet.title}</h6>
          </div>


        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
