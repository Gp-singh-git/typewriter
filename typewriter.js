const sentence = "hello there from lighthouse labs";
let i = 50;
for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + i) 
  i += 50;

}
console.log("\n");
