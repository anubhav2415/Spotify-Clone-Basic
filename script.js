
let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let ProgressBar=document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dil Hi Toh Hai - The Sky Is Pink", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Raazi", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Chailla By Sunidhi x Shreya ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Aisa-Kyun Ghazal Version", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Bhaag Milkha Bhaag", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tu Hai Kahan By AUR", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Aasa_Kooda by Sai Abhyankkar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Zaalima", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dil Tu Jaan Tu", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Kasturi By Arijit Singh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Chal Kudiye BY Diljit Dosanjh", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Chak Lein De - CC2C", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// audioElement.play();


//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//Listen
audioElement.addEventListener('timeupdate',()=>{
    //seekbar
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value=Progress;
})

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=ProgressBar.value*audioElement.duration/100;

})
const makeallPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>11){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');  
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');  
})