let p1 = Promise.resolve('hello there i am here');

async function getPromise() {
  let v = await p1;
}
getPromise();
