const ADD_BOOK = 'addBook';
const REMOVE_BOOK = 'removeBook';

let initialCount = 0;

const addBook = (title) => ({
    type: ADD_BOOK,
    id: ++initialCount,
    title
})

const removeBook = (id) => ({
    type: REMOVE_BOOK,
    id
})

const bookReducer = (state = [], action) => {

    switch (action.type) {

        case ADD_BOOK:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ];

        case REMOVE_BOOK:
            return state.filter(book => book.id !== action.id)

        default: return state
    }
}

export {addBook, removeBook}

export default bookReducer;