import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
          <div className="card">
            <div className="card-panel hoverable col s12 m7">
                <div className="card-image">
                  <img src="https://endpoint910861.azureedge.net/globalassets/new-york/home-page/uvid-49c6e7/24334-llpark-images-kv-landing-page.jpg?w=1422&h=800&mode=crop&scale=both&quality=80&format=jpg" />
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          <div className="row">
            <div className="card">
            <div className="card-panel hoverable col s6 m6">
                <div className="card-image">
                  <img src="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_370,q_75,w_658/v1/clients/newyorkstate/New_York_Zipline_Adventures_at_Hunter_Mountain_ed3daaa2-7818-4007-9820-bb5145e9ac83.jpg" />
                  <span className="card-title">Card Title</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light cyan"><i class="fa fa-plus"></i></a>
                </div>
                <div className="card-content">
                  <p>here's I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
              <div className="card-panel hoverable col s6 m6">
                  <div className="card-image">
                    <img src="https://www.urlaubsguru.de/wp-content/uploads/2016/03/time-square-new-york-city-istock-487537456-2.jpg" />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
                </div>
          </div>
          </div>
      </div>
    )
  }
}

export default About;
