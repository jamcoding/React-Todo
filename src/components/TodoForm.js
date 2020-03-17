import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskItem: ''
        };
    }

    handleChanges = e => {
        this.setState({ taskItem: e.target.value });
    };

    handleAddTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.taskItem);
    }

    render () {
        return (
            <form onSubmit={this.handleAddTodo} >
                <input 
                    type='text' 
                    name='item' 
                    placeholder="add todo"
                    value={this.state.taskItem}
                    onChange={this.handleChanges}
                />
                <button>Add todo</button>
            </form>
        )
    }
}

export default TodoForm;
