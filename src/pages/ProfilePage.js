import React from "react";
import doProfileAction from "../actions/doProfileAction";
import {deleteCookie, readCookie} from "../helper";
import UserCard from "../components/UserCard";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiStatus: false,
      data: {}
    }
  }
  
  
  onSuccess = (d) => {
    const {data} = d;
    const {status} = data;
    if (!status) {
      deleteCookie('access_token');
      deleteCookie('user_id');
      window.location = '/login';
    } else {
      this.setState({
        apiStatus: true,
        data: data
      })
    }
    
  }
  
  
  componentDidMount() {
    const access_token = readCookie('access_token');
    if (!access_token || !access_token.length) {
      window.location = '/login';
    }
    doProfileAction(null, this.onSuccess)
  }
  
  render() {
    const access_token = readCookie('access_token');
    return (access_token &&
      <UserCard data={this.state.data}/>
    )
  }
}

export default ProfilePage;