import React from 'react';
import Viewer from './components/Viewer';
import Thumbnails from './components/Thumbnails';

const lists = {
  p1: "",
  p2: "",
  p3: "",
  p4: "",
  p5: "",
  p6: "",
  p7: ""
}

const pics = Object.keys(lists).map(item => require("./pictures/" + item + ".jpg"));


class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      curr: pics[0],
      index: 0
    }
    this.itemChange = this.itemChange.bind(this)
  }

  itemChange(pic) {
    this.setState({ curr: pic, index: pics.indexOf(pic) })
  }

  componentDidUpdate() {
    console.log(this.state.curr);
    console.log(this.state.index);
  }
  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      padding: '0'
    }
    return (
      <div style={style}>
        <Viewer pics={pics} curr={this.state.curr} index={this.state.index} itemChange={this.itemChange} />
        <Thumbnails pics={pics} curr={this.state.curr} itemChange={this.itemChange} />
      </div>)
  }
}

export default Gallery;
