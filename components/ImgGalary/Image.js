import React from 'react';

class Image extends React.Component {

  constructor(){
    super();
  }


  render() {
    return (
      <a className='img' href={(!this.props.link) ? this.props.src : this.props.link}>
        <img src={this.props.src} alt={this.props.alt} />
        <p>{this.props.alt}</p>
      </a>
    );
  }
}

export default Image;
