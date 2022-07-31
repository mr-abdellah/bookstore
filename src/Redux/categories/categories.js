const CHECK_STATUS = 'checkStatus';

export const checkStatus = () => {
    type: CHECK_STATUS
}

const categoriesReducer = (state=[], action) => {
    switch (action.type) {
        case CHECK_STATUS:
            return [
                ...state,
                {
                    description: 'Under construction'
                }
            ]
        default: return state;
    }
}

export default categoriesReducer;