import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRepositories } from '../actions';
import SearchBarForm from './SearchBarForm'

class SearchBarContainer extends Component {

  state = {
    name: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.loadRepositories(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (<SearchBarForm
    onSubmit={this.onSubmit}
    onChange={this.onChange}
    values={this.state}
    />)
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  name: state.name
})

export default connect(mapStateToProps, {loadRepositories})(SearchBarContainer)
