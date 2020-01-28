import React from 'react';
import Layout from '../components/Layout/Layout.js';
import AboutMeAside from '../components/AboutMeAside/AboutMeAside.js';
import ImgGalary from '../components/ImgGalary/ImgGalary.js';
import TrackingService from '../lib/TrackingService';
import posts from '../lib/Posts.js';
import STATIC_PATH from '../STATIC_PATH.js';
import {NextSeo} from 'next-seo';

class MyWork extends React.Component {
  componentDidMount(){
    TrackingService.pageView();
  }

  render() {
		return (
			<Layout initialQuote={this.props.initialQuote}>

        <NextSeo
          title="My Work - The Personal Blog of Curtis Ward"
          description="Curtis Ward is a software engineer and student at West Virginia University"
        />

        <div className="page-wrapper ">
          <AboutMeAside post_directory={this.props.directory}>
              <main className='showcase'>

                <h1 className='title'>My Work</h1>

                <p>
                  Hello! My name is Curtis Ward.
                  I&apos;ve been developing software and hacking on projects since 2009.
                  I&apos;m passionate about building tools that connect people.
                  The following are a breif example of websites and projects I have worked on over time, more information is avaible in <a href='https://docs.google.com/document/d/1vhwH7axBRgfhWjD5VN-RhfLr2CxDIAPINlk-V9Kmfs0/edit?usp=sharing'>my full resume.</a>
                </p>

                <article>
                  <h2 className='sub-title'>Jade</h2>

                  <p><a href='https://jadeapp.live/'>Jade</a> is a real time location based chat app for college students available for IOS and Android.</p>

                  <ImgGalary
                    collumns={3}
                    imgs={[
                      {
                        src: `${STATIC_PATH}/MyWork/Jade/MapThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Jade/Map.png`,
                        alt: "Map showing all active chatrooms in your area."
                      },
                      {
                        src: `${STATIC_PATH}/MyWork/Jade/TopicThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Jade/Topic.png`,
                        alt: "Community chatrooms for a topic."
                      },
                      {
                        src: `${STATIC_PATH}/MyWork/Jade/FeedThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Jade/Feed.png`,
                        alt: "User feed of active chatrooms."
                      },
                    ]}
                  />
                </article>


                <article>

                  <h2 className='sub-title'>PRT Scanner</h2>

                  <p><a href='https://prtscanner.com/'>PRTScanner.com</a> is a website that shows the current status and statistics of the <a href='https://en.wikipedia.org/wiki/Morgantown_Personal_Rapid_Transit'>WVU PRT</a> while also notifying users of outages.</p>

                  <ImgGalary
                    collumns={2}
                    imgs={[
                      {
                        src: `${STATIC_PATH}/MyWork/PRTScanner/HomeLaptopThumb.png`,
                        link: `${STATIC_PATH}/MyWork/PRTScanner/HomeLaptop.png`,
                        alt: "Home page showing uptime and graphs for all stations."
                      },
                      {
                        src: `${STATIC_PATH}/MyWork/PRTScanner/StationLaptopThumb.png`,
                        link: `${STATIC_PATH}/MyWork/PRTScanner/StationLaptop.png`,
                        alt: "Station page showing statistics for a single station."
                      }
                    ]}
                  />

                </article>

                <article>

                  <h2 className='sub-title'>Favii</h2>

                  <p>Favii was an interest based social media site. Over a period of 1-2 years I built everything about Favii from the ground up including all graphic design and front end work.</p>

                  <ImgGalary
                    imgs={[
                      {
                        src: `${STATIC_PATH}/MyWork/Favii/FeedThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Favii/Feed.png`,
                        alt: "Feed page showing posts from users."
                      },
                      {
                        src: `${STATIC_PATH}/MyWork/Favii/InterestThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Favii/Interest.png`,
                        alt: "Interest page for a community on the site."
                      },
                    ]}
                  />

                </article>
                <article>
                  <h2 className='sub-title'>Proof Giant</h2>

                  <p>Proof Giant was a SAAS platform for marketers to automatically watermark their work and get client feedback on them safely, without the need for long email chains.</p>

                  <ImgGalary
                    imgs={[
                      {
                        src: `${STATIC_PATH}/MyWork/ProofGiant/LandingPageThumb.png`,
                        link: `${STATIC_PATH}/MyWork/ProofGiant/LandingPage.png`,
                        alt: "Landing page with a call to action."
                      },
                      {
                        src: `${STATIC_PATH}/MyWork/ProofGiant/DashboardThumb.png`,
                        link: `${STATIC_PATH}/MyWork/ProofGiant/Dashboard.png`,
                        alt: "User feedback in the dashboard."
                      },
                    ]}
                  />

                </article>
                <article>
                  <h2 className='sub-title'>Stonebox Studios</h2>

                  <p>Stonebox Studios was a small company I started at 16 to do local contract web design work.</p>

                  <ImgGalary
                    imgs={[
                      {
                        src: `${STATIC_PATH}/MyWork/Stonebox/FamilyRentalThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Stonebox/FamilyRental.png`,
                        alt: "Online storefront of equipment availible for rental."
                      },
                      {
                        src: `${STATIC_PATH}/MyWork/Stonebox/AutoUnlockThumb.png`,
                        link: `${STATIC_PATH}/MyWork/Stonebox/AutoUnlock.png`,
                        alt: "Landing page for a local locksmith."
                      },
                    ]}
                  />

                </article>

                <a href="https://docs.google.com/document/d/1vhwH7axBRgfhWjD5VN-RhfLr2CxDIAPINlk-V9Kmfs0/edit?usp=sharing">
                  <button className="cta">
                    View my full resume
                  </button>
                </a>
              </main>

              <div className='float-clear'/>

          </AboutMeAside>
        </div>
			</Layout>
		);
  }

  static async getInitialProps(){

    let post_directory = await posts.getAllPosts();

    return {
      initialQuote: Math.random(),
      directory: post_directory
    };
  }
}

export default MyWork;
