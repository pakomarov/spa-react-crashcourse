import React, { Component } from 'react';

interface IAddTodoProps {
  onSubmit: (title: string) => void,
}

interface IAddTodoState {
  title: string,
}

export class AddTodo extends Component<IAddTodoProps, IAddTodoState> {
  state = {
    title: '',
  }

  private _onSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (this.state.title) {
      this.props.onSubmit(this.state.title);
      this.setState({ title: '' });
    }
  }

  private _onChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [evt.target.name]: evt.target.value } as Pick<IAddTodoState, keyof IAddTodoState>);
  }

  render() {
    return (
      <form onSubmit={this._onSubmit} style={{ display: 'flex' } as React.CSSProperties}>
        <input 
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' } as React.CSSProperties}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this._onChange}
        />
        <input 
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' } as React.CSSProperties}
        />
      </form>
    );
  }
}

export default AddTodo;
