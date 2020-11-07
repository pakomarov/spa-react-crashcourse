import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true,
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: false,
      },
      {
        id: 3,
        title: 'Walk dog',
        completed: true,
      },
      {
        id: 4,
        title: 'Cooking',
        completed: false,
      },
    ],
  }

  _toggleTodosTodoItemComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleTodoItemComplete={this._toggleTodosTodoItemComplete} />
      </div>
    );
  }
}

export default App;
