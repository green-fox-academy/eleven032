function fetchAccountsAction() {
  return async function (dispatch) {
    const result = await fetch('http://10.22.18.27:3000/deposit');
    const data = await result.json();
    dispatch({
      type: 'FETCH_ACCOUNTS',
      accounts: data
    })
  }
}

export { fetchAccountsAction };
