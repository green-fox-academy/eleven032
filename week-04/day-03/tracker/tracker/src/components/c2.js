import React from 'react';

class C2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Component2',
            time: 0
        }
    }
    componentDidMount() {
        console.log('C2 Component did mount!')
        let t = Date.now()

        console.log(t);
        this.setState({
            time: t
        })

    }

    componentWillUnmount() {
        console.log('c2 will unmount')
        let t = Date.now()
        this.props.record(
            this.state.name,
            ((t - this.state.time) / 1000).toFixed(2))
    }

    render() {
        return (
            <p>This is the content of Component 2</p>
        )
    }
}

export default C2;