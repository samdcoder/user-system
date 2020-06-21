import {readCookie} from "../helper";

var axios = require('axios');

export default (d, onSuccess) => {
  const access_token = readCookie('access_token');
  
  var config = {
    method: 'post',
    url: 'http://localhost/php-mvc/user/profile',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'access_token': access_token
    },
  };
  
  axios(config)
    .then(function (response) {
      console.log('response => ', response);
      onSuccess(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  
}

