import React from 'react';
import TrackingService from '../lib/TrackingService';
import Layout from '../components/Layout/Layout.js';
import AboutMeAside from '../components/AboutMeAside/AboutMeAside.js';
import posts from '../lib/Posts.js';
import Post from '../components/Post/Post';
import {NextSeo} from 'next-seo';


import ErrorPage from './_error.js';

class PostPage extends React.Component {
  render() {

    if (!this.props.post) return (<ErrorPage />);
    return (
		    <Layout initialQuote={this.props.initialQuote}>
          <NextSeo
            title={`${this.props.post.name} - Curtis Ward`}
            description={`${this.props.post.summary}`}
          />

          <div className="page-wrapper ">

            <AboutMeAside post_directory={this.props.directory}>
              <Post
                date={this.props.post.date}
                name={this.props.post.name}
                url={this.props.post.url}
                post={this.props.post.post}
                p_key={this.props.post.key}
              />
            </AboutMeAside>
          </div>
        </Layout>
		);
  }

  componentDidMount(){
    TrackingService.pageView();
  }

  static async getInitialProps(context){

    try {
      const { url } = context.query;
      let post = null;

      let post_directory = await posts.getAllPosts();

      for (var i = 0; i < post_directory.length; i++) {

        if (post_directory[i].url == url){

          post = await posts.getPost( post_directory[i].key );
          break;
        }
      }

      return {
        initialQuote: Math.random(),
        directory: post_directory,
        post:post
      };

    } catch(err){
      console.error(err);
    }

    return {};

  }
}


export default PostPage;
