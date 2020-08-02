
const url='https://api.themoviedb.org/3/movie/530?api_key=5144e83411256d388c3e668c8aa3cc83';
//const url_druha="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?api_key=5144e83411256d388c3e668c8aa3cc83";
function buildurl(int){
   const url='https://api.themoviedb.org/3/movie/'+int+'?api_key=5144e83411256d388c3e668c8aa3cc83';
   return url;
}
var image="http://image.tmdb.org/t/p";
async function get_Movie(){
    let aray=[];
   for (let index = 530; index < 539; index++) {
       const response=await fetch(buildurl(index));
       data= await response.json();
       aray.push({source:data.poster_path,nazov:data.original_title,zanre:data.genres,homepage:data.homepage});
}
let output='';
var div =document.createElement("div");
div.setAttribute("id","divid");
document.body.appendChild(div);
for (let index = 0; index < 8; index++) {
  output+= `<li>${aray[index].nazov}<li/>`;
document.getElementById("divid").appendChild(createimage(aray[index].source,aray[index].nazov,aray[index].homepage));

}
}
get_Movie();
function createimage(path,name,homepage){
    var outerdiv=document.createElement("div");
    outerdiv.setAttribute("class","card");
    var innerdiv=document.createElement("div");
    innerdiv.setAttribute("class","genre");
   var x = document.createElement("img");
   x.setAttribute("title",name);
   var button=document.createElement("BUTTON");
   button.setAttribute("class","myButton");
   button.innerHTML="Visit page";
   button.title=homepage;
   button.addEventListener('click',function(){
       console.log(window.location.replace(this.title));
   })
   var p=document.createElement("h2");
   var p2=document.createElement("h2");
   p2.setAttribute("class","p22");
   p2.textContent="70%";
   innerdiv.appendChild(p2);
   p.textContent=name;
  outerdiv.appendChild(x);
  outerdiv.appendChild(innerdiv);
  outerdiv.appendChild(p);
  outerdiv.appendChild(button);
  //console.log(button);
x.setAttribute("id", "obrazok");
x.setAttribute("alt","obrazk");
x.setAttribute("class","imgfield");
x.setAttribute("src","http://image.tmdb.org/t/p/w500/"+path);
return outerdiv;
}
function replacesite(webpage){
   window.location.replace(webpage);
}