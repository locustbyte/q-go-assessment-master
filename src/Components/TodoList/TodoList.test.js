import React from 'react';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';
import TodoList from './TodoList';

import uuid from 'uuid';
import moment from 'moment';

const todos = [{
    title: "Call the evangelist",
    completed: true,
    added: moment().toISOString(),
    category: 2,
    id: uuid.v4()
}];

const categories = [
    "Private",
    "Work",
    "Free time",
    "School",
    "Shopping"
];

function createNodeMock(element) {
    return '[ref object]';
}

describe('<TodoList />', () =>{

    it('should match its empty snapshot', () => {
        const tree = renderer.create(
            <TodoList />, {createNodeMock}
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
