export default function reducer(state = {
    todos: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case 'FETCH_TODOS': {
            return {...state, fetching: true};
        }
        case 'FETCH_TODOS_FULFILLED': {
            return {...state, fetching: false, fetched: true, todos: action.payload};
        }
        case 'FETCH_TODO_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
    }
    return state;
};
