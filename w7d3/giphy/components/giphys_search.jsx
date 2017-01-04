import React, { Component } from 'react';
import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';
import GiphysIndex from './giphys_index';

const mapStateToProps = state => ({
  giphys: state.giphys
});

const mapDispatchToProps = dispatch => {
  return { fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
