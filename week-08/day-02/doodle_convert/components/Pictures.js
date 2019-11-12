import React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

const myModule = require('./db/data');

function Pictures(props) {
    return (
        <View>
            <Image style={{ width: 300, height: 300 }}
                source={{ uri: myModule.pics[props.value] }} />
        </View>
    )
}

const mapStateToProps = state => ({
    value: state
});

export default connect(mapStateToProps)(Pictures);