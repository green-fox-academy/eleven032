import React from 'react';

class Right extends React.Component {
    render() {
        const style = {
            float: 'right'
        }
        return (
            <div>
                <h2>Hotel List</h2>
                {this.props.hotels.map(item => {
                    <div>
                        <h3>{item.name}</h3>
                        <div style="dispaly:flex">
                            <img src={item.imageURL}></img>
                            <div >
                                <p>{item.description}</p>
                                
                            </div>
                        </div>
                    </div>
                }
                )}
            </div>
        )
    }
}

export default Right;