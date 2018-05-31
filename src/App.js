import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDlDcFP8l6nXXeSTt-BOmOO8MT8C4SRUJU';


class App extends Component {

  constructor(props){
    super(props);

    this.videoSelectHandler = this.videoSelectHandler.bind(this);
    this.videoSearchHandler = this.videoSearchHandler.bind(this);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearchHandler('Skiing');
  }

  videoSearchHandler(term){
    YTSearch( { key: API_KEY, term: term}, (videos) => {
      this.setState( { videos, selectedVideo: videos[0] } );
    });
  }

  videoSelectHandler(videoId){
    const [ selectedVideo ] = this.state.videos.filter( (video) => video.id.videoId === videoId);
    this.setState( { selectedVideo} );
  }

  render(){
    const videoSearch = _.debounce(this.videoSearchHandler, 1000);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 px-0 my-3">
            <SearchBar term={this.state.term} onSearchTermChange={videoSearch}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-4">
            <VideoList videos={this.state.videos} onVideoSelect={this.videoSelectHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
