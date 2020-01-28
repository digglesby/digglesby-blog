import React from 'react';

class Code extends React.Component {
  constructor(){
    super();
  }

  render() {

    const prefix = 'https://blog.digglesby.com/';
    let href = this.props.href;

    if (this.props.href.startsWith("media")){
      let href_parts = this.props.href.split(".");

      href = `${prefix}${this.props.p_key}/${href_parts[0]}.${href_parts[1]}`;
    }

		return (
      <a href={href}>
        {this.props.children}
      </a>
		);
  }
}

export default Code;
