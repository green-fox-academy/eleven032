import React from 'react';
class Head extends React.Component {
    render() {
        const style = {
            float: "left"
        }
        return <h1 style={style}>{this.props.title}</h1>
    }
}


export default Head;