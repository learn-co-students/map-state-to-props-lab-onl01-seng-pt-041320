import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user, index) => <li key={index}>{user.username} </li>)}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.allUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// 1 - Write a function called mapStateToProps
// 2 - mapStateToProps accepts one argument
// 3 - Use state to access the array of users
// 4 - The mapStateToProps function should return an object with keys
// 5 - Each key will become a prop in your component, allowing you to assign values based on the provided state.
const mapStateToProps = (state) => {
  return {users: state.users,
  allUsers: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps) (Users)
