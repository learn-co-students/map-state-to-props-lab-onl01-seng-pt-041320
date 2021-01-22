import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {



  render() {
    return (
      <div>
        <ul>
          Users!
            <p>{this.props.users.length}</p>
            {this.props.users.map(user => <li> {user.username} </li>)}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users}
}
//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users) 
