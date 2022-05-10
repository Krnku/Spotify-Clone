console.log("Welcome to Spotify");

//Initializae the variables:
let songIndex = 0;
let audioElement = new Audio('../songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressbar = document.getElementById('myProgressbar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songitems =Array.from( document.getElementsByClassName('songItem'))

let songs = [

    { songname: "Stay-Justin Bieber", filePath: "../songs/1.mp3", coverPath: "../covers/stay.jpg" },
    { songname: "Lost on me ", filePath: "../songs/2.mp3", coverPath: "../covers/lost on me.jpg" },
    { songname: "Echo", filePath: "../songs/3.mp3", coverPath: "../covers/echo.jpg" },
    { songname: "My Universe", filePath: "../songs/4.mp3", coverPath: "../covers/myuniverse.jpg" },
    { songname: "Butter", filePath: "../songs/5.mp3", coverPath: "../covers/butter.jpg" },
    { songname: "Light-Switch", filePath: "../songs/7.mp3", coverPath: "../covers/lightswitch.jpg" },
    { songname: "Eight -IU", filePath: "../songs/8.mp3", coverPath: "../covers/eight.jpg" },
    { songname: "Akuma no ko", filePath: "../songs/9.mp3", coverPath: "../covers/akuma_no_ko.jpg" },
    { songname: "Orange", filePath: "../songs/10.mp3", coverPath: "../covers/orange.jpg" },
    { songname: "Again", filePath: "../songs/10.mp3", coverPath: "../covers/again.jpg" },

]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songname;
})

// audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events:


audioElement.addEventListener('timeupdate', () => {

    //Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;

});

myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    
            console.log(e.target);
            makeAllPlays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
    
            audioElement.src =`songs/${songIndex+1}.mp3`
            masterSongName.innerHTML=songs[songIndex].songname;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
          
       

    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{

        songIndex+=1;
    }
        audioElement.src =`songs/${songIndex+1}.mp3`
        masterSongName.innerHTML=songs[songIndex].songname;
        audioElement.currentTime=0
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{

        songIndex-=1;
    }
        audioElement.src =`songs/${songIndex+1}.mp3`
        masterSongName.innerHTML=songs[songIndex].songname;
        audioElement.currentTime=0
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

})
