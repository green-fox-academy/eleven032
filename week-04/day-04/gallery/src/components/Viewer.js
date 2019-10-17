import React from 'react';
import LeftArrow from './LeftArrow';
import Square from './Square';
import RightArrow from './RightArrow';

class Viewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            display: 'flex',
            width: '1300px',
            height: '660px',
            border: '1px solid green',
            margin: '15.5% 15.5% 15.5% 15.5%',
            flexDirection: 'row',
            marginBottom:'10px',
            marginTop:'20px'
        }

        return (<div style={style}>
            <LeftArrow />
            <Square />
            <RightArrow />
        </div>)
    }
}

export default Viewer;

