import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRepository } from '../actions'
import RepoDetails from './RenderRepos'

class RepoDetailsContainer extends Component {

  componentDidMount(){
    this.props.loadRepository(this.props.name)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect()(RepoDetailsContainer)
