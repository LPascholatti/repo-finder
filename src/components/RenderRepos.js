import React, { Component } from 'react'

export default class RenderRepos extends Component {

  render() {

    const { repositories } = this.props;

    return (
      <div className="repositories-result">
        <h2>Repositories</h2>
        <h3>{`You found ${repositories.total_count} repositories`}</h3>
      </div>
    )
  }
}
