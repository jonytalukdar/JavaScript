const baseApi = 'https://jsonplaceholder.typicode.com/';
fetch(`${baseApi}users/1`)
  .then((response) => response.json())
  .then((data) => console.log(data));
