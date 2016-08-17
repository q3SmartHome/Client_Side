angular
  .module('homeApp')
  .factory('factory', function() {

  var counter = 0,
  users = [
    {id: ++counter, username: 'Lucy', password: '1234', zip: 80201},
    {id: ++counter, username: 'Bradford', password: '1234', zip: 80201},
    {id: ++counter, username: 'Daniel', password: '1234', zip: 80201}
  ];

  return {

    users: function() {
      return users;
    },
    addUser: function(form) {
      console.log(form);
      users.push({id: ++counter, username: form.username, password: form.password, zip: form.zip});
      form.username = '';
      form.password = '';
      form.zip = '';
    }
  };
});
