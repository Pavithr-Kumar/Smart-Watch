var timebt=document.getElementById("time-btn");
var time=document.getElementById("time");
var heartbt=document.getElementById("heart-btn");
var heart=document.getElementById("heart");
var color=document.getElementsByTagName('li')
var img=document.getElementById("img");
//let sty=window.getComputedStyle(img).backgroundImage;
console.log(color);
var red=document.getElementById("red");
for(var i=-1;i<5;i++){
    //let sty=window.getComputedStyle(img).backgroundImage;

    
        //let sty=window.getComputedStyle(img).backgroundImage;

        red.addEventListener('click',function(){
            img.style.backgroundImage="URL('https://ashar2301.github.io/Coursera/images/watch-red.png')";
             
        })
    
        
    
    if(i=1){
        color[1].addEventListener('click',function(){
            img.style.backgroundImage="URL('https://ashar2301.github.io/Coursera/images/watch-black.png')";
            
    
        })
    }
    if(i=2){
        color[2].addEventListener('click',function(){
            img.style.backgroundImage="URL('https://ashar2301.github.io/Coursera/images/watch-blue.png')";
    
    
        })
    }
    if(i=3){
        color[3].addEventListener('click',function(){
            img.style.backgroundImage="URL('https://ashar2301.github.io/Coursera/images/watch-pink.png')";
    
    
        })
    }
    if(i=4){
        color[4].addEventListener('click',function(){
            img.style.backgroundImage="URL('https://ashar2301.github.io/Coursera/images/watch-purple.png')";
    
    
        })
    }

}

timebt.addEventListener('click',function(){
    heart.classList.add('active');
    time.classList.remove('active');
})

heartbt.addEventListener('click',function(){
    heart.classList.remove('active');
    time.classList.add('active');
    
})

 var preTime=document.querySelector('#time>p');
 setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec;

  preTime.innerHTML = currentTime;
}
showTime();
