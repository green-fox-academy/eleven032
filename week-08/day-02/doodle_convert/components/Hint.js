import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const myModule = require('./db/data');

function Hint(props) {
    return (
        <View>
            <Text>{`Selected option: ${myModule.data[props.value]}`}</Text>
        </View>
    )
}

const mapStateToProps = state => ({
    value: state
});

export default connect(mapStateToProps)(Hint);