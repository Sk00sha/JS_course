var xmlhttp = new XMLHttpRequest();
var url = "postavy.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    getdudes(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getdudes(myArr){
myArr.forEach(element => {
    console.log(element);
    var x=document.body.querySelector(".row");
    x.appendChild(createdudes(element));
});
}
function createdudes(element){
   var a= document.createElement("article");
    var b=document.createElement("h4");
    var c=document.createElement("a");
    var d=document.createElement("p");
    var e=document.createElement("footer");
    e.setAttribute("class","comments");
    c.innerText=element.who;
    d.innerText=element.wat;
    e.innerText=element.comments;
    b.appendChild(c);
    a.appendChild(b);
    a.appendChild(d);
    a.appendChild(e);
    return a;
}