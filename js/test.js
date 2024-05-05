

// // let full_marks=280;
// // let obt_marks=124;

// //40%-->fail
// //40-60 >> C
// // 60-80 -->> B
// //80-90 -->> A
// function percentage(full_marks,obt_marks){
// // 90+ --> O
// let marks=(obt_marks/full_marks)*100;
// console.log(marks);
// if(marks<40){
//     return "fail";
// }
// else if(marks>=40 && marks <60){
//     return "c";
// }
// else if(marks>=60 && marks <80){
//     return "b";
// }
// else if(marks>=80 && marks <90){
//     return "a";
// }
// else{
//     return "O";

// }
// }
// console.log(percentage(280,250));

// console.log(typeof parseInt("5"));
// let arr = [1, 2, 3, 5, 6]
// for(let i=0;i<arr.length;i++){
//     console.log(typeof i);
// }
// for (i of arr){
//     console.log(typeof i);
// }
// let obj = {
//     name: "priyanka",
//     company: "INterra It",
//     age: 25
// }

// let db = [
//     {
//     name: "priyanka",
//     company: "INterra It",
//     age: 25
// },
// {
//     name: "john",
//     company: "tcs",
//     age: 45
// },
// {
//     name: "subham",
//     company: "abc It",
//     age: 35
// }]
// for (i of db){
// console.log(i);
// }
async function show2(){
    let data;
    await fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json()).then((x)=>data=x);
    let user='';
    for (i of data){
    user+=`
    <tr>
    <td>${i.id}</td>
    <td>${i.title}</td>
    <td>${i.body}</td>
    </tr>
    `
}
document.getElementById('table').innerHTML=user;
}
// }
async function show(){
    let id= document.getElementById('id').value;
    let data;
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response)=>response.json()).then((x)=>data=x);
    let user='';
    // for (i of data){
    user+=`
    <tr>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.phone}</td>
    </tr>
    `
// }
document.getElementById('table').innerHTML=user;
}
