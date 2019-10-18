import React from 'react';

class CreateRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.focus) {
            const style = {
                display: 'flex',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '5px',
                width: '100px',
                outline: '3px solid orange'
            }
            return (<div>
                <img style={style} src={this.props.item}></img>
            </div>)
        } else {
            const style = {
                display: 'flex',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '5px',
                width: '100px'
            }
            return (<div>
                <img style={style} src={this.props.item} onClick={()=>this.props.handleClick(this.props.item)}></img>
            </div>)
        }


    }
}

export default CreateRow;
