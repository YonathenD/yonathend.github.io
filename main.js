import './style.css'
import Experience from "./Experience/Experience.js"

//Place orthographic view of my room on the website (document)
const experience = new Experience(document.querySelector(".experience-canvas"));

//White custom cursor on website
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(e){

 var x= e.clientX;
 var y = e.clientY;
 
 cursor.style.left = x + "px";
 cursor.style.top = y + "px";
})

//Red custom cursor on website
var cursor2 = document.getElementById('cursor2');

document.addEventListener('mousemove', function(e){

 var x= e.clientX;
 var y = e.clientY;
 
 cursor2.style.left = x + "px";
 cursor2.style.top = y + "px";
})