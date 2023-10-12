// Reducer for the Column selection functionality to manage state with Redux

export default function reducer(state = [], action) {
    if (action.type === 'ADD_RENDERING_DATA') 
        return [
            ...state,
            {
                description: action.payload.description
            }
        ];

    else if (action.type === 'REMOVE_RENDERING_DATA')
        return state.filter(item => item.description !== action.payload.description);

    return state;
}
