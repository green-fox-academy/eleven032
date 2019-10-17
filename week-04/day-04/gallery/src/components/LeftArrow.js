import React from 'react';

class LeftArrow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // console.log(this.props);
    }

    render() {
        const style = {
            display: 'flex',
            marginRight: '0px',
            border: '1px solid red',
            width: '100px',
            height: '660px',
            flexGrow: '1'
        }
        return (<img style={style} src={require('../pictures/arrows/arrow.svg')}></img>)
    }
}

export default LeftArrow;