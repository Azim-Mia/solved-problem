import {getmovieReviewData} from './dataStore.js';
const movieData=getmovieReviewData();
let sortAcenDesen = false;
 function init(){
  printStatis(movieData)
  printMovilist(movieData);
  sorting(movieData)
}
/*total Status print start */
function printStatis(data){
const flatMoviesReviews=data.flat();
/* All movie counter length */
const totalMovies =data.length;
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
  elem.appendChild(span)
}
/*total Status print end*/
function printMovilist(data){
const moviListIds=document.querySelector('#moviListId UL');
  const flatMovie=data.flat();
  addportedprint(moviListIds,flatMovie)
}
function sorting(data){
//pass data 
    document.getElementById("sortedButton").addEventListener('click', ()=>sortingClickHandle(data));
    document.getElementById("sortByRating").addEventListener('click', ()=>sortingClickHandleRating(data));
    document.getElementById("groupDitails").addEventListener('click', ()=>reviewsGroupDetails(data));
  }
  function sortingClickHandle(data){
  sortAcenDesen = !sortAcenDesen
  const moviListIds=document.querySelector('#moviListId UL');
  const flatMoviesReviews =data.flat();
 const sortedDate= sortAcenDesen ? flatMoviesReviews.toSorted((a,b)=>b.on - a.on):flatMoviesReviews.toSorted((a,b)=>a.on - b.on);
  removeAllChild(moviListIds);
    addportedprint(moviListIds,sortedDate);
  }
  function sortingClickHandleRating(data){
  sortAcenDesen = !sortAcenDesen
  const moviListIds=document.querySelector('#moviListId UL');
  const flatMoviesReviews =data.flat();
 const sortedRating= sortAcenDesen ? flatMoviesReviews.toSorted((a,b)=>b.rating - a.rating):flatMoviesReviews.toSorted((a,b)=>a.rating - b.rating);
  removeAllChild(moviListIds);
    addportedprint(moviListIds,sortedRating);
  }
  function reviewsGroupDetails(data){
  const flatMovie = data.flat();
  const moviListIds=document.querySelector('#moviListId UL');
  removeAllChild(moviListIds);
  const groupReviews = Object.groupBy(flatMovie, ({title})=>title)
  const titleKeys = Reflect.ownKeys(groupReviews);
  titleKeys.forEach((title)=>{
  const liEl =document.createElement("li");
    const hEl =document.createElement('h2');
    liEl.classList.add('card');
    hEl.innerHTML=title;
    //all movie array data access 
    liEl.appendChild(hEl);
    const reviews= groupReviews[title];
    reviews.forEach((views)=>{
const pEl =document.createElement("p");
const message = `🥷
🦸‍♀️By: ${views.by}, Comment: ${views.content}, Rating: ${views.rating}`;
pEl.innerHTML=message;
liEl.appendChild(pEl);
    })
    moviListIds.appendChild(liEl);
  });
  }
function addportedprint(moviListIds, data){
  data.map((movie)=>{
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

function removeAllChild(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}
init();


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
