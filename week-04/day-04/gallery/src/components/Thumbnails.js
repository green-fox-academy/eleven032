import React from 'react';
import CreateRow from './CreateRow';
class Thumbnails extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pic) {
        this.props.itemChange(pic);
    }

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
        }
        return (<div style={style}>
            {this.props.pics.map(item => {
                if (item === this.props.curr) {
                    return <CreateRow key={item} item={item} focus={true} />
                } else {
                    return <CreateRow key={item} item={item} focus={false} handleClick={this.handleClick} />
                }

            })}
        </div>)
    }
}

export default Thumbnails;
