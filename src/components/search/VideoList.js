import React from 'react';
import VideoModel from './VideoModel'

const VideoList = ({ handleSelectVideo, videos}) => {
    
    const VideosList = videos.map((video) => {
        return <VideoModel handleSelectVideo={handleSelectVideo} video={video}/>
    });

    return <div className='compiled_videos_list'>{VideosList}</div>;
};
export default VideoList;