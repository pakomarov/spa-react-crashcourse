import React, {Component} from 'react';
import AddTodo from '../components/AddTodo';
import Loader from '../components/Loader';
import Todos from '../components/Todos';
import axios from 'axios';

class Main extends Component {
  state = {
    todos: [],
    isLoading: true,
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data,
        isLoading: false,
      }));
  }

  _onAddTodoSubmit = (title) => {
    this.setState({isLoading: true});
    axios.post('http://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false,
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data],
        isLoading: false,
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
    this.setState({isLoading: true});
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id),
        isLoading: false,
      }));
  }

  render() {
    return (
      <>
        <AddTodo onSubmit={this._onAddTodoSubmit}/>
        {this.state.isLoading ? (
            <Loader/>
          ) : (this.state.todos.length ? (
              <Todos
                todos={this.state.todos}
                toggleTodoItemComplete={this._toggleTodosTodoItemComplete}
                destroyTodoItem={this._destroyTodosTodoItem}
              />
            ) : (
              <p>No todos</p>
            )   
          )
        }
      </>
    );
  }
}

export default Main;
