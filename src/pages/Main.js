import React, {Component} from 'react';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import axios from 'axios';

class Main extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data,
      }));
  }

  _onAddTodoSubmit = (title) => {
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false,
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data],
      }));
  }

  _toggleTodosTodoItemComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  _destroyTodosTodoItem = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id), 
      }));
  }

  render() {
    return (
      <>
        <AddTodo onSubmit={this._onAddTodoSubmit}/>
        <Todos
          todos={this.state.todos}
          toggleTodoItemComplete={this._toggleTodosTodoItemComplete}
          destroyTodoItem={this._destroyTodosTodoItem}
        />
      </>
    );
  }
}

export default Main;
