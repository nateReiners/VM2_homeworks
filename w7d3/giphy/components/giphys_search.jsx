import React, { Component } from 'react';
import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  componentDidMount(searchTerm) {
    this.props.fetchSearchGiphys(searchTerm)
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(" ").join("+");
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    let {giphys} = this.props;

    return (
      <div>
        <form className='search-bar'>
          <input value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
        </form>
      </div>
    );
  }
}

export default GiphysSearch;
