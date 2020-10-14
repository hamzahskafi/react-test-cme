import React from 'react';

const VideoPreview = ({ video }) => {
    if (video == null) {
      return <div className="video_placeholder">
            <h3>Initiate a search and click on a video result to preview here...</h3>
        </div>;
    }
    else{
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
              <div>
                <iframe className="video_player" src={videoUrl}  title="Video player"/>
              </div>
              <div className="video_preview_info">
                <p className="video_preview_title">{video.snippet.title}</p>
                <p className="video_preview_channel">{video.snippet.channelTitle}</p>
                <p className="video_preview_description">{video.snippet.description}</p>
              </div>
            </div>
          );
    }
}

export default VideoPreview;