export default function fetchOptionsReducer(state = { accounts: [] }, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return { accounts: action.accounts };
    default:
      return state;
  }
}
