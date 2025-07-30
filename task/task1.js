const input = document.getElementById("input");
const list =  document.getElementById("list");
const icon = document.getElementById("icon")
 
function fun(){
const li = document.createElement("li")
    li.innerHTML= input.value;
    list.appendChild(li);
    input.value="";
    li.style.fontSize="20px";
    li.style.display="flex";
    li.style.alignItems="center";
    li.style.justifyContent="space-between";
    li.style.borderBottom="1px solid white";
    li.style.marginBottom="20px";

 const deletebtn = document.createElement("button");
document.body.appendChild(deletebtn);
deletebtn.textContent ="Delete";
deletebtn.style.backgroundColor="rgba(0, 0, 0, 0.01)";
deletebtn.style.border="none";
deletebtn.style.color="white";
deletebtn.style.fontSize="17px";
deletebtn.onclick = function(){
    li.remove();
}

li.appendChild(deletebtn);
document.getElementById("list").appendChild(li);



}