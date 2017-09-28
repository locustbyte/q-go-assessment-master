import React from 'react';

class TodoAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
    }

    initState() {
        this.setState({
            
            formInput: "",
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.formInput !== "") {
            this.props.addTodo(this.state.formInput);
            this.initState();
            // this.refs.title.focus();
        } else {
            alert("Can't add an empty todo!");
        }
    }

    componentWillMount() {
        this.initState();
    }

  

    handleFormInputChange(e) {
        const text = e.target.value;
        this.setState({
            formInput: text
        });
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input autoFocus className={'itemCreator-input'} type="text" value={this.state.formInput} placeholder="What do you need to do?" onChange={this.handleFormInputChange}/>
                
                <input type="submit" className={'itemCreator-button'} value="Add Task" />
            </form>
        );
    };
}

TodoAdd.defaultProps = {
    addTodo: () => {alert('Empty')},
};

export default TodoAdd;
