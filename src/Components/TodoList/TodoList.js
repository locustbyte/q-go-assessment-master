import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import Instructions from '../Instructions/index';
import TodoAdd from '../TodoAdd/TodoAdd';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {

    filters = {
        ALL: 'ALL',
        COMPLETE: 'COMPLETE',
        INCOMPLETE: 'INCOMPLETE'
    }

    constructor() {
        super();
        this.state = {
            todos: this.initTodos(),
            filter: this.filters.ALL
        };

        this.toggleDone = this.toggleDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    initTodos() {
        return [
            {
                title: "Make sure items are completeable",
                completed: false,
                added: moment("2017-09-29").toISOString(),
                
                id: uuid.v4()
            },
            {
                title: "Add filters (Use HOC)",
                completed: false,
                added: moment("2017-09-29").toISOString(),
                
                id: uuid.v4()
            }
        ];
    }

    

    removeTodo(name, i){
        let todos = this.state.todos.slice();
        
        for(var ii = 0; ii < todos.length; ii += 1) {
            if(todos[ii].id === name) {
                
                todos.splice(ii, 1);
                this.setState({
                    todos
                });
                return ii;
            }
        }
        return -1;        
    }
    

    addTodo(title) {
        const todo = {
            title,
            completed: false,
            added: moment().toISOString(),
            
            id: uuid.v4()
        };
        this.setState({todos: this.state.todos.concat(todo)})
    }

    toggleDone(id) {
        console.log(id)
        this.setState({
            todos: this.state.todos.map(t => {
                t.completed = t.id === id ? !t.completed : t.completed
                return t;
            })
        })
    }

    renderTodos() {
        return this.state.todos.filter(v => {
            switch (this.state.filter) {
                case this.filters.COMPLETE:
                    return v.completed === true;
                case this.filters.INCOMPLETE:
                    return v.completed === false;
                default:
                    return true;
            }
        }).map(v =>
            <TodoItem
                key={v.id}
                
                todo={v} toggleDone={this.toggleDone} removeTodo={this.removeTodo}
                
            />
        );
    }

    handleFilter(filter) {
        this.setState({
            filter: this.filters[filter]
        });
    }

    renderFilters() {
        return Object.keys(this.filters).map(v =>
            <li
                key={v}
                className={this.state.filter === v ? "active" : ""}
                onClick={this.handleFilter.bind(this, v)}>
                {v}
            </li>
        );
    }

    render() {
        return (
            <div className={'itemCreator'}>
                <TodoAdd
                    addTodo={this.addTodo.bind(this)}
                    
                />
                <ul className={'itemsList-ul'}>
                    {this.renderTodos()}
                </ul>
                
                <ul className="filters">
                    <li>Showing: </li>
                    {this.renderFilters()}
                </ul>
                <Instructions />

            </div>
        );
    };
}

TodoList.defaultProps = {
    todo: {
        title: "Empty todo",
        
        completed: false
    },
    
};

TodoList.propTypes = {
    todo: React.PropTypes.object.isRequired,
    
};

export default TodoList;
