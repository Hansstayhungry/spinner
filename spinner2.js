const spinner = (counter, max) => {
  const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

  if (counter >= max) {
    return process.stdout.write('\rcomplete ');
  }
// use % module to loop through array.
  process.stdout.write(`\r${symbols[counter % symbols.length]}   `);

  setTimeout(() => {
    spinner(counter + 1, 10);
  }, 200);
};

spinner(0, 10);