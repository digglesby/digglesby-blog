import React from 'react';
import Image from './Image.js';

class Galary extends React.Component {

  constructor(){
    super();

  }

  render() {
    let img = [];


    for (var i = 0; i < this.props.imgs.length; i++) {
      img.push(
        <Image
          src={this.props.imgs[i].src}
          alt={this.props.imgs[i].alt}
          link={this.props.imgs[i].link}
          key={i}
        />
      );
    }



		return (

      <div className={`img-galary ${ (this.props.collumns == 3) ? 'x3':'x2' }`}>
        {img}
      </div>
		);

  }
}

export default Galary;
