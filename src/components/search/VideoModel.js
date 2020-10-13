import React from 'react';

const VideoModel = ({ handleSelectVideo, video}) => {
    return (
        <div className='video_item' onClick={ () => handleSelectVideo(video)}>
            <img className='video_image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.channelTitle}/>
            <div className='video_information'>
                <div className='video_title'>{video.snippet.title}</div>
                <div className='video_description'>{video.snippet.description}</div>
            </div>
        </div>
    )
};
export default VideoModel;