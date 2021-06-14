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
      <PrismCode className={'language-'+this.props.language}>
        {this.props.children[0]}
      </PrismCode>
		);
  }
}

export default Code;
