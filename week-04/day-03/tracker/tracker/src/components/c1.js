import React from 'react';

class C1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Component1',
            time: 0
        }
    }
    
    componentDidMount() {
        console.log('C1 Component did mount!')
        let t = Date.now()

        console.log(t);
        this.setState({
            time: t
        })

    }

    componentWillUnmount() {
        console.log('c1 will unmount')
        let t = Date.now()
        this.props.record(
            this.state.name,
            ((t - this.state.time) / 1000).toFixed(2))
    }

    render() {
        return (
            <p>This is the content of Component 1</p>
        )
    }
}

export default C1;