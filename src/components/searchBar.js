import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      term: ''
    }

  }

  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }


  render(){

    return (
      <div className="search-bar">
        <input
          className="form-control"
          placeholder="type here to search videos"
          type="text"
          value={this.state.term}
          onChange={ (e) => this.onInputChange(e.target.value) }/>
      </div>
    );
  }

}

export default SearchBar;
