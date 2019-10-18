import React from 'react';

class LeftArrow extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const style = {
            display: 'flex',
            marginRight: '0px',
            width: '100px',
            height: '660px',
            flexGrow: '1'
        }
        return (<img onClick={this.props.move} style={style} src={require('../pictures/arrows/arrow.svg')}></img>)
    }
}

export default LeftArrow;