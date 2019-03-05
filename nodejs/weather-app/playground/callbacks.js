const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Andriy',
    job: 'Software Engineer'
  };

  setTimeout(() => {
    callback(user);
  }, 3000)

};

getUser(33, (userObject) => {
  console.log(userObject);
});