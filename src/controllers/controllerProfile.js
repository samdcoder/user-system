import {readCookie} from "../helper";
import {getUrl} from "../config";

var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({});

export default (d, onSuccess) => {
  const userId = readCookie('user_id');
  const url = getUrl() + `php-mvc/user/profile/${userId}`;
  
  var config = {
    method: 'post',
    url: url,
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

