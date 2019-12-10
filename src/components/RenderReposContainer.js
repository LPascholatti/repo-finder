import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderRepos from './RenderRepos';

class RenderReposContainer extends Component {

  state = {
    page: 1
  }

  render() {
    console.log("this.props.time", this.props.time)
    return (<RenderRepos
    repositories={this.props.repositories}
    time={this.props.time}
    page={this.state.page}
    />
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  time: state.time,
  page: state.page
})

export default connect(mapStateToProps)(RenderReposContainer)
