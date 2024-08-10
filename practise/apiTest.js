import axios from 'axios';

const res = await axios.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json'
);

console.log(res.data);
