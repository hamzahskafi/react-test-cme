import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../../api/youtube.js'
import VideoList from './VideoList'
import VideoPreview from './VideoPreview'

class Search extends Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
    };

    handleSelectVideo = (video) => {
        this.setState({ selectedVideo: video })
    }


    render() {
        return (
            <div className="main_container">
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className="video_list">
                            <VideoList handleSelectVideo={this.handleSelectVideo} videos={this.state.videos}/>
                    </div>
                <div className="video_preview">
                        <VideoPreview video={this.state.selectedVideo}/>
                    </div>
            </div>
        )
    }
}
export default Search;