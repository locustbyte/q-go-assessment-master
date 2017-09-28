import React from 'react';
import Header from '../Header/index';

import TodoList from '../TodoList/TodoList';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header />
                <div>
                    <TodoList />

                </div>
            </div>
        );
    }
}

export default App;
