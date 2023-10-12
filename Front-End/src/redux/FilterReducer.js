// Reducer for the Filter functionality to manage state with Redux

let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === 'ADD_FILTER') 
        return [
            ...state,
            {
                id : ++lastId,
                description: action.payload.description
            }
        ];

    else if (action.type === 'REMOVE_FILTER')
        return state.filter(item => item.description !== action.payload.description);

    return state;
}
