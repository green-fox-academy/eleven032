import React from 'react'
class TodoItems extends React.Component {
    constructor(props) {
        super(props);
    }

    createTasks(item, props) {
        if (item.isChecked) {
            return <p key={item.key}>{item.text}<button onClick={() => props.deleteItem(item.key)}>D</button><input type="checkbox" onChange={props.check} checked className="checked_text" /></p>
        } else {
            return <p key={item.key}>{item.text}<button onClick={() => props.deleteItem(item.key)}>D</button><input type="checkbox" onChange={props.check} /></p>
        }

    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(item => this.createTasks(item, this.props))
        return <div className="theList">{listItems}</div>
    }
}
export default TodoItems