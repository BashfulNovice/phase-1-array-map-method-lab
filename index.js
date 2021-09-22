const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// //Function identifies spaces in a sentance, the character after a space must be a new word,
// //the first letter of which needs to be capitalized. 
// function findWords (string) {
//   let spaces = [];
//   spaces[0] = 0;
//   j = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string.charAt(i) === ' ') {
//       spaces[j] = i;
//       j++;
//       //console.log(i);
//     };
//   };
// //console.log(spaces);
// return spaces;
// };

// breakString = (sentance) => {
//   let sentanceArray = sentance.split(' ');
//   return sentanceArray;
//   console.log(sentanceArray);
// }

function tCaseString (value, index, arr) {
  let splitArray = value.split(' ');
  let newArray = [];
  for (let i = 0; i < splitArray.length; i++) {
      let temp = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
      newArray.push(temp);
      //console.log(newArray);
  }
  return newArray.join(' ');
  
}


const titleCased = () => {
  
  let improved = tutorials.map(tCaseString);


  return improved;

}
//titleCased(tutorials);