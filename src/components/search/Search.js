import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../../api/youtube.js'
import VideoList from './VideoList'

class Search extends Component{

    state = {
        videos: []
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


    render() {
        return (
            <div className="main_container">
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className="video_list">
                            <VideoList videos={this.state.videos}/>
                    </div>
            </div>
        )
    }
}
export default Search;