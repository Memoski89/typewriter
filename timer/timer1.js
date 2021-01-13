let input = process.argv[2];

const alarm = (input) => {
  let beep =[]
  beep.push(input)
  for (let value of beep) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, value)

  }
 
};
alarm(input)

