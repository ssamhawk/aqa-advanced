function getPostById(id) {
  let url = 'https://jsonplaceholder.typicode.com';
  let result = {
    id,
    username: '',
    posts: [],
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}/users`)
      .then((response) => response.json())
      .then((json) => {
        const foundUser = json.find((user) => user.id === id);
        if (foundUser) {
          result.username = foundUser.name;
          fetch(`${url}/posts`)
            .then((response) => response.json())
            .then((json) => {
              const posts = json.filter((post) => post.userId === id);
              result.posts = posts;
              resolve(result);
            })
            .catch((error) => reject(error));
        } else {
          reject(new Error('User not found'));
        }
      })
      .catch((error) => reject(error));
  });
}

getPostById(8)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
