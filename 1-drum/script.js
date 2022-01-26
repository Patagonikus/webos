function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        // setTimeout(function(){
        //     key.classList.remove("playing");

        // },1.07);

        setInterval(() => {
            key.classList.remove("playing");
            
        }, 10.07);
    }else{
        console.log("no hay tecla asociada");
    }
}

window.addEventListener('keydown', playSound);
