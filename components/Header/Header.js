import React from 'react';
import Link from 'next/link';
import { EntypoChevronDown } from 'react-entypo';

class Header extends React.Component {

  constructor(){
    super();

    this.state = {
      menu_open: false,
      height:0
    };

    this.b_toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menu_open: (!this.state.menu_open)
    });
  }

  render() {

    let icon = <EntypoChevronDown className="icon" />;
    let menuClass = "closed";

    if (this.state.menu_open){
      icon = <EntypoChevronDown className="icon rotated" />;
      menuClass = "open";
    }

    let buttons = [
      <Link key={0} href='/'>

          <li className='blog'>
            <a href="/">Blog</a>
          </li>
      </Link>,
      <Link key={1} href='/my-work'>

          <li className='my-work'>
            <a href="/my-work">My Work</a>
          </li>
      </Link>,
      <Link key={2} href='mailto:curtis@digglesby.com'>

          <li className='contact-me'>
            <a href="mailto:curtis@digglesby.com">Contact Me</a>
          </li>
      </Link>,
      <div key={3} className='float-clear'/>
    ];

		return (
			<header className='header'>

        <div className='wrapper non-mobile'>
          <Link href='/'>
            <h1 className='title'>
              <a href='/'>Curtis Ward</a>
            </h1>
          </Link>

          <nav>
            <ul>
              {buttons}
            </ul>
          </nav>

          <div className='float-clear'/>

        </div>

        <div className="wrapper mobile">

          <div>
            <Link href='/'>
              <h1 className='title'>
                <a href='/'>Curtis Ward</a>
              </h1>
            </Link>

            <button onClick={this.b_toggleMenu} className="mobile-menu-button">
              {icon}
            </button>

            <div className='float-clear'/>
          </div>

          <div className={`mobile-menu ${menuClass}`}>
            <nav>
              <ul>
                {(this.state.menu_open) ? buttons : null}
              </ul>
            </nav>
          </div>


        </div>
			</header>
		);
  }
}

export default Header;
