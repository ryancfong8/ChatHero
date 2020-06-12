import React from 'react';
import GreetingContainer from './home/greeting_container';
import Plx from 'react-plx';
import SessionFormContainer from './sessions/session_form_container';

const parallaxDataRight1 = [
  {
    start: 'self',
    startOffset: 100,
    duration: 50,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 0.2,
        property: 'opacity',
      },
    ],
  },
];
const parallaxDataRight2 = [
  {
    start: 'self',
    startOffset: 200,
    duration: 50,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 0.3,
        property: 'opacity',
      },
    ],
  },
];
const parallaxDataRight3 = [
  {
    start: 'self',
    startOffset: 300,
    duration: 50,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 0.5,
        property: 'opacity',
      },
    ],
  },
];
const parallaxDataRight4 = [
  {
    start: 'self',
    startOffset: 400,
    duration: 50,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

const parallaxDataLeft1 = [
  {
    start: 'self',
    startOffset: 100,
    duration: 50,
    properties: [
      {
        startValue: -50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 0.2,
        property: 'opacity',
      },
    ],
  },
];
const parallaxDataLeft2 = [
  {
    start: 'self',
    startOffset: 200,
    duration: 50,
    properties: [
      {
        startValue: -50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 0.3,
        property: 'opacity',
      },
    ],
  },
];
const parallaxDataLeft3 = [
  {
    start: 'self',
    startOffset: 300,
    duration: 50,
    properties: [
      {
        startValue: -50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 0.5,
        property: 'opacity',
      },
    ],
  },
];
const parallaxDataLeft4 = [
  {
    start: 'self',
    startOffset: 400,
    duration: 50,
    properties: [
      {
        startValue: -50,
        endValue: 0,
        property: 'translateX',
        unit: '%',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

const App = ({ children, location }) => (
  <>
    <GreetingContainer />
    <div className="w-100 h-100 pr-4 pl-4 home-page">
      <div className="mb-5 mt-3 d-flex flex-row align-items-center welcome">
        <div className="d-flex flex-column ml-3">
          <img
            className="app-logo"
            src="https://res.cloudinary.com/ryancfong8/image/upload/c_crop,w_2400/v1591162347/cover_whvh78.png"
          />
          <h1>ChatHero assembles your team together, wherever you are</h1>
          <div className="mb-3">
            With all of your communication and tools in one place, you will be a superhero no matter where you are.
          </div>
          <div className="d-flex flex-row align-items-center">
            <SessionFormContainer demoButton />
            <a
              className="btn btn-secondary"
              href="https://github.com/ryancfong8/Slack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="d-flex flex-row ml-3">
          <img
            className="desktop"
            src="https://res.cloudinary.com/ryancfong8/image/upload/v1591250406/shotsnapp-1591250387.203_oirheb.png"
          />
          <img
            className="phone"
            src="https://res.cloudinary.com/ryancfong8/image/upload/c_fill,h_700,w_350/v1591249378/shotsnapp-1591248733.029_x2npji.png"
          />
        </div>
      </div>

      <div className="d-flex flex-row home-page-section section-1">
        <div>
          <img
            className="home-phone"
            src="https://res.cloudinary.com/ryancfong8/image/upload/c_crop,h_1700,w_800/v1591936598/shotsnapp-1591936135.997_expvgs.png"
          />
          {/* <div className="home-page-div ca">
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight4}>
              <img
                className="captain-america right-1a"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591068462/Captain-America-PNG-Transparent-Image_fo7bt4.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight3}>
              <img
                className="captain-america right-1b"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591068462/Captain-America-PNG-Transparent-Image_fo7bt4.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight2}>
              <img
                className="captain-america right-1c"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591068462/Captain-America-PNG-Transparent-Image_fo7bt4.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight1}>
              <img
                className="captain-america right-1d"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591068462/Captain-America-PNG-Transparent-Image_fo7bt4.png"
              />
            </Plx>
          </div> */}
        </div>
        <div className="d-flex flex-column home-page-text ml-5">
          <h1>Break out of the inbox</h1>
          <div className="mb-3">
            Working in channels gives everyone a shared view of progress and purpose. It also provides an easy and
            convenient way to organize your communications. Conversations can happen in public channels, private
            channels, or direct messages.
          </div>
          <div className="d-flex flex-row align-items-center">
            <a
              className="home-page-link"
              href="https://github.com/ryancfong8/Slack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>

      <div className="d-flex flex-row home-page-section section-2">
        <div className="d-flex flex-column mr-5">
          <h1>Conversations, organized</h1>
          <div className="mb-3">
            ChatHero makes channels easily searchable. Can't find the right channel? Simply create a new one and add
            your team. Powered by Elasticsearch, ChatHero also allows you to search for any message in any of your
            conversations.
          </div>
          <div className="d-flex flex-row align-items-center">
            <a
              className="home-page-link"
              href="https://github.com/ryancfong8/Slack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div>
          <img
            className="desktop"
            src="https://res.cloudinary.com/ryancfong8/image/upload/v1591936889/shotsnapp-1591936720.042_c026zr.png"
          />
          {/* <div className="home-page-div left-1">
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft1}>
              <img
                className="iron-man left-1a"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/iron_man_png_ji5ybm.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft2}>
              <img
                className="iron-man left-1b"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/iron_man_png_ji5ybm.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft3}>
              <img
                className="iron-man left-1c"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/iron_man_png_ji5ybm.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft4}>
              <img
                className="iron-man left-1d"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/iron_man_png_ji5ybm.png"
              />
            </Plx>
          </div> */}
        </div>
      </div>

      <div className="d-flex flex-row home-page-section section-3">
        <div>
          <img
            className="desktop"
            src="https://res.cloudinary.com/ryancfong8/image/upload/v1591936889/shotsnapp-1591936764.308_h7tmzf.png"
          />
          {/* <div className="home-page-div ca">
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight4}>
              <img
                className="captain-america right-1a"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591079074/spider_man_PNG90_pllizj.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight3}>
              <img
                className="captain-america right-1b"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591079074/spider_man_PNG90_pllizj.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight2}>
              <img
                className="captain-america right-1c"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591079074/spider_man_PNG90_pllizj.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataRight1}>
              <img
                className="captain-america right-1d"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591079074/spider_man_PNG90_pllizj.png"
              />
            </Plx>
          </div> */}
        </div>
        <div className="d-flex flex-column ml-5">
          <h1>Power up your communication</h1>
          <div className="mb-3">
            Find the right tools you need to properly format your message. React to anyone's message with a wide range
            of emojis to select.
          </div>
          <div className="d-flex flex-row align-items-center">
            <a
              className="home-page-link"
              href="https://github.com/ryancfong8/Slack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row home-page-section section-4">
        <div className="d-flex flex-column mr-5">
          <h1>Customize your superhero appearance</h1>
          <div className="mb-3">
            Choose a superhero username and upload your profile picture to make you stand out from the rest. Full names
            are optional, should you want to keep your identity a secret.
          </div>
          <div className="d-flex flex-row align-items-center">
            <a
              className="home-page-link"
              href="https://github.com/ryancfong8/Slack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div>
          <img
            className="home-phone"
            src="https://res.cloudinary.com/ryancfong8/image/upload/v1591936598/shotsnapp-1591936109.481_p0ptf1.png"
          />
          {/* <div className="home-page-div left-1">
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft1}>
              <img
                className="iron-man left-1a"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/captain_marvel_png_vsirqo.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft2}>
              <img
                className="iron-man left-1b"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/captain_marvel_png_vsirqo.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft3}>
              <img
                className="iron-man left-1c"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/captain_marvel_png_vsirqo.png"
              />
            </Plx>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxDataLeft4}>
              <img
                className="iron-man left-1d"
                src="https://res.cloudinary.com/ryancfong8/image/upload/v1591072362/captain_marvel_png_vsirqo.png"
              />
            </Plx>
          </div> */}
        </div>
      </div>
      {/* <div className="d-flex flex-row home-page-section section-5">
      <div className="section-5-header" />
      <div className="d-flex flex-column">
        <h3>ChatHero brings your team of heroes together, wherever you are</h3>
        <div className="mb-3">
          With all of your communication and tools in one place, remote teams will stay productive no matter where
          you're working from.
        </div>
        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-primary mr-1">Demo as Guest User</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="section-5-footer" />
    </div>
    <div className="d-flex flex-row home-page-section section-6">
      <div className="section-6-header" />
      <div className="d-flex flex-column">
        <h3>ChatHero brings your team of heroes together, wherever you are</h3>
        <div className="mb-3">
          With all of your communication and tools in one place, remote teams will stay productive no matter where
          you're working from.
        </div>
        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-primary mr-1">Demo as Guest User</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="section-6-footer" />
    </div>
    <div className="d-flex flex-row home-page-section section-7">
      <div className="section-7-header" />
      <div className="d-flex flex-column">
        <h3>ChatHero brings your team of heroes together, wherever you are</h3>
        <div className="mb-3">
          With all of your communication and tools in one place, remote teams will stay productive no matter where
          you're working from.
        </div>
        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-primary mr-1">Demo as Guest User</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="section-7-footer" />
    </div>
    <div className="footer"></div> */}
      <div className="footer w-100 d-flex flex-column align-items-center justify-content-center">
        <img
          className="footer-logo"
          src="https://res.cloudinary.com/ryancfong8/image/upload/c_crop,w_2400/v1591162347/cover_whvh78.png"
        />
        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-primary mr-3">Demo as Guest User</button>
          <a
            className="btn btn-secondary"
            href="https://github.com/ryancfong8/Slack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </>
);

export default App;
