import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderRepos from './RenderRepos';

class RenderReposContainer extends Component {
  render() {
    return (<RenderRepos
    repositories={this.props.repositories}
    />
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories
})

export default connect(mapStateToProps)(RenderReposContainer)
