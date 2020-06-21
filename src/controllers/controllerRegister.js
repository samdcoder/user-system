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
  
  // axios.post(url, data, {headers: headers})
  //   .then(function (response) {
  //     onSuccess(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //
  
  var config = {
    method: 'post',
    url: 'http://localhost/php-mvc/user/register',
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

