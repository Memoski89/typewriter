const readline = require("readline");
const input = process.argv.splice(2);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("beginning");

const survey = () => {
  let response = "";

  rl.question(
    `What's your name? Nicknames are also acceptable :) `,
    (answer1) => {
      response += answer1;
      rl.question(`What's an activity you like doing? `, (answer2) => {
        response += answer2;
        rl.question(`What do you listen to while doing that? `, (answer3) => {
          response += answer3;
          rl.question(
            `Which meal is your favourite (eg: dinner, brunch, etc.) `,
            (answer4) => {
              response += answer4;
              rl.question(
                `What's your favourite thing to eat for that meal? `,
                (answer5) => {
                  response += answer5;
                  rl.question(
                    `Which sport is your absolute favourite? `,
                    (answer6) => {
                      response += answer6;
                      rl.question(
                        `What is your superpower? In a few words, tell us what you are amazing at! `,
                        (answer7) => {
                          response += answer7;
                          console.log(`Hi ${answer1}!!!\n So you like${answer2} while listing to ${answer3} do you also enjoy listening to ${answer3}while watching ${answer6} while eating ${answer5} during ${answer4}? \n ${answer1}'s random fact:\n ${answer7}`);
                          rl.close();
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        });
      });
    }
  );
};

survey();
