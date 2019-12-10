import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderRepos from './RenderRepos';

class RenderReposContainer extends Component {

  state = {
    time: this.props.time
  }

  render() {
    console.log("this.props.time", this.props.time)
    return (<RenderRepos
    repositories={this.props.repositories}
    time={this.state.time}
    />
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  time: state.time
})

export default connect(mapStateToProps)(RenderReposContainer)
