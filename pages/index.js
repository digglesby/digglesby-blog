import React from 'react';
import TrackingService from '../lib/TrackingService';
import Layout from '../components/Layout/Layout.js';
import AboutMeAside from '../components/AboutMeAside/AboutMeAside.js';
import posts from '../lib/Posts.js';
import PostFeed from '../components/PostFeed/PostFeed.js';
import {NextSeo} from 'next-seo';

class Index extends React.Component {
  render() {
		return (
		    <Layout initialQuote={this.props.initialQuote}>
          <div className="page-wrapper ">
            <NextSeo
              title="Curtis Ward - The Personal Blog of Curtis Ward"
              description="Curtis Ward is a software engineer and student at West Virginia University"
            />

            <AboutMeAside post_directory={this.props.directory}>

              <PostFeed
                initialPosts={this.props.initialPosts}
                post_directory={this.props.directory}
              />
            </AboutMeAside>
          </div>
        </Layout>
		);
  }

  componentDidMount(){
    TrackingService.pageView();
  }

  static async getInitialProps(){

    let post_directory = await posts.getAllPosts();
    let new_posts = await posts.readPostsFrom( 0, post_directory, 10 );

    return {
      initialQuote: Math.random(),
      initialPosts: new_posts,
      directory: post_directory
    };

  }
}


export default Index;
