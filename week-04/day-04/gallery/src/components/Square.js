import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            width: '1100px',
            height: '660px',
            flexGrow: '12'
        }

        return (<div >
            <img style={style} src={this.props.curr}></img>
        </div>)
    }
}

export default Square;