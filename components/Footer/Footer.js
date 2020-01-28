import React from 'react';
import Quotes from './Quotes';

class Footer extends React.Component {

  constructor(){
    super();

  }


  render() {

		return (
      <div className="footer">
        <h2 className="copyright">&copy; {new Date().getFullYear()} Curtis Ward</h2>
        <p className="disclaimer">All opinions posted here are my own personal opinion and do not represent the views of my employer.</p>

        <Quotes initialQuote={this.props.initialQuote}/>
      </div>
		);

  }
}

export default Footer;
