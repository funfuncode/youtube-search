import React from 'react';

const videoDetail = ({ video }) => {

  if(!video){
    return <p>Loading...</p>;
  }

  const url = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default videoDetail;
