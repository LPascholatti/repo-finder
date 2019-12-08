import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadReadme } from '../actions';
import RenderReadme from './RenderReadme';

class RenderReadmeContainer extends Component {

  componentDidMount() {
    this.props.loadReadme(this.props.repository.owner.login, this.props.repository.name)
  }

  render() {

    console.log("owner:", this.props.repository.owner.login)

    return (<RenderReadme
    readme={this.props.readme}
    />)
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository,
    readme: state.readme
  }
}

export default connect(mapStateToProps, {loadReadme})(RenderReadmeContainer)
