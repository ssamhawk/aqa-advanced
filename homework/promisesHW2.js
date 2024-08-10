let UrlToDo = 'https://jsonplaceholder.typicode.com/todos/1';
let UrlUsers = 'https://jsonplaceholder.typicode.com/users/1';

function getToDo() {
  return fetch(UrlToDo)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function getUser() {
  return fetch(UrlUsers)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
Promise.all([getToDo(), getUser()])
  .then((results) => {
    const [jsonToDo, jsonUser] = results;
    console.log('To Do: ', jsonToDo);
    console.log('User: ', jsonUser);
  })
  .catch((error) => console.log(error));

Promise.race([getToDo(), getUser()])
  .then((result) => console.log('Race winnner : ', result))
  .catch((error) => console.log(error));

promiseAll();
//
