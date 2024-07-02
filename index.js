import {getmovieReviewData} from './dataStore.js';
const movieData=getmovieReviewData()
 function init(){
  printtStatis(movieData)
  printMovilist(movieData);
}
/*total Status print start */
function printtStatis(data){
const flatMoviesReviews=data.flat();
/* All movie counter length */
const totalMovies = data.length;
const totalReviews = flatMoviesReviews.length;
const totalRating= flatMoviesReviews.reduce((acc,item)=>{
  return acc + item.rating;
},0);
const avarageRating=(totalRating/totalReviews).toFixed(2);
const toMovieElement =document.getElementById('tMovieId');
addState(toMovieElement,totalMovies);
const avarageRatingElement= document.getElementById('tRatingId');
addState(avarageRatingElement,avarageRating);
const tReviewElement= document.getElementById('tReviewsId');
addState(tReviewElement,totalReviews);
}
function addState(elem,value){
  const span = document.createElement('span');
  span.innerHTML=value;
  elem.appendChild(span);
}
/*total Status print end*/
function printMovilist(data){
const moviListIds=document.querySelector('#moviListId UL');
  const flatMovie=data.flat();
  const sorted=flatMovie.toSorted((a,b)=>b.on - a.on);
  addportedprint(moviListIds,sorted)
}

function addportedprint(moviListIds, sorted){
  sorted.map((movie)=>{
   const liElem =document.createElement('li');
   const titleElem =document.createElement('p');
titleElem.innerHTML=`Movie Name : ${movie.title} - Rating: ${movie.rating}`;
liElem.classList.add('card');
liElem.appendChild(titleElem); 
const contentElem=document.createElement('p');
contentElem.innerHTML= "Movie Comment: " + movie.content;
liElem.appendChild(contentElem);
const byReviewElem=document.createElement('p');
byReviewElem.innerHTML="Name: " +  movie.by;
liElem.appendChild(byReviewElem);
const timeElem=document.createElement('p');
timeElem.innerHTML="Time: " +  new Intl.DateTimeFormat('en-BANGLA').format(movie.on);
liElem.appendChild(timeElem);
moviListIds.appendChild(liElem)
  });
}
init();




 Other work 
document.querySelector('#inputValue').addEventListener('change', (e)=>{
e.preventDefault();
  const inptTexts = e.target.value;
  e.target.value="";
  printResult(inptTexts);
  if(inptTexts.length > 2){
    alert("This Number length less Than 3")
  }
})
function printResult(inptTexts){
const outputText =document.querySelector('h1');
  switch(inptTexts){
    case "1":
  outputText.innerHTML="S M Azim Mia, Village:Utmarchar";
    break;
    case '2':
    outputText.innerHTML="MD Rezaul Karim Village: Utmarchar";
    break;
        case '3':
    outputText.innerHTML="Md Sohel Village: Utmarchar";
    break;
    case "":
    outputText.innerHTML="Movie Moniya";
    break;
    default :
    inptTexts='not found';
    document.querySelector('h1').innerHTML=inptTexts;
    break;
    }
}
