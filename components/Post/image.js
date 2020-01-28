import React from 'react';

class Image extends React.Component {
  constructor(){
    super();
  }

  render() {

    const prefix = 'https://blog.digglesby.com/';
    let src = this.props.src;
    let srcSet = [];

    if (this.props.src.startsWith("media")){
      let src_parts = this.props.src.split(".");

      src = `${prefix}${this.props.p_key}/${src_parts[0]}.${src_parts[1]}`;

      srcSet.push(`${prefix}${this.props.p_key}/${src_parts[0]}-150w.${src_parts[1]} 150w`);
      srcSet.push(`${prefix}${this.props.p_key}/${src_parts[0]}-400w.${src_parts[1]} 400w`);
      srcSet.push(`${prefix}${this.props.p_key}/${src_parts[0]}-800w.${src_parts[1]} 800w`);
      srcSet.push(`${prefix}${this.props.p_key}/${src_parts[0]}-1200w.${src_parts[1]} 1200w`);
    }

		return (
      <div className={`post-galary`}>
        <a className='img' href={src}>
          <div className="img-box">
            <img srcSet={srcSet} src={this.props.src} alt={this.props.alt} />
          </div>
          <p>{this.props.alt}</p>
        </a>
      </div>
		);
  }
}

export default Image;
