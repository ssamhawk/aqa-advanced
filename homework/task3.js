import chalk from 'chalk';

const number = 5;

let i = 1;

console.log(chalk.red('While'));

while (i < 10) {
  let result = i * number;
  console.log(number + ' * ' + i + ' = ' + result);
  i++;
}

console.log(chalk.red('For'));

for (let j = 1; j < 10; j++) {
  let result = j * number;
  console.log(number + ' * ' + j + ' = ' + result);
}
