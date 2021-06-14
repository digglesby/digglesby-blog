import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Code from './code';
import Image from './image';
import CustomLink from './link';

class Post extends React.Component {
  constructor(){
    super();
  }

  render() {
    let source = this.props.post;

		return (
			<article className='blog-post'>

        <Link href={`/post?url=${this.props.url}`} as={`/post/${this.props.url}`} >
          <h1 className="title">
            <a href={`/post?url=${this.props.url}`} as={`/post/${this.props.url}`}>{this.props.name}</a>
          </h1>
        </Link>

        <ReactMarkdown
          components={{
            code:Code,
            img:function(props){ return <Image {...props} p_key={this.props.p_key}  />; }.bind(this),
            a:function(props){ return <CustomLink {...props} p_key={this.props.p_key}  />; }.bind(this)
          }}
        >
          {source}
        </ReactMarkdown>
      </article>
		);
  }
}

export default Post;
