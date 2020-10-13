import React from 'react';
import VideoModel from './VideoModel'

const VideoList = ({videos}) => {
    const VideosList = videos.map((video) => {
        return <VideoModel video={video}/>
    });

    return <div className='compiled_videos_list'>{VideosList}</div>;
};
export default VideoList;