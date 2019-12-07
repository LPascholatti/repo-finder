import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderRepos from './RenderRepos';

class RenderReposContainer extends Component {

  state = {
    url: ''
  }

  render() {
    return (<RenderRepos
    repositories={this.props.repositories}
    url={this.state}
    />
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  name: state.name,
  url: state.url
})

export default connect(mapStateToProps)(RenderReposContainer)
