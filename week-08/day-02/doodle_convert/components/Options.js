import React from 'react';
import { View } from 'react-native';
import { optionAction } from '../actions/optionAction';
import { connect } from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';

function Options(props) {
    console.log(props);


    let radio_props = [];
    let index = 0;

    props.data.forEach(label => {
        let tmp = {
            label: label,
            value: index
        }
        radio_props.push(tmp);
        index++;
    })

    return (
        <View>
            <RadioForm
                radio_props={radio_props}
                onPress={(value) => { props.optionAction(value) }}
            />
        </View>
    );
}



const mapDispatchToProps = dispatch => {
    return {
        optionAction: (value) => dispatch(optionAction(value))
    }
}

export default connect(null, mapDispatchToProps)(Options);