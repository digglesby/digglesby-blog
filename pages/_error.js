import React from 'react';
import TrackingService from '../lib/TrackingService';
import Layout from '../components/Layout/Layout.js';

class Error extends React.Component {
  render() {
		return (
		    <Layout initialQuote={this.props.initialQuote}>
          <div className="page-wrapper ">
            <title>Something went wrong!</title>

            <h1>Something went wrong!</h1>
          </div>
        </Layout>
		);
  }

  componentDidMount(){
    TrackingService.pageView();
  }

  static async getInitialProps(){

    //const { url } = context.query;

    return {
      initialQuote: Math.random()
    };

  }
}


export default Error;
