import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: '',
  }

  _onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({ title: '' });
  }

  _onChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });

  render() {
    return (
      <form onSubmit={this._onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this._onChange}
        />
        <input 
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
