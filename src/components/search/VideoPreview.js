import React from 'react';

const VideoPreview = ({ video }) => {
    if (video === null) {
      return <div className="video_placeholder">
            <h3>Click on a video result to preview here...</h3>
        </div>;
    }
    else{
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
              <div className="video_player">
                <iframe src={videoUrl}  title="Video player" />
              </div>
              <div className="video_preview_info">
                <h3 className="video_preview_title">{video.snippet.title}</h3>
                <h6 className="video_preview_channel">{video.snippet.channelTitle}</h6>
                <p className="video_preview_description">{video.snippet.description}</p>
              </div>
            </div>
          );
    }
}

export default VideoPreview;