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

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      padding: '0'
    }
    return (
      <div style={style}>
        <Viewer pics={pics} />
        <Thumbnails pics={pics} />
      </div>)
  }
}

export default Gallery;
