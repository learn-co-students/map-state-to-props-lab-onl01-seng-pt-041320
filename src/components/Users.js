import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user) => (<li>{user.username}</li>))}
          {this.props.usersCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    usersCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
