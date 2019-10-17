import React from 'react';

class CreateRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            display: 'flex',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '5px',
            width: '100px'
        }
        return (<div>
            <a>
                <img style={style} src={this.props.item}></img>
            </a>
        </div>)

    }
}

export default CreateRow;
