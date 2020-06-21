import {readCookie} from "../helper";

var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({});

export default (d, onSuccess) => {
  const userId = readCookie('user_id');
  var config = {
    method: 'post',
    url: `http://localhost/php-mvc/user/profile/${userId}`,
    headers: {
      'x-access_token': readCookie('access_token'),
    },
    data: {}
  };
  
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      onSuccess(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  
  
}

