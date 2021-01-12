// 4311o th3r3 w0r1d must be printed seperatly on three seperate lines 3 seconds after exectuted
/* console.log('4311o th3r3 w0r1d')
setTimeout(() => console.log('4311o th3r3 w0r1d'), 3000)
setTimeout(() => console.log('4311o'), 4000)
setTimeout(() => console.log('th3r3'), 5000)
setTimeout(() => console.log('w0r1d'), 6000) */
/* setTimeout(() =>, 3000); */

const timerString = (string) => {
  let words = string.split(" ")
  let  interval = 1000
  for (let word of words) {
    setTimeout(() => {
      console.log(word)
    }, interval);
    interval += 1000;
  }
  console.log(string)
}

timerString('4311o th3r3 w0r1d')

/* what i expect is 
1) 4311o th3r3 w0r1d
2) 4311o
3) th3r3
4) w0r1d  */


/* const output = (text) => {
  let words = text.split(" ");
    let interval = 1000;
    for (let word of words) {
      setTimeout(() => {
      console.log(word)
    }, interval);
    interval += 1000;
    }
  } */
 