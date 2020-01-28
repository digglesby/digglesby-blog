import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class Layout extends React.Component {
  render() {
		return (
      <div>
        <Header/>

        {this.props.children}

        <Footer initialQuote={this.props.initialQuote}/>
      </div>
		);
  }


}

export default Layout;
