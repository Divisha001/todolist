const inputbox = document.getElementById("input-box");
const list_container = document.getElementById("list-container");
function addtask(){
if(inputbox.value ===''){
alert("you must write something!");
}
else{
let li = document.createElement("li");
li.innerHTML = inputbox.value
list_container.appendChild(li)
let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span)
}
inputbox.value = "";
SaveDate();
}
list_container.addEventListener("click",function(e){
if(e.target.tagName === "LI"){
e.target.classList.toggle("checked");
SaveDate();
}  
else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
}
}, false);
function SaveDate(){
localStorage.setItem("data", list_container.innerHTML);
}
function showtask(){
list_container.innerHTML = localStorage.getItem("data");
}
showtask();
