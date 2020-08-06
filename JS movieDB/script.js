
const url2="https://api.themoviedb.org/3/genre/movie/list?api_key=5144e83411256d388c3e668c8aa3cc83&language=en-US";
function buildurl(int){
   const url='https://api.themoviedb.org/3/movie/'+int+'?api_key=5144e83411256d388c3e668c8aa3cc83';
   return url;
}
function createlist(array){
    let list=document.getElementById("list");
    array.forEach(element => {
        var option = document.createElement("option");
        option.text = element.name;
        option.value = element.id;
        list.add(option);
    });
}
//funkcia si porovna data a ak existuje v arrayi id ziadaneho zanru tak vrati true
function analyzegenres(array,genre){ 
    array.forEach(element => {
        if(element.id==genre){
            return true;
        }else return false;
    });
}
var image="http://image.tmdb.org/t/p";
async function get_Movie(){
    let aray=[];
    let array_genres=[];
        const response=await fetch(url2);
        data1= await response.json();
        // objekt na push do arrayu->vsetky kluce do [0] listu
        Object.keys(data1).forEach(function (key){
            array_genres.push(data1[key]);
        });
        createlist(array_genres[0]);
        var buffer=539;
 for (let index = 530; index < buffer; index++) {
    const response=await fetch(buildurl(index));
    data= await response.json();
    //hadze errorik tomorrow i fix :D 
    if(analyzegenres(data.genres,28)) {console.log("chuj");}
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
x.setAttribute("id", "obrazok");
x.setAttribute("alt","obrazk");
x.setAttribute("class","imgfield");
x.setAttribute("src","http://image.tmdb.org/t/p/w500/"+path);
return outerdiv;
}