import React from 'react';
import Post from '../Post/Post.js';

class PostFeed extends React.Component {

  constructor(){
    super();

    this.state = {
      posts:[],
      loading: false
    };

    this.b_loadMorePosts = this.loadMorePosts.bind(this);
  }

  componentWillMount(){
    this.setState({
      posts: [...this.props.initialPosts],
      has_more: (this.props.post_directory.length != this.props.initialPosts.length)
    });
  }

  async loadMorePosts(){
    this.setState({
      loading:true
    });

    let posts = await posts.readPostsFrom( this.state.posts.length, this.props.post_directory, 25 );

    let new_posts = [
      ...this.state.posts,
      ...posts
    ];

    this.setState( {
      posts: new_posts,
      loading:false,
      has_more: (this.props.post_directory.length != new_posts.length)
    });
  }

  render() {

    let loadMoreButton = null;
    let posts = [];

    if (this.state.has_more){
      if (!this.state.loading){

        loadMoreButton = (
          <button onClick={this.b_loadMorePosts} className="read-more">Load more</button>
        );

      } else {

        loadMoreButton = (
          <button className="read-more">Loading...</button>
        );

      }

    }

    for (var i = 0; i < this.state.posts.length; i++) {
      posts.push(
        <Post
          key={this.state.posts[i].url}
          date={this.state.posts[i].date}
          name={this.state.posts[i].name}
          url={this.state.posts[i].url}
          post={this.state.posts[i].post}
          p_key={this.state.posts[i].key}
        />
      );
    }

		return (
      <div className="post-feed">
        {posts}
        {loadMoreButton}
      </div>
		);

  }
}

export default PostFeed;
