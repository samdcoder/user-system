var axios = require('axios');
var qs = require('qs');

export default (d, onSuccess) => {
  const {userName: username, password} = d;
  const data = qs.stringify({
    username,
    password,
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost/php-mvc/user/login',
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

