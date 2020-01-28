import React from 'react';
import Link from 'next/link';
import STATIC_PATH from '../../STATIC_PATH.js';

class AboutMeAside extends React.Component {

  constructor(){
    super();

  }

  render() {

    let links = [];

    for (var i = 0; i < Math.min( this.props.post_directory.length, 5 ); i++) {

      links.push(
        <li key={i}>
          <Link href={`/post?url=${this.props.post_directory[i].url}`} as={`/post/${this.props.post_directory[i].url}`}>
            <a>{this.props.post_directory[i].title}</a>
          </Link>
        </li>
      );
    }

		return (
      <div className="about-aside">
        <main>
          {this.props.children}
        </main>

        <aside>
          <img src={`${STATIC_PATH}/me_emoji.jpg`} />
          <p>My name is Curtis Ward, I made <a href="https://jadeapp.live">Jade</a> a location based chat app for colleges and I&apos;m a junior Management Information Systems student at West Virginia University.</p>

          <ul>
            <h2>Recent Posts</h2>

            {links}
          </ul>

          <div className="float-clear"/>
        </aside>
      </div>
		);

  }
}

export default AboutMeAside;
