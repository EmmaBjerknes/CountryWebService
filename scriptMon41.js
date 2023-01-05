'use strict';

const imgElement = document.getElementsByTagName('img')[0];
const buttonNext = document.querySelector('#next');
const buttonPrev = document.querySelector('#prev');

imgElement.style.height = '30px';
imgElement.style.width = '50px';


const countries = {
    country: [
        {
            name: 'Sweden',
            capital: 'Stockholm',
            population: '10,462,498',
            language : 'Swedish',
            democracy : true,
        },
        {
            name: 'Finland',
            capital: 'Helsinki',
            population: '5,553,000',
            language : 'Finnish',
            democracy : false,
        },
        {
            name: 'Norway',
            capital: 'Oslo',
            population:  '5,425,270',
            language : 'Norwegian',
            democracy : true,
        },
    ],
    flagArray: [
        'img/Sweden.png',
        'img/Finland.png',
        'img/Norway.png',
    ],
    displayCountry: function (i){
        const liElements = document.getElementsByTagName('li');
        liElements[0].innerHTML = `Name: ${this.country[i].name}`;
        liElements[1].innerHTML = `Capital: ${this.country[i].capital}`;
        liElements[2].innerHTML = `Population: ${this.country[i].population}`;
        liElements[3].innerHTML = `Language: ${this.country[i].language}`; 
        liElements[4].innerHTML = "Democracy: " + ((this.country[i].democracy) ? "Yes" : "No"); 
        imgElement.setAttribute('src', countries.flagArray[i]);
    },
    addNewcountry: function(){
        this.pushcountry(newName.value, newCapital.value, newPopulation.value, newLanguage.value, newDemocracy.value, newFlag.value);
    },
    pushcountry: function (newName, newCapital, newPopulation, newLanguage,newDemocracy, newFlag) {
        this.country.push({
            name: newName,
            capital: newCapital,
            population: newPopulation,
            language: newLanguage,
            democracy: newDemocracy,
        })
        this.flagArray.push(newFlag);
    },
}

//---------------Information box-----------------------------------
window.addEventListener('load', function(){
    countries.displayCountry(0);
})

let numberOfClicks = 1;
buttonNext.addEventListener('click', function(){
    numberOfClicks++;
    if(numberOfClicks > countries.country.length){
        countries.displayCountry(0); 
        numberOfClicks = 1;   
    }
    for (let i = 0; i < numberOfClicks; i++) {
        countries.displayCountry(i);    
    }
});

buttonPrev.addEventListener('click', function(event){
    numberOfClicks--;
    if(numberOfClicks === 0){
        numberOfClicks = countries.country.length;
    }
    for (let i = 0; i < numberOfClicks; i++) {
        countries.displayCountry(i);
    }
});


//------Form for adding country---------
/* WORK IN PROGG const x = document.getElementsByTagName("label");
x.style.display = 'block';
*/

const form = document.querySelector('#form-id');
form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Added!');
    countries.addNewcountry();
    //--------- Empty form----------------------
    const inputs = document.querySelectorAll('#newName, #newCapital, #newPopulation, #newLanguage, #newDemocracy, #newFlag')
    inputs.forEach(input =>{
        input.value = '';
    });
})

//---------------------Create list w names-----------------------------
// skapar alla element inom ul-listan
const ulElem = document.querySelector('#allcountries')
for (let i = 0; i < countries.country.length; i++) {

    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    const x = document.createTextNode('Go to');

    newLi.innerHTML = countries.country[i].name + ": " ;
    newLi.style.padding = '2px';

    ulElem.append(newLi);
    newLi.append(newBtn);
    newBtn.appendChild(x);

    newBtn.setAttribute('id', i);
    newBtn.addEventListener('click', function(){
        countries.displayCountry(i);
    })   
}; 


//------------Edit content-- WORK ON THIS -------------
/* 
// Edit country info - still work in progress--------
const paragraph = document.getElementById('countryInfo');
const editButton = document.getElementById('editButton');
const endButton = document.getElementById('endButton');

editButton.addEventListener('click', function() {
    paragraph.contentEditable = true;
});
endButton.addEventListener('click', function(){
    paragraph.contentEditable = false;
}); */