import React from 'react';
import LeftArrow from './LeftArrow';
import Square from './Square';
import RightArrow from './RightArrow';

class Viewer extends React.Component {
    constructor(props) {
        //all list of pics
        super(props);
        this.state = {
            index: 0,
            curr: this.props.pics[0]
        }

        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    moveLeft() {
        if (this.state.index === 0) {
            this.setState({
                index: 6,
                curr: this.props.pics[6]
            })
        } else {
            let i = this.state.index - 1;
            this.setState({ index: i, curr: this.props.pics[i] })
        }
    }

    moveRight() {
        if (this.state.index === 6) {
            this.setState({
                index: 0,
                curr: this.props.pics[0]
            })
        } else {
            let i = this.state.index + 1;
            this.setState({ index: i, curr: this.props.pics[i] })
        }
    }

    render() {
        const style = {
            display: 'flex',
            width: '1300px',
            height: '660px',
            border: '1px solid green',
            margin: '15.5% 15.5% 15.5% 15.5%',
            flexDirection: 'row',
            marginBottom: '10px',
            marginTop: '20px'
        }

        return (<div style={style}>
            <LeftArrow move={this.moveLeft} />
            <Square curr={this.state.curr} />
            <RightArrow move={this.moveRight} />
        </div>)
    }
}

export default Viewer;

