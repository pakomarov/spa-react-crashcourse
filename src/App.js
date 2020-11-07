import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Wash dishes',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Walk dog',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Cooking',
        completed: false,
      },
    ],
  }

  _onAddTodoSubmit = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo]});
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
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id), 
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo onSubmit={this._onAddTodoSubmit}/>
          <Todos
            todos={this.state.todos}
            toggleTodoItemComplete={this._toggleTodosTodoItemComplete}
            destroyTodoItem={this._destroyTodosTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
