import React from 'react';
import CreateRow from './CreateRow';
class Thumbnails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            marginTop:'10px'
        }
        return (<div style={style}>
            {this.props.pics.map(item => {
                return <CreateRow key={item} item={item} />
            })}
        </div>)
    }
}

export default Thumbnails;
