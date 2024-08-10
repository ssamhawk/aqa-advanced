function WaitForShow(string, time) {
  let text = () => {
    console.log(string);
  };
  return setTimeout(text, time);
}

WaitForShow('hello', 5000);
//
//
