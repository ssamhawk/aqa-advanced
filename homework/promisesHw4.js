class TodoService {
  constructor(url) {
    this.url = url;
  }
  async getToDo() {
    try {
      let responce = await fetch(this.url);
      return await responce.json();
    } catch (error) {
      console.log(error);
    }
  }
}

class UserService {
  constructor(url) {
    this.url = url;
  }
  async getUser() {
    try {
      let responce = await fetch(this.url);
      return await responce.json();
    } catch (error) {
      console.log(error);
    }
  }
}

let UrlToDo = 'https://jsonplaceholder.typicode.com/todos/1';
let UrlUsers = 'https://jsonplaceholder.typicode.com/users/1';

const toDoService = new TodoService(UrlToDo);
const userService = new UserService(UrlUsers);

async function promiseAll() {
  try {
    const result = await Promise.all([
      toDoService.getToDo(),
      userService.getUser(),
    ]);
    const [jsonToDo, jsonUser] = await result;
    console.log('To Do', jsonToDo);
    console.log('User', jsonUser);
  } catch (error) {
    console.log(error);
  }
}

async function promiseRace() {
  try {
    const result = await Promise.race([
      toDoService.getToDo(),
      userService.getUser(),
    ]);
    console.log('Race winner:', result);
  } catch (error) {
    console.log(error);
  }
}

promiseAll();
//
//
