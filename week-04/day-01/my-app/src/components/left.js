import React from 'react';
// import CheckBox from './components/checkbox.js';
class Left extends React.Component {
    render() {
        return (<div>
            <div>
                <h4>Star Rating</h4>
                {this.props.filter['Star rating'].map((item) => (
                    <div>
                        <input key={item.name} checked={item.checked} type="checkbox">
                        </input>
                        {item.name}
                    </div>
                )
                )}
            </div>
            <div>
                <h4>Property type</h4>
                {this.props.filter['Property type'].map((item) => (
                    <div>
                        <input key={item.name} checked={item.checked} type="checkbox">
                        </input>
                        {item.name}
                    </div>
                )
                )}
            </div>

        </div>)
    }
}

export default Left;