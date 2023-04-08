// //server impersonation 
// //CallBAck
// const posts=[
//     {title:'Post One', body: 'This is post one'},
//     {title:'Post Two', body: 'This is post two'},
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }
// function createPost(post,callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },2000)
// }

// createPost({title:'Post Three',body: 'This is Post Three'},getPosts);


//Promises
// const posts=[
//     {title:'Post One', body: 'This is post one'},
//     {title:'Post Two', body: 'This is post two'},
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         posts.push(post);

//         const error=false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject('Errooooooooor');
//         }
//     },2000)
//     })
// }

// // createPost({title:'Post Three',body: 'This is Post Three'}).then(getPosts).catch(err=>console.log(err));
// //Promise.all

// const promise1=Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'GoodBye'));
// const promise4=fetch('')
// Promise.all([promise1,promise2,promise3,promise4]).then((values)=> console.log(values));


// const posts=[
//     {title:'Post One', body: 'This is post one'},
//     {title:'Post Two', body: 'This is post two'},
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000)
// }
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         posts.push(post);

//         const error=false;
//         if(!error){
//             resolve();
//         }
//         else{
//             reject('Errooooooooor');
//         }
//     },2000)
//     })
// }
//async await
// async function init(){
//     await createPost({title:'had to await for this post',body:'post hell'});
//     getPosts();
// }
// init();

//async await fetch

async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    console.log(data);

}
fetchUsers();