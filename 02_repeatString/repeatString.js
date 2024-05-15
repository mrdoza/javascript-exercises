const repeatString = function(word, num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    string += word;
  }
  return(string);
};
repeatString("hey",3);

const repeatStringHello = function(word, num) {
    let string = "";
    for (let i = 0; i < num; i++) {
      string += word;
    }
    return(string);
  };  
  repeatStringHello("hello",10);

  const repeatStringHi = function(word) {
    return(word);
  }
  repeatStringHi("hi");

  const repeatStringBye = function(word) {
    return("");
  }
  repeatStringBye("bye");

  const repeatStringGB = function(word, num) {
    let string = "";
    if (num < 0) {
      string = "ERROR";
      return(string);
    } else {
    for (let i = 0; i < num; i++) {
      string += word;
    }
    return(string);
  }};
  
  repeatStringGB("goodbye",-8);

  const repeatStringRan = function(word, num) {
    let string = "";
    for (let i = 0; i < num; i++) {
      string += word;
    }
    return(string);
  };
  let rand = Math.floor(Math.random() * 1000)
  repeatStringRan("hey",rand);

  const repeatStringB = function(word, num) {
    let string = "";
    for (let i = 0; i < num; i++) {
      string += word;
    }
    return(string);
  };
  repeatStringB("",3);

// Do not edit below this line
 module.exports = repeatString;
