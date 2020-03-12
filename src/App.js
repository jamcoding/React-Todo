import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todosOriginal = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todosOriginal 
    }
  }

  // setState for toggled items
  toggleCompleted = todoId => {
    console.log('toggleId: ', todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }
  
  addTodo = taskItem => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task: taskItem, id: Date.now(), completed: false }
      ]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos} 
          toggleComplete={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
