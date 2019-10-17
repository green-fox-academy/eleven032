import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            width: '1100px',
            border: '1px solid black',
            height: '660px',
            flexGrow: '12'
        }

        
        return (<div >
            <img style={style} src='/static/media/p1.9cf3ddc7.jpg'></img>
        </div>)
    }
}

export default Square;