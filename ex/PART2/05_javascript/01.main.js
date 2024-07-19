/*let button = document.querySelector('button');
button.addEventListener('click',function(){
  alert('안녕')
}) html 하단에 스크립트 연결시 */

document.addEventListener('DOMContentLoaded',()=>{
  let button = document.querySelector('button');
    button.addEventListener('click',function(){
      alert('안녕')
    })
})/* html 상단에 스크립트 연결시 */

let num = 10;
let str = '문자';
let bool = true;
let n = null;
let u;

console.log(n);

let nums = [10,20,30,40,50];
let langs = ['html','css', 'javasclipt']
let obj = new object();//빈객체
let sum = function(a,b){
  return a+b
}