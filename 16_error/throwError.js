try {
  console.log('I am line one');
  console.log('I am line two');
  throw new Error('This is your Error');
  console.log('I am line three');
  console.log('I am line four');
} catch (error) {
  console.log(error.mesasge);
}
