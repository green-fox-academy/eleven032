import React from 'react';
import '../App.css';

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input className="input-block"
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button className="button-text" type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList