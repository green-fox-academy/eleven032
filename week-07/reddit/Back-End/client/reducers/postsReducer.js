export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_POST':
            return [...state, {
                title: action.title,
                url: action.url
            }]
        default:
            return state;
    }
}