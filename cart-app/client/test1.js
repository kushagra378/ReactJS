import { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: false,
    };
  }
  handler() {
    this.setState((currState) => {
      return { showUsers: !currState.showUsers };
    });
  }
  componentDidMount() {
    //send Http request
    this.setState({ filteredUsers: DUMMY_USERS });
  }
  componentWillUnmount() {
    console.log("Component Unmounts!");
  }
  componentDidUpdate(prevProps, prevState) {
    //useEffect function alike
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: filteredUsers.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }
  render() {
    return (
      <button onClick={this.handler.bind(this)}>
        {this.state.showUsers ? "Hide" : "Show"}
      </button>
    );
  }
}
export class ErrorBoundry extends Component {
  componentDidCatch() {
    console, log("Error Found");
  }
}

export default Users;
