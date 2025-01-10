const game = {
    title: "Amazing Game",
    description: "A fun and engaging game with 3 difficulty levels.",
    lvlsNumber: 3,
  
    info() {
      console.log(`\nGame Info:\nTitle: ${this.title}\nDescription: ${this.description}\nLevels: ${this.lvlsNumber}\n`);
    },
  
    chooseLvl() {
      let level;
      do {
        const input = prompt("Choose a level: EASY, NORMAL, HARD").toUpperCase();
        switch (input) {
          case "EASY":
            level = 1;
            break;
          case "NORMAL":
            level = 2;
            break;
          case "HARD":
            level = 3;
            break;
          default:
            console.log("Invalid input. Please try again.");
            level = 0;
        }
      } while (level === 0);
      return level;
    },
  
    lvl1() {
      const numbers = [];
      for (let i = 0; i < 5; i++) {
        const num = parseFloat(prompt(`Enter number ${i + 1}:`));
        if (!isNaN(num)) {
          numbers.push(num);
        } else {
          console.log("Invalid input. Please enter a valid number.");
          i--;
        }
      }
      const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
      console.log(`The average of the numbers is: ${avg}`);
      return avg;
    },
  
    lvl2() {
      const num1 = Math.floor(Math.random() * 100);
      const num2 = Math.floor(Math.random() * 100);
      const userAnswer = parseInt(prompt(`What is the sum of ${num1} + ${num2}?`), 10);
      const correctAnswer = num1 + num2;
      if (userAnswer === correctAnswer) {
        console.log("Correct! Great job!");
        return true;
      } else {
        console.log(`Wrong! The correct answer was ${correctAnswer}.`);
        return false;
      }
    },
  
    lvl3() {
      const inputString = prompt("Enter a string:");
      const resultString = inputString.replace(/[aeiouAEIOU]/g, "");
      console.log(`The string without vowels: ${resultString}`);
      return resultString;
    },
  
    play() {
      this.info();
      const level = this.chooseLvl();
      switch (level) {
        case 1:
          this.lvl1();
          break;
        case 2:
          this.lvl2();
          break;
        case 3:
          this.lvl3();
          break;
        default:
          console.log("Something went wrong.");
      }
    },
  };
  
  game.play();
  