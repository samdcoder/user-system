import {getUrl} from "../config";

var axios = require('axios');
var qs = require('qs');

export default (d, onSuccess) => {
  const {userName: username, password} = d;
  const data = qs.stringify({
    username,
    password,
  });
  const url = getUrl() + '/php-mvc/user/login'
  var config = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data
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

