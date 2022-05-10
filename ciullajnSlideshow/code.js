
var myMarvelCharacters = [];


myMarvelCharacters[0] = {src: 'hulk.jpg', alt: 'Hulk'};
myMarvelCharacters[1] = {src: 'ironman.jpg', alt: 'IronMan'};
myMarvelCharacters[2] = {src: 'magneto.jpg', alt: "Magneto"};
myMarvelCharacters[3] = {src: 'nightcrawler.jpg', alt: "NightCrawler"};
myMarvelCharacters[4] = {src: 'spiderman.jpg', alt: "SpiderMan"};
myMarvelCharacters[5] = {src: 'venom.jpg', alt: "Venom"};
myMarvelCharacters[6] = {src: 'wolverine.jpg', alt: "Wolverine"};

var getMarvelCharacter = document.getElementById("myPictures");

var picture= [];
var i = 0;
for (i = 0; i < 7; i++){
    picture[i] = '<img src="' + myMarvelCharacters[i].src + '" alt ="' + myMarvelCharacters[i].alt + '" />'; 
}

var currentPicture = 0;


var forward = function(){
    console.log('here' + currentPicture);
    
    if (currentPicture >= 0 && currentPicture < myMarvelCharacters.length-1){
        currentPicture++;
        getMarvelCharacter.innerHTML = picture[currentPicture];
    }
    else if (currentPicture == myMarvelCharacters.length-1){
        currentPicture=0;
        getMarvelCharacter.innerHTML = picture[currentPicture];
    }

   
};

var back = function(){
    console.log('here' + currentPicture);
   
     if (currentPicture > 0){
        currentPicture--;
        getMarvelCharacter.innerHTML = picture[currentPicture];
    }
    else if (currentPicture == 0){
        currentPicture=myMarvelCharacters.length-1;
        getMarvelCharacter.innerHTML = picture[currentPicture];
        
    }

    
};


document.getElementById('next').onclick = forward;
document.getElementById('previous').onclick = back;