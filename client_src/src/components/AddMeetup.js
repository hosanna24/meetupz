import React, { Component } from 'react';
import axios from 'axios';

class AddMeetup extends Component {
  addMeetup(newMeetup){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/meetups',
      data: newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render() {
    return (
        <div>
          <h1>Add Meetup</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s12">
                <input id="name" name="name" ref="name" type="text" required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input id="city" name="city" type="text" ref="city" required />
                <label htmlFor="city">City</label>
              </div>
             <div className="input-field col s12">
               <input id="address" name="address" type="text" ref="address" required />
               <label htmlFor="address">Address</label>
              </div>
            </div>
            <input type="submit" value="Save" className="btn" />
          </form>
        </div>
    )
  }
}

export default AddMeetup;
