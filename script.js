// function binaryState(arr,item) {
//     let low = arr[0],
//         high = arr[arr.length-1];
//     while (low<=high){
//         let middle = Math.floor((low+high)/2);
//         let guess = arr[middle];
//         console.log(guess)
//         if (guess==item){
//             console.log(item)
//             break
//         }
//         else{
//             if (guess<item) {
//                 low = middle
//             }
//             else if(guess>item){
//                 high = middle
//             }
//         }
//     }
// }
// let ar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// binaryState(ar,17)
// console.log(2)
// async function f() {

//     let promise = new Promise((resolve) => {
//       setTimeout(() => resolve("готово!"), 1000)
//     });
  
//     let result = promise; // будет ждать, пока промис не выполнится (*)
  
//     console.log(result); // "готово!"
//   }
  
//   f();
//   async function showAvatar() {

//     // запрашиваем JSON с данными пользователя
//     let response = await fetch('/article/promise-chaining/user.json'),
//         user = await response.json();
  
//     // запрашиваем информацию об этом пользователе из github
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();
  
//     // отображаем аватар пользователя
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
  
//     // ждём 3 секунды и затем скрываем аватар
//     await new Promise((resolve) => setTimeout(resolve, 3000));
  
//     img.remove();
  
//     return githubUser;
//   }
  
//   showAvatar();
  
//   async function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404
// async function loadJson(url) {
//     let response = await fetch(url);
//         if(response.status == 200){
//             let fetchedUrl = await response.json();
//             return fetchedUrl
//         }
//     throw new Error(response.status)
// }
// alert(loadJson('no-such-url.json'))
// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//  async function loadJson(url) {
    
//       let response = await fetch(url);
//         if (response.status == 200) {
//             let json = await response.json()
//           return json;
//         } else {
//           throw new HttpError(response.status);
//         }
      
//   }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
// async  function demoGithubUser() {
//     let name = await prompt("Введите логин?", "iliakan");
  
//     await loadJson(`https://api.github.com/users/${name}`)
//       let user =await alert(`Полное имя: ${user.name}.`);
      
//         (err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }
  
//   demoGithubUser();
// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     // ...что здесь написать?
//     // чтобы вызвать wait() и дождаться результата "10" от async–функции
//     // не забывайте, здесь нельзя использовать "await"
//    let waited = Promise.all(wait)
//    console.log(waited[0])
//   }
//   f()
// function* gen (){
//     let ask1= yield '2+2=?';
//     console.log(ask1);
//     let ask2 = yield '3+3=?'
//     console.log(ask2);
// }
// let generator = gen();
// console.log(generator.next().value);
// console.log(generator.next(4).value);
// generator.next(9);
// function* pseudoNum (seed){
//     let value = seed;
//     while(1){
//         value = value * 16807 % 2147483647;
//         yield value
//     }
// }
// let gen = pseudoNum(1);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// function pseudoNum(seed) {
//     let value = seed;
//     while (4){
//         value = value * 16807 %  2147483647
//         break
//     }
// }
// console.log(document.body.firstElementChild);
// let tab = document.querySelector('#age-table');
// const lab = tab.querySelectorAll('label');
// const firstTd = tab.querySelectorAll('td')[0];
// const formSearch = document.getElementsByName('search')[0];
// const firstInp = formSearch.querySelector('input');
// const lastInp = formSearch.lastElementChild;
// console.log(tab);
// console.log(lab);
// console.log(formSearch);
// console.dir(firstInp); 
// console.log(lastInp);
// const yearsALive = 60*60*24*364*22;
// console.log(`I am alive for ${yearsALive} seconds`);