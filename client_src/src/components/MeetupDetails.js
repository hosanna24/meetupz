import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getMeetup();
  }

  getMeetup(){
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
     .then(response => {
       this.setState({details: response.data}, () =>
       {
         console.log(this.state);
       })
     })
     .catch(err => console.log(err));
  }

  // Delete Item from database
  onDelete() {
    let meetupId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
          <h1>{this.state.details.name} Details</h1>
            <div className="col s12 m5">
            <div className="card blue darken-1">
              <div className="card-content white-text">
                <span className="card-title">{this.state.details.name}</span>
                <h4>{this.state.details.city}</h4>
                <h4>{this.state.details.address}</h4>
              </div>
              <div className="card-action">
                <button onClick={this.onDelete.bind(this)} className="btn red" to="#"><i className="fa fa-trash" aria-hidden="true"></i> Send to Trash</button>
                <Link className="btn" to={`/meetups/edit/${this.state.details.id}`}><i className="fa fa-edit"></i> Edit Meetup</Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default MeetupDetails;
