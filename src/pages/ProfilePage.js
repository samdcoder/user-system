import React from "react";
import doProfileAction from "../actions/doProfileAction";
import {readCookie} from "../helper";

class ProfilePage extends React.Component {
  onSuccess = (d) => {
    console.log('d => ', d);
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
    return (access_token && <div> Profile Page</div>
    )
  }
}

export default ProfilePage;