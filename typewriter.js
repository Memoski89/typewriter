/* const sentence = "hello there from lighthouse labs";
let timer = 25;
let seperater ='\n'
let finatimer 
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, timer);
  timer += 25
} */
const typeWriter = (string) => {
  let interval = 50;

  for (let letter of string) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, interval);
    interval += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, interval);
  //console.log(interval) interval value is being changed!!!!!
};

typeWriter("hello there from lighthouse labs");
