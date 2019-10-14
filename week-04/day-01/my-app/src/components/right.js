import React from 'react';

class Right extends React.Component {
    test() {
        console.log(this.props.hotel);

    }
    render() {
        // this.test();
        const style = {
            display: "flex",
            flexDirection: "column"
        };
        return (
            <div>
                <h2>Hotel List</h2>
                {this.props.hotel.map(item => {
                    return (<div key={item.name}>
                        <h3>{item.name}</h3>
                        <div style={{dispaly:'flex'}}>
                            <img src={item.imageURL}></img>
                            <div style={style}>
                                <p>{item.description}</p>
                                <button>Book Now!</button>
                            </div>
                        </div>
                    </div>)
                }
                )}
            </div>
        )
    }
}

export default Right;