const axios = require('axios');
const qs = require('qs');

export default (d, onSuccess) => {
  const {userName: username, password, email, phone: contact} = d;
  const data = qs.stringify({
    username,
    email,
    password,
    contact
  });
  
  const config = {
    method: 'post',
    url: 'http://localhost/php-mvc/user/register',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data
  };
  
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  
}

