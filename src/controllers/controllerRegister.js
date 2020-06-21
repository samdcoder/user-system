const axios = require('axios').default;

export default (d) => {
  console.log('data in controller => ', d)
  const {userName: username, password, email, phone: contact} = d;
  const url = 'http://localhost/php-mvc/user/register';
  const headers = {'content-type': 'application/x-www-form-urlencoded'};
  const data = {
    headers,
    username,
    email,
    password,
    contact
  };
  
  axios.post(url, data, {headers: headers})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}