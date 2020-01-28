import React from 'react';
require('md5');
require('prismjs');
import PrismCode from 'react-prism';

class Code extends React.Component {
  constructor(){
    super();
  }

  render() {
		return (
      <PrismCode component='pre' className={'language-'+this.props.language}>
        {this.props.value}
      </PrismCode>
		);
  }
}

export default Code;
