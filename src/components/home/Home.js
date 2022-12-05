import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <body>
      <div className='intro-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='intro-message'>
                <h1 className='animated slideInLeft'>
                  Finding the perfect home, made{' '}
                  <span className='highlight'>simple</span>.
                </h1>
                <h3 className='animated slideInRight'>Explore your options.</h3>

                <ul className='list-inline intro-social-buttons'>
                  <li>
                    <Link to='#'>
                      <button className='button animated bounceInUp btn btn-info btn-lg'>
                        {' '}
                        <span className='network-name'>
                          View Nearby Listings
                        </span>
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to='#'>
                      <button className='button2 animated bounceInUp btn btn-info btn-lg'>
                        {' '}
                        <span className='network-name'>Contact an Agent</span>
                      </button>
                    </Link>
                  </li>
                </ul>

                <h4 className='learn animated bounceInUp'>About Our Agency</h4>
                <i className='arrow animated infinite pulse fa fa-angle-down icon fa-5x'></i>
              </div>
            </div>
            <div className='col-lg-4'></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .learn:hover {
          cursor: pointer;
        }

        .arrow:hover {
          text-align: center;
          cursor: pointer;
        }

        .intro-header {
          padding-top: 50px;
          padding-bottom: 50px;
          text-align: left;
          color: #f8f8f8;
          background: linear-gradient(
              rgba(69, 152, 220, 0.6),
              rgba(79, 128, 207, 0.7)
            ),
            url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=940&h=650&auto=compress');
          background-size: cover;
        }

        .intro-message {
          position: relative;
          padding-top: 10%;
          padding-bottom: 20%;
        }

        .intro-message > h1 {
          font-size: 4em;
          font-weight: 400;
          text-align: left;
        }

        .intro-message > h3 {
          margin-top: 50;
          font-size: 2.5em;
          font-weight: 150;
          letter-spacing: 4;
          text-align: left;
        }

        .intro-message > h4 {
          margin-top: 200;
          font-size: 1.25em;
          font-weight: 400;
          letter-spacing: 2;
        }
        .landImg {
          margin-left: 15%;
          margin-top: 5%;
        }

        .button {
          margin-top: 50px;
          margin-bottom: 20px;
          background: #afdaa6;
          border: none;
          border-radius: 0%;
          border-bottom: 6px solid #99bc91;
          padding: 15px 15px 15px 15px;
        }

        .button2 {
          margin-top: 50px;
          margin-bottom: 20px;
          background: #f0777e;
          border: none;
          border-radius: 0%;
          border-bottom: 6px solid #dd6c72;
          padding: 15px 15px 15px 15px;
        }

        .button:hover {
          margin-top: 55px;
          height: 95%;
          background: #afdaa6;
          border-bottom: 0px solid #afdaa6;
          border-radius: 0%;
          padding: 21px 15px 15px 15px;
        }

        .button2:hover {
          margin-top: 50px;
          background: #f0777e;
          border-bottom: 6px solid #f0777e;
          border-radius: 0%;
          padding: 21px 15px 15px 15px;
        }

        .highlight {
          color: #afdaa6;
          font-style: italic;
        }

        .network-name {
          text-transform: uppercase;
          font-size: 22px;
          font-weight: 800;
          font-family: 'lato';
        }
      `}</style>
    </body>
  );
};

export default Home;
