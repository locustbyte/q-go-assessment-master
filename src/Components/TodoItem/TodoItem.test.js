import React from 'react';
import renderer from 'react-test-renderer';

import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

import uuid from 'uuid';
import moment from 'moment';

const todo = {
    title: "Call the evangelist",
    completed: true,
    added: moment().toISOString(),
    category: 2,
    id: uuid.v4()
};

const categories = [
    "Private",
    "Work",
    "Free time",
    "School",
    "Shopping"
];

describe('<TodoItem />', () =>{

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoItem todo={todo} categories={categories} />, div);
    });

    it('should match its empty snapshot', () => {
        const tree = renderer.create(
            <TodoItem />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render a todo item with a classname', () => {
        const tree = renderer.create(
            <TodoItem todo={todo} categories={categories} ></TodoItem>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should attach an onclick handler passed in', () => {
        const tree = renderer.create(
            <TodoItem todo={todo} categories={categories} onClick={() => {}}></TodoItem>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    it('should render its children', () => {
        const tree = renderer.create(
            <TodoItem todo={todo} categories={categories}>a child here 👶🏻</TodoItem>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
