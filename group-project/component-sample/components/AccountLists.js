import React from 'react';
import { Card, CardItem, Text, Body, Content } from 'native-base';

import { accounts } from '../db/data';

function AccountList() {
  return (
    accounts.map(account => {
      return (<Card key={account.account_id}>
        <CardItem>
          <Text>{account.account_id}{"\n"}{"\n"}</Text>
          <Text>{account.account_name}</Text>
        </CardItem>
      </Card>)
    })
  )
}

export default AccountList;