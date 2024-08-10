let UrlToDo = 'https://jsonplaceholder.typicode.com/todos/1';
let UrlUsers = 'https://jsonplaceholder.typicode.com/users/1';

async function getToDo() {
  try {
    let responce = await fetch(UrlToDo);
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  try {
    let responce = await fetch(UrlUsers);
    return await responce.json();
  } catch (error) {
    console.log(error);
  }
}

async function promiseAll() {
  try {
    const result = await Promise.all([getToDo(), getUser()]);
    const [jsonToDo, jsonUser] = await result;
    console.log('To Do', jsonToDo);
    console.log('User', jsonUser);
  } catch (error) {
    console.log(error);
  }
}

async function promiseRace() {
  try {
    const result = await Promise.race([getToDo(), getUser()]);
    console.log('Race winner:', result);
  } catch (error) {
    console.log(error);
  }
}

promiseAll();
promiseRace();
