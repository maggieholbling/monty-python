const typewriter = function (sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, i*50)
  };
  return '';
}

module.exports = typewriter;

// const typewriter = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//       console.log(array[i]);
//     }, i*1000)
//   };
// }

// module.exports = typewriter;

