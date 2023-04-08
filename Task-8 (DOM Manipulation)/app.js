// // // const title= document.querySelector('#main-heading');
// // // title.style.color='red';
// // // console.log(title);
// // // const Tiddies=document.querySelectorAll('td');
// // // Tiddies.forEach(TDy => {
// // //     TDy.style.fontSize='2rem';
// // // });

// // // console.log(Tiddies);

// // // // Creating Elements
// // // const Table=document.querySelector('tbody');
// // // const Tr=document.createElement('tr');
// // // Table.append(Tr);
// // // // Modifying Text
// // // Tr.innerText="hello";

// // // //Modifying Attributes
// // // Tr.setAttribute('class','footer');
// // // Tr.removeAttribute('class');

// // // Tr.classList.add('footer');
// // // console.log(Tr.classList.contains('footer'));

// // // //remove Element

// // // Tr.remove();

// // let ul=document.querySelector('ul');
// // // console.log(ul.parentNode.parentNode.parentNode);
// // // console.log(ul.parentElement.parentElement.parentElement);
// // // const html=document.documentElement;
// // // console.log(html.parentNode);
// // // console.log(html.parentElement);
// // // console.log(ul.childNodes);
// // // console.log(ul.firstChild);
// // // console.log(ul.lastChild);

// // // ul.childNodes[3].style.backgroundColor='blue';
// // // console.log(ul.children);
// // // console.log(ul.firstElementChild);
// // // console.log(ul.lastElementChild);

// // const div=document.querySelector('div');

// // console.log(ul.previousElementSibling);
// // console.log(ul.nextElementSibling);

// const revealBtn=document.querySelector('.AboutMe');
// // function changeBgColor(){
// //     Button2.style.backgroundColor='red';
// // }

// // function alertBtn(){
// //     alert("I am me");
// // }

// // Button2.addEventListener("click",alertBtn);
// // Button2.addEventListener("mouseover",changeBgColor);
// const hiddenCont=document.querySelector('.hidden-text');
// function revealContent(){
//     if(hiddenCont.classList.contains('AboutMe'))
//     {

//         hiddenCont.classList.remove('AboutMe')
//     }
//     else{
//      console.log('clicked')
//         hiddenCont.classList.add('AboutMe');

//     }
// }
// revealBtn.addEventListener('click',revealContent);

// document.querySelector('#Football').addEventListener(
//    'click',
//     function(e){
//         console.log('football Clicked');

//     if(e.target.matches('li')){
//         e.target.style.backgroundColor='grey';
//     }}
// )
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is Clicked");
  const target = e.target;
  target.style.backgroundColor = "lightgrey";
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");
newSport.innerText = "Rugby";
newSport.setAttribute("id", "Rugby");
sports.append(newSport);
