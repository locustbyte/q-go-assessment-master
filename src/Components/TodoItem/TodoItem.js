import React from 'react';
import moment from 'moment';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this, this.props.todo.id);
        this.handleClickDelete = this.handleClickDelete.bind(this, this.props.todo.id);
    }

    handleClick(id) {
        this.props.toggleDone(id);
    }

    handleClickDelete(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <li className={`completed-${this.props.todo.completed}`}>
                <input type="checkbox" onClick={this.handleClick} /><strong>TASK:</strong> {this.props.todo.title} <span className="added">added {moment(this.props.todo.added).fromNow()}</span> <span onClick={this.handleClickDelete} ><i className={'fa fa-minus-circle'} aria-hidden="true"></i> DELETE</span>
            </li>
        );
    };
}

TodoItem.defaultProps = {
  todo: {
      title: "Empty todo",
      added: moment(),
      completed: false
  },
  
};

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
};

export default TodoItem;
