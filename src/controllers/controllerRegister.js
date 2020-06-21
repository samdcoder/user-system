import {getUrl} from "../config";

var axios = require('axios');
var qs = require('qs');

export default (d, onSuccess) => {
  const {userName: username, password, email, phone: contact} = d;
  const data = qs.stringify({
    username,
    email,
    password,
    contact
  });
  const url = getUrl() + 'php-mvc/user/register';
  
  
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
      onSuccess(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  
}

