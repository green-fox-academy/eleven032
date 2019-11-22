import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchAccountsAction } from '../actions/fetchAccountsAction';

function ShowAccountList(props) {
  React.useEffect(
    props.fetchAccountsAction, []
  )
  // console.log(props.accounts);

  return (
    <View>
      <Text style={{ marginTop: 30 }}>Hello</Text>
      {props.accounts.map(function (account) {
        {/* console.log(account.depositName); */ }
        return <Text key={account.id}>{account.depositName}</Text>
      })}
    </View>
  )
}

const mapStateToProps = state => {
  return {
    accounts: state.fetchAccountsReducer.accounts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAccountsAction: () => { dispatch(fetchAccountsAction()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAccountList);
