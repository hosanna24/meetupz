import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    }
  }

  render() {
    return (
          <tr>
          <td>{this.state.item.name}</td>
          <td>{this.state.item.city}</td>
          <td>{this.state.item.address}</td>
          <td><Link to={`/meetups/${this.state.item.id}`} className="waves-effect waves-light btn-small btn pulse"><i className="fa fa-eye" aria-hidden="true"></i></Link></td>
          </tr>
    )
  }
}

export default MeetupItem;
