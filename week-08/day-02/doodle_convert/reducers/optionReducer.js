export default function optionReducer(state = 0, action) {
    switch (action.type) {
        case 'OPTION_VALUE':
            return action.value;

        default:
            return state;
    }
}